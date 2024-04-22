const asyncHandler = require('express-async-handler');


const UserModel = require('../models/UserModel');

// @desc Add Product to wishlist 
// @route POST /api/v1/wishlist
// @access Protected/User
exports.AddProductToWishlist = asyncHandler(async (req, res, next) =>{
  // $addToSet => add productId to wishlist array if productId not exist
    const user = await UserModel.findByIdAndUpdate(
    req.user._id,
    {
    $addToSet: {wishlist : req.body.productId},
    },
    { new: true }
    );

    res.status(200)
    .json({
      status: 'succes',
      message: 'Product added successfully to your wishlist.',
      data: user.wishlist
    });
});

// @desc Remove Product to wishlist 
// @route DELETE /api/v1/wishlist
// @access Protected/User
exports.RemoveProductFromWishlist = asyncHandler(async (req, res, next) =>{
    // $pull => remove productId from wishlist array if productId exist
      const user = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
      $pull: {wishlist : req.params.productId},
      },
      { new: true }
      );
  
      res.status(200)
      .json({
        status: 'succes',
        message: 'Product removed successfully from your wishlist.',
        data: user.wishlist
      });
  });

// @desc Get logged user wishlist 
// @route GET /api/v1/wishlist
// @access Protected/User
exports.GetLoggedUserWishlist = asyncHandler(async (req, res, next) =>{
      const user = await UserModel.findById(req.user._id).populate("wishlist");
  
      res.status(200)
      .json({
        status: 'succes',
        results: user.wishlist.length,
        data: user.wishlist
      });
  });
  