import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "0335647164Abc",
  database: "nodejsBasic",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default pool;
