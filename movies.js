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
        url: "https://www.youtube.com/watch?v=6BlWDPRiQ88",
        title: "Heat",
        year: "1995",
        genre: "Action, Crime, Drama",
        rating: 8.3,
        desc: "An underground high-end burglary crew and the police detective obsessed with catching them collide in Michael Mann's sprawling crime epic.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3b943sWV9jo_CR47cTS_-wQLaAhB8IUunZ69cLdiCyOJ8aY9ZmbLrF8T&s=10",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    },
    {
        url: "https://www.youtube.com/watch?v=W3Qvz6tOCW8",
        title: "Zodiac",
        year: "2007",
        genre: "Crime, Drama, Mystery",
        rating: 7.7,
        desc: "A San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified serial murderer who terrorized Northern California in the late 1960s and 1970s.",
        poster: "https://i.ebayimg.com/images/g/AmkAAOSwsARk3JNb/s-l1200.jpg",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    },
    {
        url: "https://www.youtube.com/watch?v=H77qOpUTu0U",
        title: "Sleepy Hollow",
        year: "1999",
        genre: "Fantasy, Horror, Mystery",
        rating: 7.3,
        desc: "Constable Ichabod Crane investigates a series of murders in a village haunted by a legendary headless horseman.",
        poster: "https://m.media-amazon.com/images/M/MV5BMWVjYTFkOTItMGEyZS00Yzk2LTgzZmUtMDZiNjMyZDk5MTY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    },
    {
        url: "https://www.youtube.com/watch?v=RpCz53C5-dw",
        title: "Kingdom of Heaven",
        year: "2005",
        genre: "Action, Adventure, Drama",
        rating: 7.3,
        desc: "A French blacksmith travels to Jerusalem during the Crusades and becomes the reluctant defender of the city against Saladin's army",
        poster: "https://images.justwatch.com/poster/302976085/s166/kingdom-of-heaven.jpg",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    },
    {
        url: "https://www.youtube.com/watch?v=UnTb9y1ubeU",
        title: "Underworld",
        year: "2003",
        genre: "Action, Fantasy, Thriller",
        rating: 7.0,
        desc: "A vampire warrior falls for a human caught in the centuries-old war between vampires and werewolves.",
        poster: "https://image.tmdb.org/t/p/original/4FCEWjXoEJvCt4Jpq1fuJwMZTTL.jpg",   // z.B. "poster-images/dontbeamenace.png" oder ein Link
        backdrop: ""  // z.B. "backdrops/dontbeamenace.jpg" oder ein Link
    }
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
    {
        url: "https://www.youtube.com/watch?v=oRFnusuSAnQ",
        title: "Dog Soldiers",
        year: "2002",
        genre: "Action, Horror, Thriller",
        rating: 6.8,
        desc: "A squad of British soldiers on a training exercise in the Scottish Highlands must fight for survival against a pack of werewolves."
    },
    {
        url: "https://www.youtube.com/watch?v=6BlWDPRiQ88",
        title: "To Die For",
        year: "1995",
        genre: "Comedy, Crime, Drama",
        rating: 6.8,
        desc: "An ambitious TV weathergirl manipulates a teenager into murdering her husband so nothing can stand in the way of her fame."
    },
    {
        url: "https://www.youtube.com/watch?v=DoCgEA22CMc",
        title: "Mr. & Mrs. Smith",
        year: "2005",
        genre: "Action, Comedy, Crime",
        rating: 6.5,
        desc: "A bored married couple discovers they are both secretly assassins working for rival agencies, hired to kill each other."
    },
    {
        url: "https://www.youtube.com/watch?v=leEKHvCg7HE",
        title: "Halloween 4: The Return of Michael Myers",
        year: "1988",
        genre: "Horror, Thriller",
        rating: 5.8,
        desc: "Michael Myers escapes custody and returns to Haddonfield to hunt down his young niece, Jamie Lloyd."
    },
    {
        url: "https://www.youtube.com/watch?v=IWuZB53pDn4",
        title: "Jeepers Creepers 2",
        year: "2003",
        genre: "Horror",
        rating: 5.7,
        desc: "On the last day of its 23-day feeding cycle, the winged Creeper attacks a school bus full of stranded basketball players."
    },
    {
        url: "https://www.youtube.com/watch?v=xbsBVEPtLFs",
        title: "Mr. Popper's Penguins",
        year: "2011",
        genre: "Comedy, Family, Fantasy",
        rating: 6.0,
        desc: "A workaholic businessman inherits six penguins from his late father and they turn his life and career upside down."
    },
    {
        url: "https://www.youtube.com/watch?v=ROY1YDlYUNc",
        title: "Jeepers Creepers",
        year: "2001",
        genre: "Horror, Mystery",
        rating: 6.2,
        desc: "A brother and sister driving home for spring break are stalked by a mysterious, ancient creature feeding on the last day of its cycle."
    },
    {
        url: "https://www.youtube.com/watch?v=T6SJ8Y9VeIU",
        title: "Snake Eyes",
        year: "1998",
        genre: "Crime, Mystery, Thriller",
        rating: 6.1,
        desc: "A corrupt Atlantic City cop investigates the assassination of the Secretary of Defense during a championship boxing match."
    },
    {
        url: "https://www.youtube.com/watch?v=XcQKx93cIik",
        title: "Halloween 5: The Revenge of Michael Myers",
        year: "1989",
        genre: "Horror, Thriller",
        rating: 4.9,
        desc: "A year after his last rampage, Michael Myers returns to Haddonfield to hunt down his traumatized, now-mute niece Jamie."
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
