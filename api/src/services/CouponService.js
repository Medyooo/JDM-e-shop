const Factory = require("./HandlersFactory");
const CouponModel = require("../models/CouponModel");

// @desc Get list of Coupons
// @route GET /api/v1/coupons
// @acces Private
exports.GetCoupons = Factory.GetAll(CouponModel);

// @desc Get all Coupon by id
// @ route GET /api/v1/coupon/:id
// @acces Public
exports.GetCoupon = Factory.GetOne(CouponModel);

// @desc Create a Coupon
// @route POST /api/v1/coupons
// @acces private
exports.CreateCoupon = Factory.CreateOne(CouponModel);

// @desc Update a specific Coupon
// @route PUT /api/v1/coupons/:id
// @access Private
exports.UpdateCoupon = Factory.UpdateOne(CouponModel);

// @desc Delete a specific Coupon
// @route DELETE /api/v1/coupons/:id
// @access Private
exports.DeleteCoupon = Factory.DeleteOne(CouponModel);
