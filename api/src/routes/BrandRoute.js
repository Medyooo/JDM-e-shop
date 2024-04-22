const express = require("express");
const {
  CreateBrand,
  GetBrand,
  GetBrands,
  UpdateBrand,
  DeleteBrand,
  UploadBrandImage,
  ResizeImage
} = require("../services/BrandService");
const {
  GetBrandValidator,
  CreateBrandValidator,
  UpdateBrandValidator,
  DeleteBrandValidator,
} = require("../../utils/validators/BrandValidator");

const AuthService = require("../services/AuthService");


const router = express.Router();

router.route("/").get(GetBrands).post(AuthService.Protect, AuthService.AllowedTo('admin'), UploadBrandImage, ResizeImage, CreateBrandValidator, CreateBrand);

router
  .route("/:id")
  .get(GetBrandValidator, GetBrand)
  .put(AuthService.Protect, AuthService.AllowedTo('admin'),UploadBrandImage, ResizeImage, UpdateBrandValidator, UpdateBrand)
  .delete(AuthService.Protect, AuthService.AllowedTo('admin'), DeleteBrandValidator, DeleteBrand);

module.exports = router;
