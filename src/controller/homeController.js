import pool from "../configs/connectDB";

const getHomePage = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { userInfo: rows });
};

export { getHomePage };
