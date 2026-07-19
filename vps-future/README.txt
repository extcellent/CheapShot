=== VPS-Migration: Geo-Erkennung ohne Vercel ===

Dieser Ordner enthält die vorbereitete Lösung für den Fall, dass die
Seite von Vercel auf einen eigenen VPS oder anderen Host umzieht.

WARUM DIESER ORDNER EXISTIERT:
Auf Vercel läuft die Länder-Erkennung über middleware.js + den
eingebauten Header x-vercel-ip-country (Edge Runtime, kein echtes
Node.js, kein npm-Paket nötig).

Auf einem VPS gibt es diesen Header nicht - dafür braucht man einen
echten Node.js-Server (Express) + eine eigene GeoIP-Datenbank
(geoip-lite). Das ist der Zweck von server.js in diesem Ordner.

WICHTIG: Dieser Ordner wird von Vercel komplett ignoriert
(siehe .vercelignore im Projekt-Root -> "vps-future" Eintrag).
Die Pakete hier (express, geoip-lite) NIEMALS in die Haupt-
package.json im Projekt-Root eintragen - das würde die aktuell
funktionierende Vercel-Middleware kaputt machen (Edge Runtime
unterstützt diese Pakete nicht).

WAS SICH BEIM UMZUG NICHT ÄNDERT:
- streaming.html, browse.html, movies-de.js, movies-us.js bleiben
  exakt wie sie sind
- Der Client-Code, der den Cookie "visitor_country" ausliest
  (getCountryFromCookie), bleibt unverändert
- Nur die Art, WIE der Cookie gesetzt wird, ändert sich
  (middleware.js -> server.js)

SCHRITTE BEIM TATSÄCHLICHEN UMZUG AUF EINEN VPS:

1. Neues Projektverzeichnis auf dem VPS anlegen, z.B.:
   git clone https://github.com/extcellent/CheapShot.git
   cd CheapShot

2. Alle HTML/JS-Dateien (about.html, browse.html, index.html,
   legal-notice.html, movies-de.js, movies-us.js, streaming.html,
   cheapshot.png) in einen Unterordner "public/" verschieben,
   falls nicht schon dort.

3. Inhalt von vps-future/ ins Projekt-Root kopieren:
   - server.js  -> Projekt-Root
   - package.json -> Projekt-Root (ERSETZT die alte Vercel-package.json
     komplett, nicht zusammenführen)

4. middleware.js kann gelöscht werden (wird auf einem VPS nicht
   genutzt, nur server.js übernimmt jetzt die Cookie-Logik)

5. Dependencies installieren:
   npm install

6. Server dauerhaft am Laufen halten (pm2 hält den Prozess bei
   Absturz/Neustart automatisch am Leben):
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save

7. Nginx als Reverse-Proxy davorschalten (Port 80/443 -> Port 3000)
   + HTTPS-Zertifikat über Let's Encrypt (certbot) einrichten.
   Das übernimmt bei Vercel automatisch das Netzwerk selbst,
   auf einem VPS muss das manuell konfiguriert werden.

8. DNS der Domain auf die neue VPS-IP umstellen.

TESTEN NACH DEM UMZUG:
- Seite im Browser öffnen, DevTools -> Network -> ersten Request
  prüfen -> steht dort "set-cookie: visitor_country=..."?
- Falls das Land falsch erkannt wird: geoip-lite Datenbank ist evtl.
  veraltet -> "npm update geoip-lite" hilft meistens.

STAND: Vorbereitet am 19.07.2026, noch nicht im produktiven Einsatz.
