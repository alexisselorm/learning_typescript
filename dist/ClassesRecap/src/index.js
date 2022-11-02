"use strict";
class Player {
    // readonly first:string;
    // readonly last:string;
    //   private score: number = 0;
    // constructor(first:string, last:string){
    //     this.first =first
    //     this.last = last
    // }
    constructor(first, last, _score = 0, age = 12) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.age = age;
    }
    secretMethod() {
        console.log("SECRET method called");
    }
    // getters and setter
    get fullName() {
        return this.first + " " + this.last;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw new Error("Score cannot be less than 0");
        }
        this._score = value;
    }
}
const elton = new Player("Elton", "Elton");
elton.secretMethod();
elton.score = 38;
class Elder extends Player {
    constructor() {
        super(...arguments);
        this.isStrong = true;
    }
    maxScore() {
        this._score;
    }
    maxAge() {
        // Protected property can be used by child classes
        this.age = 300;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const newbike = new Bike("red");
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log("DAEMON");
    }
}
const newJacket = new Jacket("LV", "Black`");
newJacket.print();
// Abstract Classes
class Animal {
    constructor(lives, name) {
        this.lives = lives;
        this.name = name;
    }
}
class Doggo extends Animal {
    constructor(lives, name, _behavior) {
        super(lives, name);
        this._behavior = _behavior;
        this.barks = false;
    }
    actup() {
        return this._behavior;
    }
    eat() {
        console.log("EAT");
    }
}
const snoop = new Doggo(99, "Snoopy", "calm");
snoop.actup();
