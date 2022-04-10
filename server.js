const express = require("express"); // import package express
const app = express(); // Tạo instance, tạo app để sử dụng tất cả các tính năng của express
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello!");
}); // Khai báo route

app.get("/about", (req, res) => {
  res.send(`My name is Tri`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // Chạy ứng dụng

