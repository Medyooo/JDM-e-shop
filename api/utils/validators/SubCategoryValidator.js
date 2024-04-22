const { check, body } = require("express-validator");
const  slugify  = require("slugify");
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware");


exports.GetSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Subcategory id format"),
  ValidatorMiddleware,
];

exports.CreateSubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("SubCategory required")
    .isLength({ min: 3 })
    .withMessage("Too short Subcategory name")
    .isLength({ max: 32 })
    .withMessage("Too long Subcategory name")
    .custom((val, {req}) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("category")
    .notEmpty()
    .withMessage("subCategory must be belong category")
    .isMongoId()
    .withMessage("Invalid Category id format"),
  ValidatorMiddleware,
];

exports.UpdateSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Subcategory id format"),
  body("name").custom((val, {req}) => {
    req.body.slug = slugify(val);
    return true;
  }),
  ValidatorMiddleware,
];

exports.DeleteSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Subcategory id format"),
  ValidatorMiddleware,
];
