const express = require("express");

const {
  GetCategories,
  CreateCategory,
  GetCategory,
  UpdateCategory,
  DeleteCategory,
  UploadCategoryImage,
  ResizeImage,
  
} = require("../services/CategoryService");

const {
  GetCategoryValidator,
  CreateCategoryValidator,
  UpdateCategoryValidator,
  DeleteCategoryValidator,
} = require("../../utils/validators/CategoryValidator");

 
const AuthService = require("../services/AuthService");

const router = express.Router();

const SubCategoriesRoute = require("./SubCategoryRoute");

//Nested Route
router.use("/:categoryId/subcategories", SubCategoriesRoute);

router
  .route("/")
  .get(GetCategories)
  .post(AuthService.Protect, AuthService.AllowedTo('admin'), UploadCategoryImage, ResizeImage, CreateCategoryValidator, CreateCategory);

router
  .route("/:id")
  .get(GetCategoryValidator, GetCategory)
  .put(AuthService.Protect, AuthService.AllowedTo('admin'), UploadCategoryImage, ResizeImage, UpdateCategoryValidator, UpdateCategory)
  .delete(AuthService.Protect, AuthService.AllowedTo('admin'), DeleteCategoryValidator, DeleteCategory);

module.exports = router;
