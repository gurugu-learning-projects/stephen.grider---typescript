import { UserForm } from "./views/UserForm";
import { UserShow } from "./views/UserShow";
import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Peter", age: 20 });

const root = document.getElementById("root");

if (root) {
  // const userForm = new UserForm(root, user);
  const userEdit = new UserEdit(root, user);
  // userForm.render();
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found");
}
