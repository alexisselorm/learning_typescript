// Type declarations
import axios from "axios";
// _.sample([12,23,4,56,7,8,97])
axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("woo");
    // console.log(res.data.company);
    printUser(res.data);
})
    .catch((e) => {
    console.log(e);
});
axios
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
