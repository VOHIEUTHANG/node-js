import connection from "../configs/connectDB";
const getHomePage = (req, res) => {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    return res.render("index.ejs", { userInfo: results });
  });
};

export { getHomePage };
