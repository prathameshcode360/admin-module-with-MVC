export default function validation(req, res, next) {
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
  next();
}
