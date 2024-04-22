const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Factory = require("./HandlersFactory");
const UserModel = require("../models/UserModel");
const ApiError = require("../../utils/ApiError");
const CreateToken = require("../../utils/CreateToken");


// @desc Get list of Users
// @route GET /api/v1/users
// @acces Private
exports.GetUsers = Factory.GetAll(UserModel);

// @desc Get spesific User by id
// @ route GET /api/v1/users/:id
// @acces Private

exports.GetUser = Factory.GetOne(UserModel);

// @desc Create a User
// @route POST /api/v1/users
// @acces private
exports.CreateUser = Factory.CreateOne(UserModel);

// @desc Update a specific User
// @route PUT /api/v1/users/:id
// @access Private
exports.UpdateUser = asyncHandler(async (req, res, next) => {

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {name: req.body.name,
       slug: req.body.slug,
       email: req.body.email,
       phone: req.body.phone,
       role: req.body.role},
      { new: true, }
    );
    if (!user) {
      next(new ApiError(`No user for this id : ${req.params.id}`, 404));
    } else {
      res.status(200).json({ data: user });
    }
  });

exports.ChangeUserPassword = asyncHandler(async (req, res, next) => {

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {password: await bcrypt.hash(req.body.password, 12),
       passwordChangedAt: Date.now() },
      { new: true, }
    );
    if (!user) {
      next(new ApiError(`No user for this id : ${req.params.id}`, 404));
    } else {
      res.status(200).json({ data: user });
    }
  });

// @desc Delete a specific User
// @route DELETE /api/v1/users/:id
// @access Private
exports.DeleteUser = Factory.DeleteOne(UserModel);



// @desc Get Logged user sata 
// @route DELETE /api/v1/users/getMe
// @access Private/Protect
exports.GetLoggedUserData = asyncHandler(async (req, res,next) => {
  req.params.id = req.user._id;
  next();
})

// @desc Update Logged user data 
// @route PUT /api/v1/uSERS/updateMyPassword
// @access Private/Protect
exports.UpdateLoggedUserPassword = asyncHandler(async (req, res,next) => {
  //1- Update user password based user payload (req, user._id)
  const user = await UserModel.findByIdAndUpdate(
    req.user._id,
    {password: await bcrypt.hash(req.body.password, 12),
     passwordChangedAt: Date.now() },
    { new: true, }
  );
  //2- Generate token
  const token = CreateToken(user._id)

  res.status(200).json({data: user, token});
})


// @desc Update Logged user data (without password , role)
// @route PUT /api/v1/users/updateMydata
// @access Private/Protect

exports.UpdateLoggedUserData = asyncHandler(async (req, res, next) => {
  const updatedUser = await UserModel.findByIdAndUpdate (req.user._id ,{
    name : req.body.name,
    email: req.body.email,
    phone: req.body.phone,


  },{new : true});

  res.status(200).json({ data: updatedUser})
})


