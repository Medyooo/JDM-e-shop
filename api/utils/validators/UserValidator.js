const { check, body } = require("express-validator");
const bcrypt = require("bcryptjs")
const slugify = require("slugify");
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware");
const UserModel = require("../../src/models/UserModel");

exports.GetUserValidator = [
  check("id").isMongoId().withMessage("Invalid user id format"),
  ValidatorMiddleware,
];

exports.CreateUserValidator = [
  check("name")
    .notEmpty()
    .withMessage("User name is required")
    .isLength({ min: 3 })
    .withMessage("Too short user name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("email")
    .notEmpty()
    .withMessage("Please enter a valid email address")
    .isEmail()
    .withMessage("Invalid email address")
    .custom((val) =>
      UserModel.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already exists"));
        }
      })
    ),

  check("password")
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .custom((password, { req }) => {
      if (password !== req.body.passwordConfirm) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  check("passwordConfirm")
    .notEmpty()
    .withMessage("Password confirmation is required"),

  check("phone")
    .optional()
    .isMobilePhone("fr-FR")
    .withMessage("Invalid phone number only accepted Fr"),

  check("role").optional(),

  ValidatorMiddleware,
];

exports.UpdateUserValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid user id format"),
  body("name")
  .optional()
  .custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  check("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address")
    .custom((val) =>
      UserModel.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already exists"));
        }
      })
    ),
  check("phone")
    .optional()
    .isMobilePhone("fr-FR")
    .withMessage("Invalid phone number only accepted Fr"),

  check("role")
    .optional(),
  
  ValidatorMiddleware,
];

exports.ChangeUserPasswordValidator = [
  body("currentPassword")
    .notEmpty()
    .withMessage("you must enter your current password"),
  body("passwordConfirm")
    .notEmpty()
    .withMessage("you must enter the password confirm"),
  body("password")
    .notEmpty()
    .withMessage("you must enter the new password")
    .custom(async(val, {req}) =>{
      //1- check current password
      const user = await UserModel.findById(req.params.id);
      if(!user){
        throw new Error ("There is no user with  the given id")
      }
      const isCorrectPassword = await  bcrypt.compare(req.body.currentPassword, user.password);
      if(!isCorrectPassword){
        throw new Error ("Incoorrect current password")
      }
      //2-check the password confirm
      if (val !== req.body.passwordConfirm) {
        throw new Error("Passwords do not match");
      }
      return true
    }),
    ValidatorMiddleware,
];

exports.DeleteUserValidator = [
  check("id").isMongoId().withMessage("Invalid user id format"),
  ValidatorMiddleware,
];

exports.UpdateLoggedUserValidator = [
  body("name")
  .optional()
  .custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  check("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address")
    .custom((val) =>
      UserModel.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already exists"));
        }
      })
    ),
  check("phone")
    .optional()
    .isMobilePhone("fr-FR")
    .withMessage("Invalid phone number only accepted Fr"),

  ValidatorMiddleware,
];