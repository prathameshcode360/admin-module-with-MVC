import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    // console.log(products);
    res.render("index", { products: products });
  }
}
