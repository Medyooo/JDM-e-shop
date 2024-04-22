const { check } = require("express-validator");
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware");
const ReviewModel = require("../../src/models/ReviewModel");

exports.GetReviewValidator = [
  check("id").isMongoId().withMessage("Invalid Review id format"),
  ValidatorMiddleware,
];

exports.CreateReviewValidator = [
  check("text")
    .optional( ),
  check("rating")
    .notEmpty()
    .withMessage('rating value required')
    .isFloat({min : 1, max : 5 })
    .withMessage('Rating must be a number from 1 to 5'),
  check("user")
    .isMongoId()
    .withMessage("User is invalid."),
  check("product")
    .isMongoId()
    .withMessage("Product is invalid")
    .custom((val, { req }) =>
        //check if logged user has create review before
     ReviewModel.findOne({user: req.user._id, product: req.body.product}).then((review) => {
        if (review){
            return Promise.reject(new Error("You already created a review before"))
         }
     }
    )),
  ValidatorMiddleware
];

exports.UpdateReviewValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Review id format")
   .custom(( val, { req } ) => 
    //check review ownership before updating
      ReviewModel.findById(val).then((review) => {
    if (!review){
        return Promise.reject(new Error("There is no review with id"))
    }
    if (review.user._id.toString() !== req.user._id.toString()){
        return Promise.reject(new Error("You are not allowed to perform this action"));
    }

 }
)
),
  ValidatorMiddleware,
];

exports.DeleteReviewValidator = [
  check("id")
  .isMongoId()
  .withMessage("Invalid Review id format")
  .custom(( val, { req } ) => {
    //check review ownership before updating
    if(req.user.role === "user"){
      return ReviewModel.findById(val).then((review) => {
        if (!review){
            return Promise.reject(new Error("There is no review with id"))
        }
       if (review.user._id.toString() !== req.user._id.toString()){
          return Promise.reject(new Error("You are not allowed to perform this action"));
      }
    }
      )
 }
 return true
}),
  ValidatorMiddleware,
];
