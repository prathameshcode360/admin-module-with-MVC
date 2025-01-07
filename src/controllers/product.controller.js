import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    // console.log(products);
    res.render("index", { products: products });
  }

  renderAddProduct(req, res) {
    res.render("addProduct");
  }
  addNewProduct(req, res) {
    // console.log(req.body);
    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    res.render("index", { products: products });
  }
}
