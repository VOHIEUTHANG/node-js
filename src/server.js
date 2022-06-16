import express from "express";
import config from "./configs/index";
import initWebRounte from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 3000;
config(app);
initWebRounte(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
