const Sharp = require('sharp')
const {v4: uuidv4} = require('uuid');
const AsyncHandler = require("express-async-handler");

const Factory = require("./HandlersFactory");
const BrandModel = require("../models/BrandModel");
const { UploadSingleImage } = require('../middlewares/UploadImageMiddleware');



exports.UploadBrandImage =  UploadSingleImage('image');

exports.ResizeImage = AsyncHandler(async (req, res, next) => {
   
    const Filename = `brand-${uuidv4()}-${Date.now()}.webp`

    await Sharp(req.file.buffer)
    .toFormat('webp')
    .webp({quality:90})
    .toFile(`uploads/brands/${Filename}`);

    // Save image into our db 
    req.body.image = Filename;

    next();
})

// @desc Get list of Brands
// @route GET /api/v1/brands
// @acces public
exports.GetBrands = Factory.GetAll(BrandModel);

// @desc Get all Brand by id
// @ route GET /api/v1/brands/:id
// @acces Public

exports.GetBrand = Factory.GetOne(BrandModel);

// @desc Create a Brand
// @route POST /api/v1/brands
// @acces private
exports.CreateBrand = Factory.CreateOne(BrandModel);

// @desc Update a specific Brand
// @route PUT /api/v1/brands/:id
// @access Private
exports.UpdateBrand = Factory.UpdateOne(BrandModel);

// @desc Delete a specific Brand
// @route DELETE /api/v1/brands/:id
// @access Private
exports.DeleteBrand = Factory.DeleteOne(BrandModel);
