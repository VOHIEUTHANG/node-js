import express from "express";
const router = express.Router();
import { getHomePage } from "../controller/homeController";
import { getUserPage, postUser } from "../controller/userController";

const initWebRounte = (app) => {
  router.get("/", getHomePage);
  router.get("/user/detail/:userId", getUserPage);
  router.post("/user/post", postUser);
  return app.use("/", router);
};

export default initWebRounte;
