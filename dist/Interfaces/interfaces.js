"use strict";
const pt = { x: 45, y: 63 };
const thomas = {
    id: 2144523,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: () => "Hi",
    height: 100,
};
// product variable inheriting from the product interface
const shoes = {
    id: 2144523,
    name: "Desert Black",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
shoes.applyDiscount(0.4);
// A dog variable named chewy inherited from the Dog interface
const chewz = {
    name: "Garfield",
    age: 23,
    breed: "German Shepherd",
    bark() {
        return this.breed;
    },
};
// A serviceDog variable named chewy inherited from the ServiceDog interface
const chewy = {
    name: "Chewy",
    age: 23,
    breed: "German Shepherd",
    bark() {
        return "Siuuu";
    },
    job: "drug sniffer",
};
const pierre = {
    first: "Pierre",
    last: "Malolo",
    sayHi: () => "German",
    id: 123457,
    height: 100,
    email: "pierre@somework.com",
    languages: ["JS", "C#"],
    level: "Junior",
    department: "Development",
};
