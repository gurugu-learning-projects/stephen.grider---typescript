import { User } from "./models/User";

// const user = new User({ id: 1 });
const user = new User({ name: "Pops", age: 0 });

// user.set({ name: "Pops", age: 111 });
user.save();
