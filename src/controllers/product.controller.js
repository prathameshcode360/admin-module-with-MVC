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
    const { name, price, image } = req.body;
    let errors = [];
    if (!name || name.trim() == "") {
      errors.push("Invalid Name");
    }
    if (!price || parseFloat(price) < 1) {
      errors.push("Price should positive number");
    }
    try {
      let validUrl = new URL(image);
    } catch (err) {
      errors.push("Invalid URL");
    }

    if (errors.length > 0) {
      return res.render("addProduct", { errorMessage: errors[0] });
    }

    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    res.render("index", { products: products });
  }
}
