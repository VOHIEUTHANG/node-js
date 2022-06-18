import express from "express";
import config from "./configs/index";
import initWebRounte from "./route/web";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

config(app);
initWebRounte(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
