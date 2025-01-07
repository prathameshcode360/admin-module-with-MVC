import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";

const server = express();

//instantiated product controller
const productController = new ProductController();

//setting path for static file routing
server.use(express.static("src/views"));

//setting ejs
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//setting ejs layput
server.use(expressEjsLayouts);

//routing on products page(home page)
server.get("/", productController.getProducts);

//routing on addProduct Page...
server.get("/addProduct", productController.renderAddProduct);

server.listen(3300, () => {
  console.log("server is running on port 3300");
});
