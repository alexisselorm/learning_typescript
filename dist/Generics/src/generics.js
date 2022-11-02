"use strict";
const nums = [];
// Generics
const nums2 = [];
const colours = [];
const inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = "Cat";
const btn = document.querySelector(".btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => { });
function identity(item) {
    return item;
}
identity("hey");
identity(true);
identity(7);
identity({ name: ",", breed: "m" });
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
const listi = [1, 2, 3, 4, 5, 6];
console.log(getRandomElement(listi));
// Inferred generic types
getRandomElement([true, false]);
// Generics with multiple types
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge({ name: "colt" }, { cat: ["brown", "sad"] }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength("length10"));
// Default type parameters
function makeList() {
    return [];
}
const strings = makeList();
const falseStrings = makeList();
class VideoPlaylist {
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add({
    title: "Typescript",
    creator: "Curious Class",
    resolution: "480p",
});
