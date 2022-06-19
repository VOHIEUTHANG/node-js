import express from "express";
import config from "./configs/index";
import initWebRoute from "./route/web";
import initApiRoute from "./route/api";
import bodyParser from "body-parser";
import morgan from "morgan";
require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use((req, res, next) => {
  console.log(">>>run into my middleware");
  if (req.method == "GET") next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

config(app);
initWebRoute(app);
initApiRoute(app);
app.use((req, res) => {
  res.render("page404.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
