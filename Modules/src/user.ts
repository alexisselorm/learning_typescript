import { Person } from "./types";
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log("logout");
  }
}
export class userHelper {
  constructor() {}
}
