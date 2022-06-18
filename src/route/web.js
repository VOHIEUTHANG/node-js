import express from "express";
const router = express.Router();
import { getHomePage } from "../controller/homeController";
import {
  getUserPage,
  createUser,
  deleteUser,
  getUpdatePage,
  updateUser,
} from "../controller/userController";

const initWebRounte = (app) => {
  router.get("/", getHomePage);
  router.get("/user/detail/:userId", getUserPage);
  router.post("/user/post", createUser);
  router.post("/user/delete", deleteUser);
  router.get("/user/update/:userId", getUpdatePage);
  router.post("/user/update", updateUser);
  return app.use("/", router);
};

export default initWebRounte;
