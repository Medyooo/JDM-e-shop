const express = require("express");
const ReviewRoute = require("./ReviewRoute");
const {
  GetProduct,
  CreateProduct,
  GetProducts,
  UpdateProduct,
  DeleteProduct,
  UploadProductImages,
  ResizeProductImages,
} = require("../services/ProductService");
const {
  CreateProductValidator,
  GetProductValidator,
  UpdateProductValidator,
  DeleteProductValidator,
} = require("../../utils/validators/ProductValidators");

const AuthService = require("../services/AuthService");

const router = express.Router();

// POST /products/kfjlfkldfkeml548/reviews
// GET /products/kfjlfkldfkeml548/reviews
// GET /products/kfjlfkldfkeml548/reviews/glfjkfbmlm
router.use("/:productId/reviews",ReviewRoute);

router.route("/").get(GetProducts).post(AuthService.Protect, AuthService.AllowedTo('admin'),UploadProductImages, ResizeProductImages, CreateProductValidator, CreateProduct);

router
  .route("/:id")
  .get(GetProductValidator, GetProduct)
  .put(AuthService.Protect, AuthService.AllowedTo('admin'), UploadProductImages, ResizeProductImages, UpdateProductValidator, UpdateProduct)
  .delete(AuthService.Protect, AuthService.AllowedTo('admin'), DeleteProductValidator, DeleteProduct);

module.exports = router;
