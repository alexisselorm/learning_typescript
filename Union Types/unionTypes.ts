let age: number | string;
age = 23;
age = "23";

type Point = {
  x: number;
  y: number;
  z?: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinate: Point | Loc = { x: 1, y: 34 };
coordinate = { lat: 321.123, long: 23.334 };

function printAge(age: number | string) {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("23");
printAge("Thirty-three");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}
console.log(calculateTax(45, 0.08));
console.log(calculateTax("$45", 0.08));

// Array types - unions
const stuff: (number | string)[] = ["1", 2];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.212, long: 23.334 });
coords.push({ x: 45, y: 23 });

// Literal types
let zero: 0 = 0;
// zero = 2;
let hi: "hi" = "hi";
// hi = "hello";

let mood: "happy" | "sad" = "happy";
mood = "sad";
// mood = "angry";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Tuesday";
// today = "MiddleDay";
