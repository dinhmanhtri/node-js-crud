import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));  // config file tĩnh.
  app.set("view engine", "ejs");  
  app.set("views", "./src/views");  // config view engine sẽ nằm trong thư mục views
}

export default configViewEngine;