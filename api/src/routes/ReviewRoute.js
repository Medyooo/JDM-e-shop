const express = require("express");




const AuthService = require("../services/AuthService");
const { GetReviews, GetReview, CreateReview, DeleteReview, UpdateReview, SetProductIdAndUserIdToBody, CreateFilterObj } = require("../services/ReviewService");
const { CreateReviewValidator, UpdateReviewValidator, DeleteReviewValidator } = require("../../utils/validators/ReviewValidators");

const router = express.Router({mergeParams: true});

router.route("/")
.get(CreateFilterObj ,GetReviews)
.post(AuthService.Protect, AuthService.AllowedTo('user'),SetProductIdAndUserIdToBody,CreateReviewValidator ,CreateReview);

router
  .route("/:id")
  .get(GetReview)
  .put(AuthService.Protect, AuthService.AllowedTo('user'),UpdateReviewValidator , UpdateReview)
  .delete(AuthService.Protect, AuthService.AllowedTo('admin','user'), DeleteReviewValidator ,DeleteReview);

module.exports = router;
