import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validation from "./src/middlewares/validation.middleware.js";
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

//setting urlEncoded

server.use(express.urlencoded({ extended: true }));

//routing on products page(home page)
server.get("/", productController.getProducts);

//routing on addProduct Page...
server.get("/addProduct", productController.renderAddProduct);

// posting new product and routung on home page
server.post("/", validation, productController.addNewProduct);

//routing on update product page
server.get("/update-product/:id", productController.getUpdateView);

server.listen(3300, () => {
  console.log("server is running on port 3300");
});
