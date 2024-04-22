const AsyncHandler = require("express-async-handler");
const {v4: uuidv4} = require('uuid');
const Sharp = require("sharp");

const Factory = require("./HandlersFactory");
const ProductModel = require("../models/ProductModel");
const { UploadMixOfImages } = require("../middlewares/UploadImageMiddleware");



exports.UploadProductImages = UploadMixOfImages([
  {
     name: 'imageCover',
     maxCount: 1,
  },
  {
    name : 'images',
    maxCount: 3,
  }
])

exports.ResizeProductImages = AsyncHandler (async (req, res, next) => {
  console.log(req.files);
  // Image processing for imageCover
  if (req.files.imageCover){
    
    const ImageCoverFileName = `product-${uuidv4()}-${Date.now()}.webp`

    await Sharp(req.files.imageCover[0].buffer)
    .toFormat('webp')
    .webp({quality:95})
    .toFile(`uploads/products/${ImageCoverFileName}`);

    // Save image into our db 
    req.body.imageCover = ImageCoverFileName;
  }
  //2-Image processing for images
  if (req.files.images){
    req.body.images= []
  await Promise.all(
    req.files.images.map(async(img, index) => {

        const ImageName = `product-${uuidv4()}-${Date.now()}-${index + 1}.webp`
    
        await Sharp(img.buffer)
        .toFormat('webp')
        .webp({quality:95})
        .toFile(`uploads/products/${ImageName}`);
    
        // Save image into our db 
        req.body.images.push(ImageName);
    })
    )
    
   next();
  }
})

// @desc Get list of products
// @route GET /api/v1/products
// @acces public
exports.GetProducts = Factory.GetAll(ProductModel, 'Products');
  
// @desc Get spesific product by id
// @ route GET /api/v1/products/:id
// @acces Public
exports.GetProduct = Factory.GetOne(ProductModel, 'reviews');

// @desc CreateProduct
// @route POST /api/v1/products
// @acces private
exports.CreateProduct = Factory.CreateOne(ProductModel);

// @desc Update a specific product
// @route PUT /api/v1/products/:id
// @access Private
exports.UpdateProduct = Factory.UpdateOne(ProductModel);

// @desc Delete a specific product
// @route DELETE /api/v1/products/:id
// @access Private
exports.DeleteProduct = Factory.DeleteOne(ProductModel);