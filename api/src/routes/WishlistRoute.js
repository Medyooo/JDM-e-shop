const express = require("express");

const AuthService = require("../services/AuthService");
const { AddProductToWishlist, RemoveProductFromWishlist, GetLoggedUserWishlist } = require("../services/WishlistService");

const router = express.Router();


router.use(AuthService.Protect)

router.post("/", AuthService.AllowedTo('user'), AddProductToWishlist).get("/", GetLoggedUserWishlist)

router.delete("/:productId", AuthService.AllowedTo('user'), RemoveProductFromWishlist)




module.exports = router;
