const SubCategoryModel = require("../models/SubCategoryModel");
const Factory = require("./HandlersFactory")

exports.SetCategoryIdToBody = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

// @desc CreateSubCategory
// @route POST /api/v1/subcategories
// @acces private
exports.CreateSubCategory = Factory.CreateOne(SubCategoryModel);

//Nested route
exports.CreateFilterObj = (req, res, next) => {
  let FilterObject = {};
  if (req.params.categoryId) FilterObject = { category: req.params.categoryId };
  req.FilterObj = FilterObject;
  next();
};

// GET /api/v1/categories/:categoryId/subcategories

// @desc Get list of subcategories
// @route GET /api/v1/subcategories
// @acces public
exports.GetSubCategories = Factory.GetAll(SubCategoryModel);

// @desc Get spesific subcategory by id
// @ route GET /api/v1/subcategories/:id
// @acces Public
exports.GetSubCategory = Factory.GetOne(SubCategoryModel);

// @desc Update a specific category
// @route PUT /api/v1/categories/:id
// @access Private
exports.UpdateSubCategory = Factory.UpdateOne(SubCategoryModel);

// @desc Delete a specific subcategory
// @route DELETE /api/v1/subcategories/:id
// @access Private
exports.DeleteSubCategory = Factory.DeleteOne(SubCategoryModel);
