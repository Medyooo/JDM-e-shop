const express = require("express");

const {SignUp, LogIn, ForgotPassword, VerifyPasswordResetCode, ResetPassword} = require("../services/AuthService");
const { SignUpValidator, LogInValidator } = require("../../utils/validators/AuthValidator");


const router = express.Router();

router.post("/signup", SignUpValidator, SignUp);
router.post("/login", LogInValidator, LogIn);
router.post("/forgotPassword", ForgotPassword )
router.post("/verifyPasswordResetCode", VerifyPasswordResetCode )
router.put("/resetPassword", ResetPassword )


module.exports = router;
