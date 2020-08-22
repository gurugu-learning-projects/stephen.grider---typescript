import { User } from "./models/User";

// const user = new User({ id: 1 });
const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

// user.set({ name: "Dobbie" });
user.fetch();
