import pool from "../configs/connectDB";
const getUserPage = async (req, res) => {
  const { userId } = req.params;
  const [rows] = await pool.execute("SELECT * FROM users where id = ? ", [
    userId,
  ]);
  res.send(rows);
};
const postUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  const result = await pool.execute(
    "INSERT INTO users (firstName,lastName,email,address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  if (result[0].affectedRows > 0) res.redirect("/");
};
export { getUserPage, postUser };
