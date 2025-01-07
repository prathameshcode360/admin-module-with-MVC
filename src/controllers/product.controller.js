import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    res.sendFile(path.join(path.resolve(), "src", "views", "index.html"));
  }
}
