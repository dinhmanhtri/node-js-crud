import express from "express";
import homeControllers from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeControllers.getHomepage); // Khai báo route
  router.get("/about", (req, res) => {
    res.send("I am Tri!");
  });

  return app.use("/", router);
};

export default initWebRoute;
