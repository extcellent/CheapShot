// ============================================================
// 🔄  TMDB Auto-Update Script
// ============================================================
// Was das hier macht:
//   1) Öffnet movies-de.js / movies-us.js (im Repo-Root, Pfade
//      unten anpassbar) und liest ALLE Filme aus beiden Arrays
//      (topMoviesDatabase + movieDatabase).
//   2) Fragt für jeden Film bei TMDB die aktuellen Werte ab:
//        - vote_count    -> wird zu "vote_count"
//        - popularity    -> wird zu "popularity"
//      "rating" wird NICHT angefasst (bleibt dein manueller Wert).
//   3) Schreibt NUR diese zwei Felder neu. Alles andere (rating,
//      poster, desc, cast, where, Kommentare, Formatierung, ...)
//      bleibt exakt so, wie es ist. Das übernimmt "recast"
//      (AST-Editor), keine simple Text-Ersetzung.
//   4) Beim ersten Lauf wird zusätzlich ein neues Feld "tmdbId"
//      pro Film gespeichert. Ab dem zweiten Lauf wird darüber
//      DIREKT abgefragt (viel zuverlässiger als erneut per
//      Titel/Jahr zu suchen, und spart TMDB-Requests).
//
// Aufruf lokal zum Testen:
//   TMDB_API_KEY=xxxxx node scripts/update-movies.mjs
//
// In GitHub Actions wird TMDB_API_KEY aus einem Repo-Secret
// injiziert (siehe .github/workflows/update-movies.yml).
// ============================================================

import fs from "fs";
import path from "path";
import * as recast from "recast";

const b = recast.types.builders;

const TMDB_API_KEY = process.env.TMDB_API_KEY;
if (!TMDB_API_KEY) {
  console.error("❌ TMDB_API_KEY fehlt (Umgebungsvariable / Secret nicht gesetzt).");
  process.exit(1);
}

// -----------------------------------------------------------
// Pfade relativ zum Repo-Root (dort liegt auch die package.json)
// -----------------------------------------------------------
const TARGET_FILES = [
  "public/movies-de.js",
  "public/movies-us.js",
];

const ARRAY_NAMES = ["topMoviesDatabase", "movieDatabase"];

const TMDB_BASE = "https://api.themoviedb.org/3";
const REQUEST_DELAY_MS = 260; // ~4 Requests/Sekunde, bleibt sicher unter TMDBs Limit

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeTitle(t) {
  return t
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // Akzente entfernen
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function tmdbFetch(url) {
  const res = await fetch(url, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`TMDB HTTP ${res.status} für ${url}`);
  }
  return res.json();
}

// Holt Live-Daten direkt über die bekannte TMDB-ID (bevorzugt, ab 2. Lauf)
async function fetchById(id) {
  const url = `${TMDB_BASE}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
  return tmdbFetch(url);
}

// Sucht per Titel+Jahr (nur nötig, wenn noch keine tmdbId bekannt ist)
async function searchByTitleYear(title, year) {
  const params = new URLSearchParams({
    api_key: TMDB_API_KEY,
    query: title,
    include_adult: "false",
    language: "en-US",
  });
  if (year) params.set("year", String(year).slice(0, 4));

  const url = `${TMDB_BASE}/search/movie?${params.toString()}`;
  const data = await tmdbFetch(url);
  if (!data.results || data.results.length === 0) return null;

  const wantedTitle = normalizeTitle(title);
  const wantedYear = year ? parseInt(String(year).slice(0, 4), 10) : null;

  // Bestes Match: exakter normalisierter Titel + möglichst nahes Jahr
  let best = null;
  let bestScore = -Infinity;

  for (const r of data.results) {
    const rTitle = normalizeTitle(r.title || r.original_title || "");
    const rYear = r.release_date ? parseInt(r.release_date.slice(0, 4), 10) : null;

    let score = 0;
    if (rTitle === wantedTitle) score += 100;
    else if (rTitle.includes(wantedTitle) || wantedTitle.includes(rTitle)) score += 40;
    else continue; // Titel passt gar nicht -> ignorieren

    if (wantedYear && rYear) {
      const diff = Math.abs(rYear - wantedYear);
      if (diff === 0) score += 50;
      else if (diff === 1) score += 20;
      else score -= diff * 5;
    }
    score += Math.min(r.popularity || 0, 20) / 20; // leichter Tie-Breaker

    if (score > bestScore) {
      bestScore = score;
      best = r;
    }
  }

  if (!best || bestScore < 40) return null; // zu unsicher -> lieber skippen
  return best;
}

function getStringProp(objExpr, name) {
  const prop = objExpr.properties.find(
    (p) => (p.key.name || p.key.value) === name
  );
  if (!prop) return undefined;
  const v = prop.value;
  if (v.type === "Literal" || v.type === "StringLiteral" || v.type === "NumericLiteral") {
    return v.value;
  }
  return undefined;
}

function setNumericProp(objExpr, name, value, insertAfter) {
  let prop = objExpr.properties.find(
    (p) => (p.key.name || p.key.value) === name
  );
  const literal = b.numericLiteral
    ? b.numericLiteral(value)
    : b.literal(value);

  if (prop) {
    prop.value = literal;
    return prop;
  }

  prop = b.property("init", b.identifier(name), literal);
  if (insertAfter) {
    const idx = objExpr.properties.indexOf(insertAfter);
    objExpr.properties.splice(idx + 1, 0, prop);
  } else {
    objExpr.properties.push(prop);
  }
  return prop;
}

async function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  ${filePath} existiert nicht, wird übersprungen.`);
    return;
  }

  console.log(`\n📂 Verarbeite ${filePath} ...`);
  const src = fs.readFileSync(filePath, "utf8");
  const ast = recast.parse(src);

  const movieNodes = []; // { title, year, objExpr }

  recast.types.visit(ast, {
    visitVariableDeclarator(p) {
      const name = p.node.id.name;
      if (ARRAY_NAMES.includes(name) && p.node.init && p.node.init.elements) {
        for (const el of p.node.init.elements) {
          if (!el || el.type !== "ObjectExpression") continue;
          const title = getStringProp(el, "title");
          const year = getStringProp(el, "year");
          if (title) movieNodes.push({ title, year, objExpr: el });
        }
      }
      this.traverse(p);
    },
  });

  console.log(`   ${movieNodes.length} Filme gefunden.`);

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const movie of movieNodes) {
    try {
      const tmdbIdProp = movie.objExpr.properties.find(
        (p) => (p.key.name || p.key.value) === "tmdbId"
      );
      const existingId = tmdbIdProp ? tmdbIdProp.value.value : null;

      let result = null;
      if (existingId) {
        result = await fetchById(existingId);
      } else {
        result = await searchByTitleYear(movie.title, movie.year);
      }

      await sleep(REQUEST_DELAY_MS);

      if (!result) {
        console.log(`   ⚠️  Kein TMDB-Treffer: "${movie.title}" (${movie.year || "?"})`);
        skipped++;
        continue;
      }

      const voteCount = result.vote_count ?? 0;
      const popularity = Math.round((result.popularity ?? 0) * 10) / 10;

      // Ankerpunkt für neu einzufügende Felder (nur relevant, falls ein
      // Film noch kein popularity/vote_count hat) -> direkt nach "rating"
      const ratingProp = movie.objExpr.properties.find(
        (p) => (p.key.name || p.key.value) === "rating"
      );

      const popProp = setNumericProp(movie.objExpr, "popularity", popularity, ratingProp);
      setNumericProp(movie.objExpr, "vote_count", voteCount, popProp);

      if (!existingId && result.id) {
        setNumericProp(movie.objExpr, "tmdbId", result.id, popProp);
      }

      updated++;
    } catch (err) {
      console.log(`   ❌ Fehler bei "${movie.title}": ${err.message}`);
      failed++;
    }
  }

  const output = recast.print(ast).code;
  if (output !== src) {
    fs.writeFileSync(filePath, output, "utf8");
    console.log(`   💾 ${filePath} aktualisiert.`);
  } else {
    console.log(`   ℹ️  Keine Änderungen an ${filePath}.`);
  }

  console.log(`   ✅ aktualisiert: ${updated} | ⚠️ übersprungen: ${skipped} | ❌ Fehler: ${failed}`);
}

async function main() {
  for (const file of TARGET_FILES) {
    await processFile(path.resolve(process.cwd(), file));
  }
  console.log("\n🏁 Fertig.");
}

main().catch((err) => {
  console.error("Unerwarteter Fehler:", err);
  process.exit(1);
});
