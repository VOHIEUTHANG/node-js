import { request } from "express";
import pool from "../configs/connectDB";

const getAllUsers = async (req, res) => {
  const [users] = await pool.execute("select * from users");
  return res.status(200).json(users);
};

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  if (firstName && lastName && email && address) {
    const result = await pool.execute(
      "INSERT INTO users (firstName,lastName,email,address) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, address]
    );
    if (result[0].affectedRows > 0)
      return res.status(200).json({ messgae: "added new user successfully !" });
  }
  return res.status(200).json({ messgae: "missing required parameters !" });
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, address } = req.body;
  console.log(req.body);
  if (firstName && lastName && email && address) {
    const result = await pool.execute(
      "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? where id = ? ",
      [firstName, lastName, email, address, userId]
    );
    if (result[0].affectedRows > 0)
      return res.status(200).json({ message: "update user successfully!" });
  }
  return res
    .status(200)
    .json({ message: "Cann't update user, missing required params !" });
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const result = await pool.execute("Delete from users where id = ?", [userId]);
  if (result[0].affectedRows > 0)
    return res.status(200).json({ message: "Delete user successfully!" });
};

export { getAllUsers, createNewUser, updateUser, deleteUser };
