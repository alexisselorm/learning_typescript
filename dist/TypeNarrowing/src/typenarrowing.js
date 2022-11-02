"use strict";
// Typeof Guard
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Truthiness Guard
const el = document.getElementById("somethingthatdoesnotexist");
if (el) {
    el;
}
else {
    el;
    throw new Error("el doesn't exist");
}
const printLetters = (word) => {
    if (word) {
        // do something with word
        word;
    }
    else {
        // word is definitely undefined here
        word;
    }
};
// Equality narrowing
const someDemo = (x, y) => {
    // if (x === y) {
    //   x;
    //   y;
    // }
    if (x == y) {
        x.toUpperCase();
    }
};
someDemo(3, "3");
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRunTime({ title: "Amadeus", duration: 160 }));
console.log(getRunTime({ title: "SpongeBob", numEpisodes: 120, episodeDuration: 24 }));
// Instanceof narrowing
const printFullDate = (date) => {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
};
class Users {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof Users) {
        return entity.username;
    }
    return entity.name;
}
// Type predicates
function isMovie(media) {
    return media.duration !== undefined;
}
function watch(movie) {
    if (isMovie(movie)) {
        movie;
        return "Watch";
    }
    else {
        movie;
        return "Hehe";
    }
}
const getFarmAnimalSound = (animal) => {
    switch (animal.kind) {
        case "rooster":
            animal;
            return "Cockadoodledoo";
        case "pig":
            animal;
            return "Oink";
        case "cow":
            animal;
            return "Moo";
        case "sheep":
            animal;
            return "Baaah";
        // Exhaustive checks with never
        default:
            // We should never make it here if all cases were handled correctly
            const neverGetHere = animal;
            return neverGetHere;
    }
};
const stevie = {
    name: "Stevie",
    weight: 12,
    age: 20,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
