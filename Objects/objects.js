"use strict";
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
const singer = { first: "Alexis", last: "Presley", age: 23 };
printName({ first: "Grand", last: "Usopp" });
printName(singer);
let coordinates = { x: 34, y: 25 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 3 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: "Unchained",
    artist: "Metal Bros",
    numStreams: 1235432,
    credits: { producer: "Spectre Down", writer: "Ichimoku" },
};
console.log(calculatePayout(mySong));
printSong(mySong);
const user = {
    id: 1,
    username: "supersoup",
};
console.log(user.id);
user.id = 4;
const happyFace = {
    radius: 4,
    color: "Yellow",
};
const Eltee = {
    numLives: 15,
    breed: "German-meow",
    age: 20,
};
