function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
var singer = { first: "Alexis", last: "Presley", age: 23 };
printName({ first: "Grand", last: "Usopp" });
printName(singer);
var coordinates = { x: 34, y: 25 };
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
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained",
    artist: "Metal Bros",
    numStreams: 1235432,
    credits: { producer: "Spectre Down", writer: "Ichimoku" }
};
console.log(calculatePayout(mySong));
printSong(mySong);
