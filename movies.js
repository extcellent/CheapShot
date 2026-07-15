// ============================================================
// 📽️  ALL MOVIES DATABASE
// ============================================================
// Es gibt ZWEI Abteile:
//
//   1) topMoviesDatabase  -> die TOP 10 (Hochformat-Karten oben).
//      Hier kannst du pro Film ein EIGENES Bild angeben:
//        poster   -> Bild für die Karte (Hochformat)
//        backdrop -> Bild für den großen Hero-Banner oben
//      Beide Felder sind optional: fehlen sie, wird automatisch
//      das YouTube-Thumbnail genommen. Trag maximal 10 Filme ein,
//      der Rest wird ignoriert.
//
//   2) movieDatabase      -> ALLE ANDEREN Filme (Trending, Top
//      Rated, Alle Filme). Diese laufen wie bisher automatisch:
//      Thumbnail kommt direkt von YouTube, die Karten erscheinen
//      im breiten 16:9-Format (wide card).
//
// ============================================================


// ============================================================
// 🏆  TOP 10 — eigene Bilder (poster / backdrop optional)
// ============================================================
const topMoviesDatabase = [
    {
        url: "https://www.youtube.com/watch?v=6_IO-q5X6QQ",
        title: "Don't Be a Menace",
        year: "1996",
        genre: "Comedy",
        rating: 6.5,
        desc: "A parody of hood films where a young man navigates life in the hood.",
        poster: "",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    },
    {
        url: "https://www.youtube.com/watch?v=W3Qvz6tOCW8",
        title: "Zodiac",
        year: "2007",
        genre: "Crime, Drama, Mystery",
        rating: 7.7,
        desc: "A San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified serial murderer who terrorized Northern California in the late 1960s and 1970s.",
        poster: "",
        backdrop: ""
    },
];

// ============================================================
// 📌  TOP 10 — PATTERN ZUM KOPIEREN (max. 10 Einträge):
// ============================================================
// {
//     url: "https://www.youtube.com/watch?v=VIDEO_ID",
//     title: "Movie Title",
//     year: "2024",
//     genre: "Action",
//     rating: 8.5,
//     desc: "Movie description...",
//     poster: "poster-images/movie.png",   // optional, sonst YouTube-Thumbnail
//     backdrop: "backdrops/movie.jpg"      // optional, sonst YouTube-Thumbnail
// },


// ============================================================
// 🎬  ALLE ANDEREN FILME — automatische YouTube-Thumbnails,
//     erscheinen als breite 16:9-Karten (wide card)
// ============================================================
const movieDatabase = [
    {
        url: "https://www.youtube.com/watch?v=6_IO-q5X6QQ",
        title: "Don't Be a Menace",
        year: "1996",
        genre: "Comedy",
        rating: 6.5,
        desc: "A parody of hood films where a young man navigates life in the hood.",
    },
];
// ============================================================
// 📌  RESTLICHE FILME — PATTERN ZUM KOPIEREN:
// ============================================================
// {
//     url: "https://www.youtube.com/watch?v=VIDEO_ID",
//     title: "Movie Title",
//     year: "2024",
//     genre: "Action",
//     rating: 8.5,
//     desc: "Movie description..."
// 
