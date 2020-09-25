import express from "express";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["fjlkldssd"] }));
app.use(router);
app.use(AppRouter.instance);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
