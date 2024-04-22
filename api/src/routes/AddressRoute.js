const express = require("express");

const AuthService = require("../services/AuthService");
const { AddAddress, GetLoggedUserAdresses, RemoveAddress } = require("../services/AddressService");

const router = express.Router();


router.use(AuthService.Protect)

router.post("/", AuthService.AllowedTo('user'), AddAddress).get("/", GetLoggedUserAdresses)

router.delete("/:addressId", AuthService.AllowedTo('user'), RemoveAddress)




module.exports = router;
