const Factory = require("./HandlersFactory");
const ReviewModel = require("../models/ReviewModel");


// Nested route
// GET /api/v1/products/:productId/reviews
exports.CreateFilterObj = (req, res, next) => {
  let FilterObject = {};
  if (req.params.productId) FilterObject = { product: req.params.productId };
  req.filterObj = FilterObject;
  next();
};

// Nested route 
exports.SetProductIdAndUserIdToBody = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;

  next();
};



// @desc Get list of Reviews
// @route GET /api/v1/reviews
// @acces public
exports.GetReviews = Factory.GetAll(ReviewModel);

// @desc Get spesific Review by id
// @ route GET /api/v1/reviews/:id
// @acces Public

exports.GetReview = Factory.GetOne(ReviewModel);


// @desc Create a Review
// @route POST /api/v1/reviews
// @acces Public/Protect/User
exports.CreateReview = Factory.CreateOne(ReviewModel);

// @desc Update a specific Review
// @route PUT /api/v1/reviews/:id
// @access Public/Protect/User
exports.UpdateReview = Factory.UpdateOne(ReviewModel);

// @desc Delete a specific Review
// @route DELETE /api/v1/reviews/:id
// @access Public/Protect/User-Admin
exports.DeleteReview = Factory.DeleteOne(ReviewModel);
