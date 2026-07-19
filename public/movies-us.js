

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
        url: "https://www.youtube.com/watch?v=QnmMjj9e2Dc",
        title: "Titanic",
        year: 1997,
        genre: "Drama, Romance",
        rating: 7.9,
        duration: 194,
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher", "Gloria Stuart"],
        desc: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        poster: "https://image.tmdb.org/t/p/w780/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/xnHVX37XZEp33hhCbYlQFq7ux1J.jpg",
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
        poster: "https://wallpapercave.com/wp/wp10599176.jpg",
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
        thumbnail: "https://wallpapercat.com/w/full/d/0/8/2077084-1920x1080-desktop-1080p-patriots-day-2016-movie-background-image.jpg",
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
        url: "https://www.youtube.com/watch?v=fl4Vbc0jY6A",
        title: "Troy",
        year: 2004,
        genre: "War, Action, History",
        rating: 7.2,
        duration: 163,
        director: "Wolfgang Petersen",
        cast: ["Brad Pitt", "Orlando Bloom", "Eric Bana", "Brian Cox", "Sean Bean", "Brendan Gleeson"],
        desc: "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. They set off with 1,000 ships holding 50,000 Greeks to Troy.",
        poster: "https://image.tmdb.org/t/p/w780/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/d3z8MH9OvTOOSxy5QwAG0cS6GKU.jpg",
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
        thumbnail: "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/9c/2ac627c55b4470c2157f5cee18025210_1920x1080.jpg?t=1636156573",
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
// 🎬  ALLE ANDEREN FILME — automatische YouTube-Thumbnails,
//     erscheinen als breite 16:9-Karten (wide card)
// ============================================================
const movieDatabase = [
    {
        url: "https://www.youtube.com/watch?v=PHWkrGtRNy4",
        title: "The Bone Collector",
        year: 1999,
        genre: "Crime, Thriller, Drama, Mystery",
        rating: 6.8,
        duration: 118,
        director: "Phillip Noyce",
        cast: ["Denzel Washington", "Angelina Jolie", "Queen Latifah", "Michael Rooker", "Michael McGlone", "Luis Guzmán"],
        desc: "Lincoln Rhyme was the department's top homicide detective and leading expert in criminal forensics until an injury left him paralyzed, depressed, and incapable of working. But when a gruesome murder in Manhattan leaves detectives baffled, they call on Rhyme to help solve the mystery. Amelia Donaghy, a rookie cop whose quick thinking preserved a gruesome murder scene, is enlisted by Rhyme to be his on-the-scene forensics expert. With Amelia reluctantly acting as Rhyme's able-bodied go-between, the pair piece together cryptic clues the killer leaves behind at the scene of the crime, hoping to catch the grisly serial killer.",
        poster: "https://image.tmdb.org/t/p/w780/7atMCqRaDpAOnGsteTRm17zmvN3.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/pjOF5ury4p8di4vDPBFSlpf2Vre.jpg",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=A_HFfM4lqyQ",
        title: "Kingpin",
        year: 1996,
        genre: "Comedy",
        rating: 6.5,
        duration: 114,
        director: "Bobby Farrelly, Peter Farrelly",
        cast: ["Woody Harrelson", "Randy Quaid", "Vanessa Angel", "Bill Murray", "Chris Elliott", "William Jordan"],
        desc: "After bowler Roy Munson swindles the wrong crowd and is left with a hook for a hand, he settles into impoverished obscurity. That is, until he uncovers the next big thing: an Amish kid named Ishmael. So, the corrupt and the hopelessly naive hit the circuit intent on settling an old score with Big Ern.",
        poster: "https://image.tmdb.org/t/p/w780/lVpejjxzBujSjLpxQ7hGe1s0wP2.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/t8HtbS9tWWUbqI5J7hIYCspgkGI.jpg",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=Sh3EFwHg45c",
        title: "Safe House",
        year: 2012,
        genre: "Action, Thriller",
        rating: 6.5,
        duration: 115,
        director: "Daniel Espinosa",
        cast: ["Denzel Washington", "Ryan Reynolds", "Vera Farmiga", "Brendan Gleeson", "Sam Shepard", "Rubén Blades"],
        desc: "A dangerous CIA renegade resurfaces after a decade on the run. When the safe house he's remanded to is attacked by mercenaries, a rookie operative escapes with him. Now, the unlikely allies must stay alive long enough to uncover who wants them dead.",
        poster: "https://image.tmdb.org/t/p/w780/7CBhSjQa07LYt0RGejYjWugGmdV.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/kXRskNzFiTxi5xwsM6hDmOTGae7.jpg",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=p6le4hgRSKY",
        title: "Year 10",
        year: 2024,
        genre: "Horror, Science Fiction",
        rating: 5.7,
        duration: 96,
        director: "Ben Goodger",
        cast: ["Toby Goodger", "Duncan Lacroix", "Hannah Khalique-Brown", "Alexander Anderson", "Emma Cole", "Joseph Coleman"],
        desc: "After the fall of civilization, the few survivors have been driven to cannibalism. A young man must confront a violent tribe that has murdered his father and stolen the medicine that keeps his girlfriend alive.",
        poster: "https://image.tmdb.org/t/p/w780/zqeFM6cjHjYmgjqJExjt1NPBPdd.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/kAyNuFjRk1B7HyYwRTPWeDKAc1v.jpg",
        where: []
    },
    {
        url: "https://www.youtube.com/watch?v=0DX4BFGB7JU",
        title: "I Now Pronounce You Chuck & Larry",
        year: 2007,
        genre: "Comedy, Romance",
        rating: 6.1,
        duration: 115,
        director: "Dennis Dugan",
        cast: ["Adam Sandler", "Kevin James", "Jessica Biel", "Dan Aykroyd", "Ving Rhames", "Steve Buscemi"],
        desc: "Firefighters Chuck Ford and Larry Valentine are guy's guys, loyal to the core—which is why when widower Larry asks Chuck to pose as his lover so that he can get domestic partner benefits for his kids, his buddy agrees. However, things get dicey when a bureaucrat comes calling, and the boys are forced to present a picture of domestic bliss.",
        poster: "https://image.tmdb.org/t/p/w780/vF0yEaGyXYsHWRTMmeJaJKp43bj.jpg",
        thumbnail: "https://image.tmdb.org/t/p/original/mJX0K28KqaDdvYyvuiqI7uYHc8Y.jpg",
        where: []
    }
];

