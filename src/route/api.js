import express from "express";
const router = express.Router();
import {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controller/apiController";

const initApiRoute = (app) => {
  router.get("/get-users", getAllUsers);
  router.post("/create-user", createNewUser);
  router.put("/update-user/:userId", updateUser);
  router.delete("/delete-user/:userId", deleteUser);
  return app.use("/api/v1/", router);
};

export default initApiRoute;
