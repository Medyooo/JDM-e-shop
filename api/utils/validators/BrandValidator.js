const { check, body } = require("express-validator");
const slugify = require("slugify");
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware");

exports.GetBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),
  ValidatorMiddleware,
];

exports.CreateBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Brand required")
    .isLength({ min: 3 })
    .withMessage("Too short Brand name")
    .isLength({ max: 32 })
    .withMessage("Too long Brand name")
    .custom((val, {req}) => {
      req.body.slug = slugify(val);
      return true;
    }),
  ValidatorMiddleware,
];

exports.UpdateBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),
  body("name").custom((val, {req}) => {
  req.body.slug = slugify(val);
  return true;
}),
  ValidatorMiddleware,
];

exports.DeleteBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id format"),
  ValidatorMiddleware,
];
