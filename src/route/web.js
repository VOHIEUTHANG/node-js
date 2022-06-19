import express from "express";
import multer from "multer";
import path from "path";
import appRoot from "app-root-path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(">>> check appRoot", appRoot);
    cb(null, appRoot + "/public/images/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

import { getHomePage } from "../controller/homeController";
import {
  getUserPage,
  createUser,
  deleteUser,
  getUpdatePage,
  updateUser,
  getUploadFilePage,
  handlerUploadFile,
} from "../controller/userController";

const initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/user/detail/:userId", getUserPage);
  router.post("/user/post", createUser);
  router.post("/user/delete", deleteUser);
  router.get("/user/update/:userId", getUpdatePage);
  router.post("/user/update", updateUser);
  router.get("/user/get-upload-page", getUploadFilePage);
  router.post("/user/upload-file", upload.single("avatar"), handlerUploadFile);
  return app.use("/", router);
};

export default initWebRoute;
