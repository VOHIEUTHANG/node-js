import mysql2 from "mysql2";
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "0335647164Abc",
  database: "nodejsBasic",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default connection;
