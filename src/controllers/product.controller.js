import path from "path";

export default class ProductController {
  getProducts(req, res) {
    res.sendFile(path.join(path.resolve(), "src", "views", "index.html"));
  }
}
