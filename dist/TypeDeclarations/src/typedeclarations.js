"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Type declarations
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("woo");
    // console.log(res.data.company);
    printUser(res.data);
})
    .catch((e) => {
    console.log(e);
});
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("woo");
    // console.log(res.data.company);
    res.data.forEach(printUser);
    // printUser(res.data);
})
    .catch((e) => {
    console.log(e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
