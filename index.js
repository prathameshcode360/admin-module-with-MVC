import express from "express";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

//instantiated product controller
const productController = new ProductController();

//setting path for static file routing
server.use(express.static("src/views"));

server.get("/", productController.getProducts);

server.listen(3300, () => {
  console.log("server is running on port 3300");
});
