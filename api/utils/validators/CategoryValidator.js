const { check, body } = require("express-validator");
const  slugify = require("slugify");
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware");


exports.GetCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  ValidatorMiddleware,
];

exports.CreateCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("Category required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 32 })
    .withMessage("Too long category name")
    .custom((val, {req}) => {
      req.body.slug = slugify(val);
      return true;
    }),
  ValidatorMiddleware,
];

exports.UpdateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  body("name").custom((val, {req}) => {
    req.body.slug = slugify(val);
    return true;
  }),
  ValidatorMiddleware,
];

exports.DeleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  ValidatorMiddleware,
];
