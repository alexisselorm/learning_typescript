let movieTitle: string = "Antman"
movieTitle= "One Piece"
// movieTitle=9;
movieTitle.toUpperCase()

let catLives :number = 9;
catLives+=1;
// catLives="0"

let gameOver: boolean = false
gameOver=true
// gameOver="false"


// Type inference
let tvShow = "Oliver Twist"
tvShow = "Bleach";
tvShow=false;

let isFunny = false
isFunny = true
isFunny = "ASD"

// Any type
let anyVar: any = true
anyVar = false
anyVar = 1
anyVar = "1"
anyVar = [1,2,3]


const movies = ["Arrival", "The mask","Amadeus","Odyssey"]
let foundMovie: string;

for(let movie of movies){
    if(movie ==="Amadeus")
    foundMovie = movie;
}
