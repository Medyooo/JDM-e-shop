const express = require("express");

const {
  CreateSubCategory,
  GetSubCategories,
  GetSubCategory,
  DeleteSubCategory,
  UpdateSubCategory,
  SetCategoryIdToBody,
  CreateFilterObj,
} = require("../services/SubCategoryService");
const {
  CreateSubCategoryValidator,
  GetSubCategoryValidator,
  DeleteSubCategoryValidator,
  UpdateSubCategoryValidator,
} = require("../../utils/validators/SubCategoryValidator");

// mergeParams: Allow us to acces the parameters on other routers
//ex: We need to acces categoryId from category router
const router = express.Router({ mergeParams: true });

const AuthService = require("../services/AuthService");

router
  .route("/")
  .post(AuthService.Protect, AuthService.AllowedTo('admin'), SetCategoryIdToBody, CreateSubCategoryValidator, CreateSubCategory)
  .get(CreateFilterObj, GetSubCategories);

router
  .route("/:id")
  .get(GetSubCategoryValidator, GetSubCategory)
  .put(AuthService.Protect, AuthService.AllowedTo('admin'), UpdateSubCategoryValidator, UpdateSubCategory)
  .delete(AuthService.Protect, AuthService.AllowedTo('admin'), DeleteSubCategoryValidator, DeleteSubCategory);

module.exports = router;
