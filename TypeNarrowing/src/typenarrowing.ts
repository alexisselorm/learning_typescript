// Typeof Guard
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guard
const el = document.getElementById("somethingthatdoesnotexist");
if (el) {
  el;
} else {
  el;
  throw new Error("el doesn't exist");
}

const printLetters = (word?: string) => {
  if (word) {
    // do something with word
    word;
  } else {
    // word is definitely undefined here
    word;
  }
};

// Equality narrowing
const someDemo = (x: string | number, y: string | boolean) => {
  // if (x === y) {
  //   x;
  //   y;
  // }
  if (x == y) {
    x.toUpperCase();
  }
};
someDemo(3, "3");

// In operator for type narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRunTime({ title: "Amadeus", duration: 160 }));
console.log(
  getRunTime({ title: "SpongeBob", numEpisodes: 120, episodeDuration: 24 })
);

// Instanceof narrowing
const printFullDate = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
};

class Users {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: Users | Company) {
  if (entity instanceof Users) {
    return entity.username;
  }
  return entity.name;
}

// Type predicates

function isMovie(media: Movie | TVShow): media is Movie {
  return (media as Movie).duration !== undefined;
}

function watch(movie: Movie | TVShow): string {
  if (isMovie(movie)) {
    movie;
    return "Watch";
  } else {
    movie;
    return "Hehe";
  }
}

// Discriminated unions

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind?: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case "rooster":
      animal;
      return "Cockadoodledoo";
    case "pig":
      animal;
      return "Oink";
    case "cow":
      animal;
      return "Moo";
    case "sheep":
      animal;
      return "Baaah";
    // Exhaustive checks with never

    default:
      // We should never make it here if all cases were handled correctly
      const neverGetHere: never = animal;
      return neverGetHere;
  }
};

const stevie: Rooster = {
  name: "Stevie",
  weight: 12,
  age: 20,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
