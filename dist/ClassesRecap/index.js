"use strict";
class Player {

    static description ="Player in our game"
    #score=0
    #numLives=10
    constructor(first,last) {
        this.first = first
        this.last= last
    }
        
    taunt(){
        console.log("booyah");
    }
    loseLife(){
        this.numLives -= 1
    } 
    get score(){
        return this.#score
    }
    getScore(){
        return this.#score
    }
    set score(newScore){
        if (newScore < 0) {
            throw new Error("Score for be positive")
        }
        this.#score = newScore
    }
    updateScore(newScore){
        this.#score=newScore
    }
    get fullName(){
        return `${this.first} ${this.last}`
    }
    set fullName(newName){
        const [first,last] = newName.split(" ")
        this.first = first
        this.last = last
    }
}

class Elder extends Player {
    constructor(first,last,powers){
        super(first,last);
        this.powers=powers
    }
    isAdmin=true
}
const elder = new Elder("Ains","Onw Goal",["buraku hooru"]);


// const player = new Player("Alexis","Selorm");
// player.taunt();
// console.log(player.first);
// player.loseLife();
// console.log(player.first);
// console.log(player.getScore());
// player.updateScore(20);
// console.log(player.score);
// player.score = 60
// console.log(player.score);
// console.log(player.fullName);
// player.fullName="Kofi Yesu"
// console.log(player.fullName);
