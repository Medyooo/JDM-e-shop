const asyncHandler = require('express-async-handler');


const UserModel = require('../models/UserModel');

// @desc Add Address to user adresses list 
// @route POST /api/v1/addresses
// @access Protected/User
exports.AddAddress = asyncHandler(async (req, res, next) =>{
  // $addToSet => add address to user adresses array if address not exist
    const user = await UserModel.findByIdAndUpdate(
    req.user._id,
    {
    $addToSet: {addresses : req.body},
    },
    { new: true }
    );

    res.status(200)
    .json({
      status: 'succes',
      message: 'Address added successfully.',
      data: user.addresses
    });
});

// @desc Remove Address to user addresses list 
// @route DELETE /api/v1/addresses
// @access Protected/User
exports.RemoveAddress = asyncHandler(async (req, res, next) =>{
    // $pull => remove address from user adresses array if address exist
      const user = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
      $pull: {addresses : {_id:  req.params.addressId}},
      },
      { new: true }
      );
  
      res.status(200)
      .json({
        status: 'succes',
        message: 'Address removed successfully.',
        data: user.addresses
      });
  });

// @desc Get logged user Addresses 
// @route GET /api/v1/addresses
// @access Protected/User
exports.GetLoggedUserAdresses = asyncHandler(async (req, res, next) =>{
      const user = await UserModel.findById(req.user._id).populate("addresses");
  
      res.status(200)
      .json({
        status: 'succes',
        results: user.addresses.length,
        data: user.addresses
      });
  });
  