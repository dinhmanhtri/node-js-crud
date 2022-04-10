import express from "express"; // import package express
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
require("dotenv").config();

const app = express(); // Tạo instance, tạo app để sử dụng tất cả các tính năng của express
const port = process.env.PORT || 3000;

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // Chạy ứng dụng
