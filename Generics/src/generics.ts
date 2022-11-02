const nums: number[] = [];
// Generics
const nums2: Array<number> = [];
const colours: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputEl);
inputEl.value = "Cat";

const btn = document.querySelector<HTMLButtonElement>(".btn");
btn?.addEventListener("click", () => {});

// function numberIdentity(item: number): number {
//   return item;
// }

// function stringIdentity(item: string): string {
//   return item;
// }

// function booleanIdentity(item: boolean): boolean {
//   return item;
// }

// function identity(item:any):any{
//     return item;
// }
interface Cats {
  name: string;
  breed: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

identity<string>("hey");
identity<boolean>(true);
identity<number>(7);
identity<Cats>({ name: ",", breed: "m" });

function getRandomElement<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

const listi: number[] = [1, 2, 3, 4, 5, 6];
console.log(getRandomElement<number>(listi));

// Inferred generic types
getRandomElement([true, false]);

// Generics with multiple types
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}
console.log(merge({ name: "colt" }, { cat: ["brown", "sad"] }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
console.log(printDoubleLength("length10"));

// Default type parameters
function makeList<T = number>(): T[] {
  return [];
}

const strings = makeList<string>();
const falseStrings = makeList();

// Generic classes
interface Song {
  title: string;
  artist: string;
  album: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {}

class Playlist<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}
const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
videos.add({
  title: "Typescript",
  creator: "Curious Class",
  resolution: "480p",
});
