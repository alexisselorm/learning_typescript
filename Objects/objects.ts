type Point = {
  x: number;
  y: number;
  z?: number;
};

function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

const singer = { first: "Alexis", last: "Presley", age: 23 };

printName({ first: "Grand", last: "Usopp" });
printName(singer);

let coordinates: Point = { x: 34, y: 25 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 3 };
}

// Aliasing nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}
const mySong: Song = {
  title: "Unchained",
  artist: "Metal Bros",
  numStreams: 1235432,
  credits: { producer: "Spectre Down", writer: "Ichimoku" },
};

console.log(calculatePayout(mySong));
printSong(mySong);

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1,
  username: "supersoup",
};

console.log(user.id);
user.id = 4;

// Intersection types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "Yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const Eltee: CatDog = {
  numLives: 15,
  breed: "German-meow",
  age: 20,
};
