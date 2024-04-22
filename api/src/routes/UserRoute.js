const express = require("express");
const {
  GetUsers,
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
  ChangeUserPassword,
  GetLoggedUserData,
  UpdateLoggedUserPassword,
  UpdateLoggedUserData
} = require("../services/UserService");
const {
  CreateUserValidator,
  GetUserValidator,
  UpdateUserValidator,
  DeleteUserValidator,
  ChangeUserPasswordValidator,
  UpdateLoggedUserValidator,
} = require("../../utils/validators/UserValidator");

const AuthService = require("../services/AuthService");

const router = express.Router();


router.use(AuthService.Protect)

router.get('/getMe', GetLoggedUserData, GetUser)
router.put('/changeMyPassword',UpdateLoggedUserPassword , ChangeUserPasswordValidator)
router.put('/updateMe',UpdateLoggedUserData , UpdateLoggedUserValidator)

//Admin
router.use(AuthService.AllowedTo('admin'))

router.route("/").get(GetUsers).post( CreateUserValidator, CreateUser);
router.put('/changePassword/:id', ChangeUserPasswordValidator ,ChangeUserPassword);

router
  .route("/:id")
  .get(GetUserValidator, GetUser)
  .put( UpdateUserValidator, UpdateUser)
  .delete(DeleteUserValidator, DeleteUser);

module.exports = router;
