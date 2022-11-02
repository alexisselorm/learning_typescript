// Type declarations
import axios from "axios";

axios
  .get<Person>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("woo");
    // console.log(res.data.company);
    printUser(res.data);
  })
  .catch((e: Error) => {
    console.log(e);
  });

axios
  .get<Person[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("woo");
    // console.log(res.data.company);
    res.data.forEach(printUser);
    // printUser(res.data);
  })
  .catch((e: Error) => {
    console.log(e);
  });
interface Person {
  id: string;
  name: string;
  age: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; long: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function printUser(user: Person) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
