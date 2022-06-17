import express from "express";
const router = express.Router();
import { getHomePage } from "../controller/homeController";

const initWebRounte = (app) => {
  router.get("/", getHomePage);
  router.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
  });
  return app.use("/", router);
};

export default initWebRounte;
