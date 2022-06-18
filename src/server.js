import express from "express";
import config from "./configs/index";
import initWebRoute from "./route/web";
import initApiRoute from "./route/api";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

config(app);
initWebRoute(app);
initApiRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
