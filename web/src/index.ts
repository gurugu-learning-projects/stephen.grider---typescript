import { User } from "./models/User";

const user = new User({ name: "Peter", age: 40 });

console.log(user.get("name"));
console.log(user.get("age"));
