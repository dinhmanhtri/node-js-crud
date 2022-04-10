import express from "express"; // import package express
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express(); // Tạo instance, tạo app để sử dụng tất cả các tính năng của express
const port = process.env.PORT || 3000;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
}); // Khai báo route


app.get("/about", (req, res) => {
  res.send(`My name is Tri`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // Chạy ứng dụng
