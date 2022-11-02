class Player {
  // readonly first:string;
  // readonly last:string;
  //   private score: number = 0;
  // constructor(first:string, last:string){
  //     this.first =first
  //     this.last = last
  // }
  constructor(
    public first: string,
    public last: string,
    private _score: number = 0,
    protected age = 12
  ) {}

  private secretMethod(): void {
    console.log("SECRET method called");
  }
  // getters and setter
  get fullName() {
    return this.first + " " + this.last;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    if (value < 0) {
      throw new Error("Score cannot be less than 0");
    }
    this._score = value;
  }
}
const elton = new Player("Elton", "Elton");
elton.secretMethod();
elton.score = 38;

class Elder extends Player {
  public isStrong = true;
  maxScore() {
    this._score;
  }
  maxAge() {
    // Protected property can be used by child classes
    this.age = 300;
  }
}

// Classes and Interface

interface Printable {
  print(): void;
}

interface Colourful {
  color: string;
}

class Bike implements Colourful {
  constructor(public color: string) {}
}

const newbike = new Bike("red");
class Jacket implements Colourful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log("DAEMON");
  }
}

const newJacket = new Jacket("LV", "Black`");
newJacket.print();

// Abstract Classes

abstract class Animal {
  constructor(public lives: number, public name: string) {}
  public abstract eat(): void;
}

class Doggo extends Animal {
  constructor(lives: number, name: string, private _behavior: string) {
    super(lives, name);
  }
  actup() {
    return this._behavior;
  }
  eat() {
    console.log("EAT");
  }
  public barks: boolean = false;
}
const snoop = new Doggo(99, "Snoopy", "calm");
snoop.actup();
