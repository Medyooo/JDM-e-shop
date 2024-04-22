const express = require("express");

const AuthService = require("../services/AuthService");
const { CreateCoupon, GetCoupons, UpdateCoupon, DeleteCoupon } = require("../services/CouponService");

const router = express.Router();

router.use(AuthService.Protect)

router.route("/").get(AuthService.AllowedTo('admin'), GetCoupons).post(AuthService.AllowedTo('admin'), CreateCoupon);

router
  .route("/:id")
  .get(GetCoupons)
  .put(AuthService.AllowedTo('admin'), UpdateCoupon)
  .delete(AuthService.AllowedTo('admin'), DeleteCoupon);

module.exports = router;
