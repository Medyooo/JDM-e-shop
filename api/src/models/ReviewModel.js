const mongoose = require("mongoose");
const ProductModel = require("./ProductModel");

// 1-Create schema
const ReviewSchema = new mongoose.Schema({
    text:{
        type: String,
    },

  rating:{
    type: Number,
    min: [1,"Min rating value is 1.0"],
    max: [5,"Min rating value is 5.0"],
    required:[true, "review rating required"]
  },

  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to user']
  },
// parent reference (1 to many)
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'Review must belong to Product']
  },

},
{ timestamps: true}
);

ReviewSchema.pre(/^find/, function (next) {
  this.populate({ path: 'user', select: 'name'});
  next();
})

ReviewSchema.statics.CalcAverageRatingsAndQuantity = async function (productId){
  const result = await this.aggregate([
    //stage 1 : get all reviews in specific product
    { $match: { product: productId } },
    // stage 2: group review by productID and calc avgratings ,ratingsQuantity 
    { $group: {_id: 'product', avgRatings: {$avg: '$rating'} , ratingsQuantity: {$sum: 1} 
  }
}
  ])
  if (result.length > 0) {
    await ProductModel.findByIdAndUpdate(productId, {  
      ratingsAverage: result[0].avgRatings,
      ratingsQuantity : result[0].ratingsQuantity,
    })
}else{
  await ProductModel.findByIdAndUpdate(productId, {  
    ratingsAverage: 0 ,
    ratingsQuantity : 0 ,
  })
}
}

ReviewSchema.post('save', async function () {
 await this.constructor.CalcAverageRatingsAndQuantity(this.product)

 });

ReviewSchema.post('findOneAndDelete', async function(doc) {
  if (doc) {
    await this.model.CalcAverageRatingsAndQuantity(doc.product);
  }
});
//2-Create model
const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;