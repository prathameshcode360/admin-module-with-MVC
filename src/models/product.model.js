export default class ProductModel {
  constructor(id, name, desc, price, image) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.image = image;
  }

  static getAll() {
    return products;
  }
  static add(productObj) {
    const newProduct = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.image
    );
    return products.push(newProduct);
  }
  static getById(id) {
    return products.find((prouct) => prouct.id == id);
  }
  static update(productObj) {
    let index = products.findIndex((p) => p.id == productObj.id);
    products[index] = productObj;
  }
  static delete(id) {
    const index = products.findIndex((p) => p.id == id);
    products.splice(index, 1);
  }
}
var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    200,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    100,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    250,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
