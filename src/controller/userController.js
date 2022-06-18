import pool from "../configs/connectDB";
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
  if (result[0].affectedRows > 0) res.redirect("../");
};
export { getUserPage, createUser, deleteUser, getUpdatePage, updateUser };
