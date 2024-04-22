const express = require("express");

const AuthService = require("../services/AuthService");
const { AddProductToCart, GetLoggedUserCart, RemoveSpecificCartItem, ClearCart, UpdateCartItemQuantity, ApplyCoupon } = require("../services/CartService");

const router = express.Router();

router.use(AuthService.Protect, AuthService.AllowedTo('user'));

router.route("/")
.post(AddProductToCart)
.get(GetLoggedUserCart)
.delete(ClearCart)

router.put('/applyCoupon', ApplyCoupon)

router.route("/:itemId")
.delete(RemoveSpecificCartItem)
.put(UpdateCartItemQuantity)


module.exports = router;
