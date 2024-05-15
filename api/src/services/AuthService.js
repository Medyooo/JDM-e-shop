const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const UserModel = require('../models/UserModel');
const ApiError = require('../../utils/ApiError');
const SendEmail = require('../../utils/SendEmail');


const CreateToken = (payload) =>
    jwt.sign({ userId: payload}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE_TIME});

// @desc SignUp
// @route GET /api/v1/auth/signup
// @acces public
exports.SignUp = asyncHandler (async (req, res, next) => {
    //1-Create user
    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    //2-Generate token
    const token = CreateToken(user._id);

    res.status(200).json({data: user, token})
});

// @desc Login
// @route GET /api/v1/auth/login
// @acces public
exports.LogIn = asyncHandler(async (req, res, next) => {
    //1- check if user exists & password is correct
    const user = await UserModel.findOne({ email: req.body.email})

    if(!user || !(await bcrypt.compare(req.body.password, user.password))){

        return next(new ApiError("Incorrect email or password"));
    }
    //2- generate Token
    const token = CreateToken(user._id);

    //3- send response to client side
    res.status(201).json({data: user, token})
});

//@desc make sure the user is logged in
exports.Protect = asyncHandler (async (req, res, next) => {
    //1- check if token exists , if exist get it 
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1];
    }
    if (!token){
        return next(new ApiError('You are not login, please login to get acces this route'))
    }
    //2- verify token (no change happens, expired token )
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //3- check if user exists
    const user = await UserModel.findById(decoded.userId);
    if(!user){
        return next(new ApiError('the user that belong to this token does no longer exists',401))
    }
    //4- check if user change his password after token created
    if (user.passwordChangedAt){
        const passChangedTimestamp = parseInt(user.passwordChangedAt.getTime() / 1000, 10) ;
        
        if (passChangedTimestamp > decoded.iat) {
        return next( new ApiError('User recently changed his password. Please login again..'))
        }
    }
    req.user = user;
    next();
})       

//@desc  Authorization (User Permissions)
exports.AllowedTo = (...roles) => asyncHandler( async (req, res, next) => {
    // acces registered user (req.user.role)
    if(!roles.includes(req.user.role)){
        return next(new ApiError("Not allowed to access this route",403));
    }
    next();
})

// @desc ForgotPassword
// @route POST /api/v1/auth/forgotPassword
// @acces public
exports.ForgotPassword = asyncHandler(async (req, res, next) => {
    //1- Get user by email 
    const user = await UserModel.findOne({ email: req.body.email})
    if(!user){
        return next(new ApiError(`There is no user with that email ${req.body.email}`,404));
}
    //2- if user exists, Generate hash reset random 6 digits and save it in db 
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString()
    const hashResetCode = crypto
        .createHash('sha256')
        .update(resetCode)
        .digest('hex');
    
    // Save hashed password reset code into db 
    user.passwordResetCode = hashResetCode;
    //Add expiration time for password reset code (10 min)
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    user.passwordResetVerified = false;

    await user.save();    

   
    const message = `Hi ${user.name},\n We received a request to reset the password on your account. \n ${resetCode}\n Enter this code to complete the reset.\n Les jardins du Maroc Team `
    //3-send the reset code via email
    try{
    await SendEmail({email: user.email, subject: "Your Password reset code (valid for 10 min)", message: message})
    } catch (err) {
        user.passwordResetCode = undefined;
        user.passwordResetExpires = undefined;
        user.passwordResetVerified = undefined;
     await user.save();
    return next(new ApiError("There is an error in sending email", 500 ));
    }

    res.status(200).json({status: 'success', message : "Reset code sent to email"})
})

// @desc VerifyPasswordResetCode
// @route POST /api/v1/auth/verifyPasswordResetCode
// @acces public
exports.VerifyPasswordResetCode = asyncHandler(async (req, res, next) => {  
    //1- Get user based on reset code 
    const hashedResetCode = crypto
    .createHash('sha256')
    .update(req.body.resetCode)
    .digest('hex');

    const user = await UserModel.findOne({passwordResetCode: hashedResetCode, passwordResetExpires: {$gt: Date.now()}})

    if(!user) {
        return next(new ApiError("Reset code invalid or expired"))
    }
    // reset code valid
    user.passwordResetVerified = true
    await user.save();
    
    res.status(200).json({
        status: "Succes"
    })
})

// @desc Reset password
// @route PUT /api/v1/auth/resetPassword
// @acces public
exports.ResetPassword = asyncHandler(async (req, res, next) => {
//1- Get user based on email
    const user = await UserModel.findOne({email : req.body.email})
    
    if(!user){
        return next( new ApiError("No user with this email found",404))
    }
    // check if reset code verified
    if(!user.passwordResetVerified){
        return next( new ApiError("Reset code not verified", 400))
    }

    user.password = req.body.newPassword
    user.passwordResetCode = undefined;
    user.passwordResetVerified=undefined;
    user.passwordResetExpires=undefined;
    
    await user.save();

   // 3- if everything is ok , generate TOKEN
    const token = CreateToken(user._id);
    res.status(200).json({token})
})