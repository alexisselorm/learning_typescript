"use strict";
function square(num) {
    return num * num;
}
console.log(square(3));
console.log(square("3"));
function greet(person) {
    return `Hi there, ${person}`;
}
const doSomething = (person, age, isFunny) => {
};
doSomething("Monkey D. Luffy", 34, true);
doSomething("Monkey D. Luffy", 34, "true");
greet(true);
function greetwithdefault(person = "stranger") {
    return `Hi there ${person}`;
}
// Return type
greetwithdefault();
greetwithdefault("Ace");
function mystery(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
const add = (x, y) => {
    return x + y;
};
const colors = ["red", "yellow", "orange"];
colors.map(color => {
    color.toUpperCase();
});
// The void type
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return "";
}
// Never
const makeError = (msg) => {
    throw new Error(msg);
};
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING");
        return;
    }
}
