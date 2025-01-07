import { body, validationResult } from "express-validator";

export default async function validation(req, res, next) {
  // 1. Setting rules
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be a positive number"),
    body("image").isURL().withMessage("Invalid URL"),
  ];

  // 2. Run the validation rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // 3. Check for validation errors
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.render("addProduct", {
      errorMessage: validationErrors.array()[0].msg, // Send only the error message
    });
  }

  next(); // Proceed to the next middleware or route handler
}
