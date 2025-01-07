import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    // console.log(products);
    res.render("index", { products: products });
  }

  renderAddProduct(req, res) {
    res.render("addProduct", { errorMessage: null });
  }
  addNewProduct(req, res) {
    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    res.render("index", { products: products });
  }
  getUpdateView(req, res, next) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render("updateProduct", {
        product: productFound,
        errorMessage: null,
      });
    } else {
      res.status(401).send("product not found");
    }
  }
  postUpdateProduct(req, res) {
    ProductModel.update(req.body);
    let products = ProductModel.getAll();
    res.render("index", { products: products });
  }
  deleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("product not found");
    }
    ProductModel.delete(id);
    let products = ProductModel.getAll();
    res.render("index", { products: products });
  }
}
