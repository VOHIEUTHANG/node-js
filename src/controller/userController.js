import pool from "../configs/connectDB";
import multer from "multer";

const getUserPage = async (req, res) => {
  const { userId } = req.params;
  const [rows] = await pool.execute("SELECT * FROM users where id = ? ", [
    userId,
  ]);
  res.send(rows);
};
const createUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  const result = await pool.execute(
    "INSERT INTO users (firstName,lastName,email,address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  if (result[0].affectedRows > 0) res.redirect("/");
};
const deleteUser = async (req, res) => {
  const userId = req.body.id;
  const result = await pool.execute("DELETE FROM users WHERE id=?", [userId]);
  if (result[0].affectedRows > 0) res.redirect("/");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  const [user] = await pool.execute("select * from users where id = ?", [
    userId,
  ]);
  res.render("update.ejs", { userInfo: user[0] });
};
const updateUser = async (req, res) => {
  const { id, firstName, lastName, email, address } = req.body;
  const result = await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? where id = ? ",
    [firstName, lastName, email, address, id]
  );
  if (result[0].affectedRows > 0) res.redirect("/");
};
const getUploadFilePage = (req, res) => {
  res.render("upload.ejs");
};

let upload = multer().single("avatar");

const handlerUploadFile = async (req, res, next) => {
  console.log(req.file);
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    }
    res.render("uploadSuccess.ejs", { url: `/images/${req.file.filename}` });
  });
};

export {
  getUserPage,
  createUser,
  deleteUser,
  getUpdatePage,
  updateUser,
  getUploadFilePage,
  handlerUploadFile,
};
