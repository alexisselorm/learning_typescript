"use strict";
let age;
age = 23;
age = "23";
let coordinate = { x: 1, y: 34 };
coordinate = { lat: 321.123, long: 23.334 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("23");
printAge("Thirty-three");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(45, 0.08));
console.log(calculateTax("$45", 0.08));
// Array types - unions
const stuff = ["1", 2];
const coords = [];
coords.push({ lat: 321.212, long: 23.334 });
coords.push({ x: 45, y: 23 });
// Literal types
let zero = 0;
// zero = 2;
let hi = "hi";
// hi = "hello";
let mood = "happy";
mood = "sad";
let today = "Tuesday";
// today = "MiddleDay";
