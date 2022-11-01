"use strict";
// create a product variable that inherits the Product interface
const product = {
    name: "Cheeseburger",
    price: 4.99,
    quantity: 1,
};
const Printproduct = (product) => {
    console.log(`${product.name}- ${product.price}`);
};
