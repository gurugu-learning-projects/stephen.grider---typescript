import { User } from "./models/User";

const user = new User({ name: "Peter", age: 40 });

user.set({ name: "Bob", age: 22 });

console.log(user.get("name"));
console.log(user.get("age"));
