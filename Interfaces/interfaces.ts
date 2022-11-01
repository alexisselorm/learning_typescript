interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 45, y: 63 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

// Reopen an interface
// Reopen Person interface declared above with an additional property height
interface Person {
  height: number;
}

const thomas: Person = {
  id: 2144523,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => "Hi",
  height: 100,
};

// product interface
interface Product {
  readonly id: number;
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

// product variable inheriting from the product interface
const shoes: Product = {
  id: 2144523,
  name: "Desert Black",
  price: 100,
  applyDiscount(amount: number): number {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

// A dog interface
interface Dog {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}

// A dog variable named chewy inherited from the Dog interface
const chewz: Dog = {
  name: "Garfield",
  age: 23,
  breed: "German Shepherd",
  bark() {
    return this.breed;
  },
};

// A serviceDog interface that extends Dog interface
interface ServiceDog extends Dog {
  job: "drug sniffer" | "K9" | "bomb sniffer";
}

// A serviceDog variable named chewy inherited from the ServiceDog interface
const chewy: ServiceDog = {
  name: "Chewy",
  age: 23,
  breed: "German Shepherd",
  bark() {
    return "Siuuu";
  },
  job: "drug sniffer",
};

interface Employee {
  department: string;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
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
