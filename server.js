const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server receive request ");
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello Node JS</h1>");
  res.end();
});
server.listen(3001, "localhost", () => {
  console.log("server is runnig at port 3001");
});
