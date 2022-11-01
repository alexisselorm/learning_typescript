var movieTitle = "Antman";
movieTitle = "One Piece";
// movieTitle=9;
movieTitle.toUpperCase();
var catLives = 9;
catLives += 1;
// catLives="0"
var gameOver = false;
gameOver = true;
// gameOver="false"
// Type inference
var tvShow = "Oliver Twist";
tvShow = "Bleach";
tvShow = false;
var isFunny = false;
isFunny = true;
isFunny = "ASD";
// Any type
var anyVar = true;
anyVar = false;
anyVar = 1;
anyVar = "1";
anyVar = [1, 2, 3];
var movies = ["Arrival", "The mask", "Amadeus", "Odyssey"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus")
        foundMovie = movie;
}
