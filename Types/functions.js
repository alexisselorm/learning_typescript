function square(num) {
    return num * num;
}
console.log(square(3));
console.log(square("3"));
function greet(person) {
    return "Hi there, ".concat(person);
}
var doSomething = function (person, age, isFunny) {
};
doSomething("Monkey D. Luffy", 34, true);
doSomething("Monkey D. Luffy", 34, "true");
greet(true);
function greetwithdefault(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there ".concat(person);
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
var add = function (x, y) {
    return x + y;
};
var colors = ["red", "yellow", "orange"];
colors.map(function (color) {
    color.toUpperCase();
});
// The void type
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return "";
}
// Never
var makeError = function (msg) {
    throw new Error(msg);
};
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING");
        return;
    }
}
