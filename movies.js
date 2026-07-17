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
//   Hinweis: Das Feld "fsk" wurde durch "duration" ersetzt.
//   duration -> Laufzeit des Films in Minuten (Zahl) oder null,
//   falls die Laufzeit nicht bekannt ist.
//
// ============================================================


// ============================================================
// 🏆  TOP 10 — eigene Bilder (poster / backdrop optional)
//     sortiert nach Rating, absteigend
// ============================================================
const topMoviesDatabase = [
    {
        url: "https://youtu.be/Zx6s-OnFwG8?si=1sUTIWGo_wR1oyLV",
        title: "Heat",
        year: "1995",
        genre: "Action, Crime, Drama",
        rating: 8.3,
        duration: 170,
        director: "Michael Mann",
        cast: ["Al Pacino", "Robert De Niro", "Val Kilmer", "Jon Voight"],
        desc: "An underground high-end burglary crew and the police detective obsessed with catching them collide in Michael Mann's sprawling crime epic.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3b943sWV9jo_CR47cTS_-wQLaAhB8IUunZ69cLdiCyOJ8aY9ZmbLrF8T&s=10",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/DayRQcMrYIQ",
        title: "Warrior",
        year: "2011",
        genre: "Action, Drama, Sport",
        rating: 8.2,
        duration: 140,
        director: "Gavin O'Connor",
        cast: ["Tom Hardy", "Joel Edgerton", "Nick Nolte", "Jennifer Morrison"],
        desc: "Two estranged brothers, both struggling with their past, enter a high-stakes MMA tournament, forcing them to confront each other and their abusive father.",
        poster: "https://m.media-amazon.com/images/I/61Bh9r3J7pL._AC_UF894,1000_QL80_.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/isMhGcLAvfQ",
        title: "The Martian",
        year: "2015",
        genre: "Sci-Fi, Adventure, Drama",
        rating: 8.0,
        duration: 144,
        director: "Ridley Scott",
        cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig", "Jeff Daniels"],
        desc: "An astronaut is stranded alone on Mars after his crew evacuates during a fierce storm, and must find a way to survive and signal Earth that he is alive.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200",
        backdrop: "",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=W3Qvz6tOCW8",
        title: "Zodiac",
        year: "2007",
        genre: "Crime, Drama, Mystery",
        rating: 7.7,
        duration: 157,
        director: "David Fincher",
        cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr.", "Anthony Edwards"],
        desc: "A San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified serial murderer who terrorized Northern California in the late 1960s and 1970s.",
        poster: "https://i.ebayimg.com/images/g/AmkAAOSwsARk3JNb/s-l1200.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/z9TTAWb2p_o",
        title: "Ghost World",
        year: "2001",
        genre: "Comedy, Drama",
        rating: 7.3,
        duration: 111,
        director: "Terry Zwigoff",
        cast: ["Thora Birch", "Scarlett Johansson", "Steve Buscemi", "Brad Renfro"],
        desc: "Two eccentric best friends graduate high school and respond to a man's romance-seeking newspaper ad as a gag, only to find their lives becoming increasingly complicated.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQ4NmFmYzYtNGJmZi00NGNkLTk2YTktM2Q0MzQ5MWRlZGEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/4xgci4gfIyw",
        title: "Patriots Day",
        year: "2016",
        genre: "Action, Drama, History",
        rating: 7.3,
        duration: 133,
        director: "Peter Berg",
        cast: ["Mark Wahlberg", "Kevin Bacon", "John Goodman", "J.K. Simmons"],
        desc: "The true story of the 2013 Boston Marathon bombing and the subsequent manhunt for the perpetrators, told through the eyes of police officers and first responders.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BmtOHjWxDq6V_FjcHMoa6J30-7aMEw8JM0AoDipxLdeliLGEzSrN3jI&s=10",
        backdrop: "",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=H77qOpUTu0U",
        title: "Sleepy Hollow",
        year: "1999",
        genre: "Fantasy, Horror, Mystery",
        rating: 7.3,
        duration: 105,
        director: "Tim Burton",
        cast: ["Johnny Depp", "Christina Ricci", "Miranda Richardson", "Christopher Walken"],
        desc: "Constable Ichabod Crane investigates a series of murders in a village haunted by a legendary headless horseman.",
        poster: "https://m.media-amazon.com/images/M/MV5BMWVjYTFkOTItMGEyZS00Yzk2LTgzZmUtMDZiNjMyZDk5MTY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=RpCz53C5-dw",
        title: "Kingdom of Heaven",
        year: "2005",
        genre: "Action, Adventure, Drama",
        rating: 7.3,
        duration: 144,
        director: "Ridley Scott",
        cast: ["Orlando Bloom", "Eva Green", "Jeremy Irons", "Liam Neeson"],
        desc: "A French blacksmith travels to Jerusalem during the Crusades and becomes the reluctant defender of the city against Saladin's army.",
        poster: "https://images.justwatch.com/poster/302976085/s166/kingdom-of-heaven.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/uvLMS_i-XUw",
        title: "Bridge to Terabithia",
        year: "2007",
        genre: "Adventure, Drama, Family, Fantasy",
        rating: 7.2,
        duration: 96,
        director: "Gábor Csupó",
        cast: ["Josh Hutcherson", "AnnaSophia Robb", "Zooey Deschanel", "Robert Patrick"],
        desc: "Two lonely children create a magical forest kingdom in their imaginations, where they rule as king and queen and face their real-world troubles together.",
        poster: "https://image.tmdb.org/t/p/original/c6iTdD4UvpfDCOFb3BTYb1TpKki.jpg",
        backdrop: "",
        where: []
    },
    {
        url: "https://youtu.be/4STyTOvaBpY",
        title: "Redemption",
        year: "2004",
        genre: "Biography, Crime, Drama",
        rating: 7.0,
        duration: 96,
        director: "Vondie Curtis-Hall",
        cast: ["Jamie Foxx", "Lynn Whitfield", "Lee Thompson Young"],
        desc: "The true story of Stan 'Tookie' Williams, a former gang leader on death row who writes children's books to warn against gang violence, earning Nobel Prize nominations.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdiNTZmZTEtZDU0Zi00Yzk5LWJjYjAtOGQzMDlmMmI1YTkzXkEyXkFqcGc@._V1_.jpg",
        backdrop: "",
        where: []
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
//     duration: 128,                        // Laufzeit in Minuten oder null falls unbekannt
//     director: "Regisseur Name",
//     cast: ["Schauspieler 1", "Schauspieler 2", "Schauspieler 3"],
//     desc: "Movie description...",
//     poster: "poster-images/movie.png",   // optional, sonst YouTube-Thumbnail
//     backdrop: "backdrops/movie.jpg",     // optional, sonst YouTube-Thumbnail
//     where: [
//         { name: "Netflix", url: "https://www.netflix.com/title/12345" },
//         { name: "Amazon Prime Video", url: "https://www.amazon.de/dp/..." }
//     ]
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
        duration: 89,
        director: "Paris Barclay",
        cast: ["Shawn Wayans", "Marlon Wayans", "Tracey Cherelle Jones"],
        desc: "A parody of hood films where a young man navigates life in the hood.",
        where: [
            { name: "Netflix", url: "https://www.netflix.com/title/452508" }
        ]
    },
    {
        url: "https://www.youtube.com/watch?v=oRFnusuSAnQ",
        title: "Dog Soldiers",
        year: "2002",
        genre: "Action, Horror, Thriller",
        rating: 6.8,
        duration: 105,
        director: "Neil Marshall",
        cast: ["Sean Pertwee", "Kevin McKidd", "Emma Cleasby", "Liam Cunningham"],
        desc: "A squad of British soldiers on a training exercise in the Scottish Highlands must fight for survival against a pack of werewolves.",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=6BlWDPRiQ88",
        title: "To Die For",
        year: "1995",
        genre: "Comedy, Crime, Drama",
        rating: 6.8,
        duration: 106,
        director: "Gus Van Sant",
        cast: ["Nicole Kidman", "Matt Dillon", "Joaquin Phoenix", "Casey Affleck"],
        desc: "An ambitious TV weathergirl manipulates a teenager into murdering her husband so nothing can stand in the way of her fame.",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=DoCgEA22CMc",
        title: "Mr. & Mrs. Smith",
        year: "2005",
        genre: "Action, Comedy, Crime",
        rating: 6.5,
        duration: 120,
        director: "Doug Liman",
        cast: ["Brad Pitt", "Angelina Jolie", "Vince Vaughn", "Adam Brody"],
        desc: "A bored married couple discovers they are both secretly assassins working for rival agencies, hired to kill each other.",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=leEKHvCg7HE",
        title: "Halloween 4: The Return of Michael Myers",
        year: "1988",
        genre: "Horror, Thriller",
        rating: 5.8,
        duration: 88,
        director: "Dwight H. Little",
        cast: ["Donald Pleasence", "Ellie Cornell", "Danielle Harris"],
        desc: "Michael Myers escapes custody and returns to Haddonfield to hunt down his young niece, Jamie Lloyd.",
        where: [
            { name: "Amazon Prime Video", url: "https://www.justwatch.com/de/Film/Halloween-4-The-Return-of-Michael-Myers" }
        ]
    },
    {
        url: "https://www.youtube.com/watch?v=IWuZB53pDn4",
        title: "Jeepers Creepers 2",
        year: "2003",
        genre: "Horror",
        rating: 5.7,
        duration: 104,
        director: "Victor Salva",
        cast: ["Ray Wise", "Jonathan Breck", "Nicki Aycox"],
        desc: "On the last day of its 23-day feeding cycle, the winged Creeper attacks a school bus full of stranded basketball players.",
        where: [
            { name: "Netflix", url: "https://www.netflix.com/title/60029216" }
        ]
    },
    {
        url: "https://www.youtube.com/watch?v=xbsBVEPtLFs",
        title: "Mr. Popper's Penguins",
        year: "2011",
        genre: "Comedy, Family, Fantasy",
        rating: 6.0,
        duration: 94,
        director: "Mark Waters",
        cast: ["Jim Carrey", "Carla Gugino", "Angela Lansbury"],
        desc: "A workaholic businessman inherits six penguins from his late father and they turn his life and career upside down.",
        where: [
            { name: "Netflix", url: "https://www.netflix.com/title/70178623" }
        ]
    },
    {
        url: "https://www.youtube.com/watch?v=ROY1YDlYUNc",
        title: "Jeepers Creepers",
        year: "2001",
        genre: "Horror, Mystery",
        rating: 6.2,
        duration: 90,
        director: "Victor Salva",
        cast: ["Gina Philips", "Justin Long", "Jonathan Breck"],
        desc: "A brother and sister driving home for spring break are stalked by a mysterious, ancient creature feeding on the last day of its cycle.",
        where: [
            { name: "Netflix", url: "https://www.netflix.com/title/60020999" }
        ]
    },
    {
        url: "https://www.youtube.com/watch?v=T6SJ8Y9VeIU",
        title: "Snake Eyes",
        year: "1998",
        genre: "Crime, Mystery, Thriller",
        rating: 6.1,
        duration: 98,
        director: "Brian De Palma",
        cast: ["Nicolas Cage", "Gary Sinise", "Carla Gugino"],
        desc: "A corrupt Atlantic City cop investigates the assassination of the Secretary of Defense during a championship boxing match.",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=XcQKx93cIik",
        title: "Halloween 5: The Revenge of Michael Myers",
        year: "1989",
        genre: "Horror, Thriller",
        rating: 4.9,
        duration: 96,
        director: "Dominique Othenin-Girard",
        cast: ["Donald Pleasence", "Danielle Harris", "Ellie Cornell"],
        desc: "A year after his last rampage, Michael Myers returns to Haddonfield to hunt down his traumatized, now-mute niece Jamie.",
        where: [
            { name: "Netflix", url: "https://www.netflix.com/title/60002050" }
        ]
    },
    {
        url: "https://youtu.be/BGMzGHcjKvE",
        title: "Never Back Down",
        year: "2008",
        genre: "Action, Drama, Sport",
        rating: 6.5,
        duration: 113,
        director: "Jeff Wadlow",
        cast: ["Sean Faris", "Amber Heard", "Cam Gigandet", "Evan Peters", "Djimon Hounsou"],
        desc: "A frustrated teenager arrives at a new high school and discovers an underground fight club, finding a mentor in a mixed martial arts veteran.",
        where: []
    },
    {
        url: "https://youtu.be/_w2ZVTmcdi8",
        title: "Jumper",
        year: "2008",
        genre: "Action, Adventure, Sci-Fi",
        rating: 6.1,
        duration: 88,
        director: "Doug Liman",
        cast: ["Hayden Christensen", "Samuel L. Jackson", "Rachel Bilson", "Jamie Bell"],
        desc: "A young man with teleportation abilities finds himself in the middle of an ancient war between those like him and their sworn enemies.",
        where: []
    },
    {
        url: "https://youtu.be/SEIqCe_0OX0",
        title: "xXx",
        year: "2002",
        genre: "Action, Adventure, Thriller",
        rating: 5.8,
        duration: 124,
        director: "Rob Cohen",
        cast: ["Vin Diesel", "Asia Argento", "Marton Csokas", "Samuel L. Jackson"],
        desc: "An extreme sports athlete is recruited by the NSA to infiltrate a Russian crime ring and stop their plans to unleash a weapon of mass destruction.",
        where: []
    },
    {
        url: "https://youtu.be/Jl7n213ZPT0",
        title: "Bad Teacher",
        year: "2011",
        genre: "Comedy, Romance",
        rating: 5.6,
        duration: 92,
        director: "Jake Kasdan",
        cast: ["Cameron Diaz", "Justin Timberlake", "Jason Segel", "Lucy Punch"],
        desc: "A lazy, incompetent middle school teacher is forced to return to teaching to make enough money for breast implants after her wealthy fiancé dumps her.",
        where: []
    },
    {
        url: "https://youtu.be/HwZSh-l4Aqw",
        title: "The Interview",
        year: "2014",
        genre: "Action, Comedy",
        rating: 6.5,
        duration: 112,
        director: "Evan Goldberg, Seth Rogen",
        cast: ["James Franco", "Seth Rogen", "Randall Park", "Lizzy Caplan"],
        desc: "A talk show host and his producer discover that they have been recruited to assassinate the leader of North Korea during an interview.",
        where: []
    },
    {
        url: "https://youtu.be/a8MOVVPYW_M",
        title: "Wedding Planner",
        year: "2001",
        genre: "Comedy, Romance",
        rating: 5.3,
        duration: 103,
        director: "Adam Shankman",
        cast: ["Jennifer Lopez", "Matthew McConaughey", "Bridgette Wilson-Sampras", "Justin Chambers"],
        desc: "A successful wedding planner finds herself falling for a handsome doctor, only to discover that he is about to marry one of her clients.",
        where: []
    },
    {
        url: "https://youtu.be/sNBHqbOzv_Q",
        title: "Favela",
        year: "2014",
        genre: "Action, Crime, Thriller",
        rating: 6.0,
        duration: null,
        director: "Ruy Guerra",
        cast: ["Eduardo Moscovis", "Milton Gonçalves", "Fábio Lago", "Tainá Müller"],
        desc: "A former special forces operative travels to Rio de Janeiro to rescue his kidnapped son, uncovering a web of corruption and violence in the city's favelas.",
        where: []
    },
    {
        url: "https://youtu.be/zu8CSX0lwhE",
        title: "Project X",
        year: "2012",
        genre: "Comedy",
        rating: 6.7,
        duration: 88,
        director: "Nima Nourizadeh",
        cast: ["Thomas Mann", "Oliver Cooper", "Jonathan Daniel Brown", "Dax Flame"],
        desc: "Three high school seniors throw a party that quickly spirals out of control, turning their quiet neighborhood into a chaotic warzone.",
        where: []
    },
    {
        url: "https://youtu.be/1hQqv7YjyoA",
        title: "Expend4bles",
        year: "2023",
        genre: "Action, Adventure, Thriller",
        rating: 4.8,
        duration: 103,
        director: "Scott Waugh",
        cast: ["Jason Statham", "50 Cent", "Megan Fox", "Dolph Lundgren", "Tony Jaa", "Sylvester Stallone"],
        desc: "Armed with every weapon they can get their hands on, the Expendables are the world's last line of defense when all other options are off the table.",
        where: []
    },
    {
        url: "https://youtu.be/QFgbAJbfz28",
        title: "Death Proof",
        year: "2007",
        genre: "Action, Thriller",
        rating: 7.0,
        duration: 113,
        director: "Quentin Tarantino",
        cast: ["Kurt Russell", "Zoë Bell", "Rosario Dawson", "Vanessa Ferlito", "Mary Elizabeth Winstead"],
        desc: "A psychotic stuntman stalks and murders young women using his 'death-proof' car, but his plans are disrupted when he targets a group of fearless friends.",
        where: []
    },
    {
        url: "https://youtu.be/g3ecBMZYbEM",
        title: "The Punisher",
        year: "1989",
        genre: "Action, Crime, Drama",
        rating: 5.7,
        duration: 89,
        director: "Mark Goldblatt",
        cast: ["Dolph Lundgren", "Louis Gossett Jr.", "Jeroen Krabbé", "Kim Miyori"],
        desc: "A vigilante wages a one-man war on the Mafia and Yakuza after his family is killed by a mob bombing, using his military skills to deliver brutal justice.",
        where: []
    },
    {
        url: "https://youtu.be/sx8pViXxZQg",
        title: "Big Stan",
        year: "2007",
        genre: "Comedy, Crime",
        rating: 6.0,
        duration: 97,
        director: "Rob Schneider",
        cast: ["Rob Schneider", "David Carradine", "Jennifer Morrison", "Scott Wilson"],
        desc: "A con artist sentenced to prison hires a martial arts master to help him survive, and he soon becomes the prison's unlikely peacekeeper against a corrupt warden.",
        where: []
    },
    {
        url: "https://youtu.be/rwsGIPTDB0o",
        title: "Blood And Bone",
        year: "2009",
        genre: "Action, Crime, Drama",
        rating: 6.7,
        duration: 89,
        director: "Ben Ramsey",
        cast: ["Michael Jai White", "Eamonn Walker", "Julian Sands", "Dante Basco"],
        desc: "In Los Angeles, an ex-con takes the underground fighting world by storm in his quest to fulfill a promise to a dead friend.",
        where: []
    },
    {
        url: "https://youtu.be/urf7dasypWU",
        title: "Now You See Me",
        year: "2013",
        genre: "Crime, Mystery, Thriller",
        rating: 7.2,
        duration: 116,
        director: "Louis Leterrier",
        cast: ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Isla Fisher", "Dave Franco", "Morgan Freeman", "Michael Caine"],
        desc: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
        where: []
    },
    {
        url: "https://youtu.be/3OtmHQE6T2s",
        title: "Flower",
        year: "2017",
        genre: "Comedy, Drama",
        rating: 5.9,
        duration: 90,
        director: "Max Winkler",
        cast: ["Zoey Deutch", "Kathryn Hahn", "Tim Heidecker", "Adam Scott", "Joey Morgan"],
        desc: "A rebellious teen blackmails older men for money to bail out her father, but a plan for revenge against her mother's boyfriend takes an unexpected and dangerous turn.",
        where: []
    },
    {
        url: "https://youtu.be/DcxVA2YxLjw",
        title: "Scary Stories to Tell in the Dark",
        year: "2019",
        genre: "Horror, Mystery, Thriller",
        rating: 6.2,
        duration: 108,
        director: "André Øvredal",
        cast: ["Zoe Margaret Colletti", "Michael Garza", "Gabriel Rush", "Austin Zajur", "Dean Norris", "Gil Bellows"],
        desc: "In 1968, a group of teenagers discover a book of terrifying stories that begin to come true, and they must find a way to stop the evil force behind them.",
        where: []
    },
    {
        url: "https://youtu.be/CiqSiMGLclw",
        title: "Paid In Full",
        year: "2002",
        genre: "Crime, Drama",
        rating: 6.9,
        duration: 99,
        director: "Charles Stone III",
        cast: ["Wood Harris", "Mekhi Phifer", "Kevin Carroll", "Carla Gugino", "Cam'ron"],
        desc: "A young man rises to the top of the cocaine industry in Harlem during the 1980s, but his success comes at a devastating cost to himself and his friends.",
        where: []
    },
    {
        url: "https://youtu.be/fbuQT7MSM04",
        title: "A Working Man (No Mercy)",
        year: "2025",
        genre: "Action, Thriller",
        rating: 6.5,
        duration: 116,
        director: "David Ayer",
        cast: ["Jason Statham", "David Harbour", "Michael Peña", "Jason Flemyng", "Arianna Rivas"],
        desc: "A former military operative living a quiet life as a construction worker must use his skills to rescue his boss's daughter after she is kidnapped by a human trafficking ring.",
        where: []
    },
    {
        url: "https://youtu.be/qvZHepVKj-Q",
        title: "American Spy",
        year: "2025",
        genre: "Action, Thriller",
        rating: null,
        duration: null,
        director: "Eric Colley",
        cast: ["Kyle McLaughlin", "Chloe Condon", "Julia Eve", "Mat Vario", "Derek A. Smith"],
        desc: "An ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders, but when a celebrated war hero goes down in defeat, the fate of the planet hangs in the balance.",
        where: []
    },
    {
        url: "https://youtu.be/ciICU2bKz8A",
        title: "OtherLife",
        year: "2017",
        genre: "Sci-Fi, Thriller, Mystery",
        rating: 5.7,
        duration: 100,
        director: "Ben C. Lucas",
        cast: ["Jessica De Gouw", "Thomas Cocquerel", "T.J. Power", "Liam Graham"],
        desc: "A tech innovator creates a revolutionary virtual reality drug that allows users to experience hours of 'other life' in mere minutes, but she soon discovers a dark and dangerous side effect.",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=UnTb9y1ubeU",
        title: "Underworld",
        year: "2003",
        genre: "Action, Fantasy, Thriller",
        rating: 7.0,
        duration: 121,
        director: "Len Wiseman",
        cast: ["Kate Beckinsale", "Scott Speedman", "Michael Sheen", "Shane Brolly", "Bill Nighy"],
        desc: "A vampire warrior falls for a human caught in the centuries-old war between vampires and werewolves.",
        where: []
    }
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
//     duration: 128,               // Laufzeit in Minuten oder null falls unbekannt
//     director: "Director Name",
//     cast: ["Actor 1", "Actor 2", "Actor 3"],
//     desc: "Movie description..."
// }
