

// ============================================================
// 🏆  TOP 10 — eigene Bilder (poster / backdrop optional)
//     sortiert nach Rating, absteigend
// ============================================================
const topMoviesDatabase = [
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
        "url": "https://www.youtube.com/watch?v=Sh3EFwHg45c",
        "title": "Safe House",
        "year": "2012",
        "genre": "Action, Thriller",
        "rating": 6.7,
        "duration": 115,
        "director": "Daniel Espinosa",
        "cast": ["Denzel Washington", "Ryan Reynolds", "Vera Farmiga", "Brendan Gleeson", "Sam Shepard"],
        "desc": "A young CIA agent is tasked with looking after a fugitive in a safe house. But when the safe house is attacked, he finds himself on the run with his charge.",
        "thumbnail": "https://pixel.disco.nowtv.com/uuid/49dfd8ba-a564-3c91-9314-ad5eb13e7cea/LAND_16_9?language=en-GB&proposition=NOWOTT&version=3547ca51-670c-3a97-bd43-506108d40525",
        "where": []
    }
];



// ============================================================
// 🎬  ALLE ANDEREN FILME — automatische YouTube-Thumbnails,
//     erscheinen als breite 16:9-Karten (wide card)
// ============================================================
const movieDatabase = [
    {
        "url": "https://www.youtube.com/watch?v=VD9_0FNSwZA",
        "title": "Summer Rental",
        "year": "1985",
        "genre": "Comedy",
        "rating": 6.3,
        "duration": 87,
        "director": "Carl Reiner",
        "cast": ["John Candy", "Richard Crenna", "Rip Torn", "Karen Austin", "Kerri Green", "Joey Lawrence"],
        "desc": "An overworked air traffic controller takes his family on a beach vacation, but a series of mishaps and a feud with a local yachtsman threaten to ruin their summer getaway.",
        "thumbnail": "",
        "where": []
    },
    {
    "url": "https://www.youtube.com/watch?v=4oH7uq69sOM",
    "title": "The Nanny Diaries",
    "year": "2007",
    "genre": "Comedy, Drama, Romance",
    "rating": 6.2,
    "duration": 106,
    "director": "Shari Springer Berman, Robert Pulcini",
    "cast": ["Scarlett Johansson", "Laura Linney", "Paul Giamatti", "Chris Evans", "Alicia Keys", "Donna Murphy"],
    "desc": "A recent college graduate from a working-class background takes a job as a nanny for a wealthy family on Manhattan's Upper East Side. She must juggle the family's dysfunction, the neglected child in her care, and a new romance, all while trying to figure out her own life path.",
    "thumbnail": "",
    "where": []
    }
];

