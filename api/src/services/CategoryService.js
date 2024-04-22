const Sharp = require('sharp')
const {v4: uuidv4} = require('uuid');
const AsyncHandler = require("express-async-handler");
const Factory = require("./HandlersFactory");

const CategoryModel = require("../models/CategoryModel");
const { UploadSingleImage } = require("../middlewares/UploadImageMiddleware");



exports.UploadCategoryImage =  UploadSingleImage('image');

exports.ResizeImage = AsyncHandler(async (req, res, next) => {
   
    const Filename = `category-${uuidv4()}-${Date.now()}.webp`

    await Sharp(req.file.buffer)
    .resize(600,600)
    .toFormat('webp')
    .webp({quality:90})
    .toFile(`uploads/categories/${Filename}`);

    // Save image into our db 
    req.body.image = Filename;

    next();
})


// @desc Get list of categories
// @route GET /api/v1/categories
// @acces public
exports.GetCategories = Factory.GetAll(CategoryModel);

// @desc Get spesific category by id
// @ route GET /api/v1/categories/:id
// @acces Public
exports.GetCategory = Factory.GetOne(CategoryModel);

// @desc Create Category
// @route POST /api/v1/categories
// @acces private
exports.CreateCategory = Factory.CreateOne(CategoryModel);

// @desc Update a specific category
// @route PUT /api/v1/categories/:id
// @access Private
exports.UpdateCategory = Factory.UpdateOne(CategoryModel);

// @desc Delete a specific category
// @route DELETE /api/v1/categories/:id
// @access Private
exports.DeleteCategory = Factory.DeleteOne(CategoryModel);
