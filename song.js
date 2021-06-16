/*
songjs is a file containing variables and objects hughlighting Davido, a veteran Nigeran Singer
*/

//song.js in variables
var artist = "Davido";
var title = "Dami Duro";
var durationInSeconds = 228;
var album = "Omo Baba Olowo";
var yearReleased = "2012";
var genre = "Afrobeats";
var recordLabel = "Sony Music";
var wonAward = true;
var Ep = false;
// array
var elements = [
    "Melody",
    "Harmony",
    "Rhythm",
    "Texture"
];

//Artist Davido in an objects
var favouriteMusician = {
    artist: "Davido",
    title: "Dami Duro",
    durationInSeconds: 228,
    firstAlbum: "Omo Baba Olowo",
    yearReleased: "2012",
    albumsAndEps: {
        "Omo Baba Olowo": 2012,
        "Son of Mercy": 2016,
        "A Good Time": 2019,
        "A Better Time": 2020 
    },
    album: "afrobeats",
    elements: [
        "Melody",
        "Harmony",
        "Rhythm",
        "Texture"
    ],
    recordLabel: "Sony Music",
    wonAward: true
};
//outputting the values
console.log(artist);
console.log(title);
console.log(durationInSeconds);
console.log(album);
console.log(yearReleased);
console.log(genre);
console.log(recordLabel);
console.log(wonAward);
console.log(Ep);
console.log(elements);
console.log(favouriteMusician); 