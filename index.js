import express from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

//instantiated product controller
const productController = new ProductController();

//setting path for static file routing
server.use(express.static("src/views"));

//setting ejs
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.get("/", productController.getProducts);

server.listen(3300, () => {
  console.log("server is running on port 3300");
});
