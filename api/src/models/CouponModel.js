const mongoose = require("mongoose");

// 1-Create schema
const CouponSchema = new mongoose.Schema({
   
  name: {
    type: String,
    trim: true,
    required: [true, "Coupon name required"],
    unique: true,
  },
  expire: {
    type: Date,
    required: [true,"Coupon expiration required"]
  },
  discount: {
    type: Number,
    required: [true,"Coupon discount required"]
  },
  
},
{ timestamps: true }
);

//2-Create model
const CouponModel = mongoose.model('Coupon', CouponSchema);

module.exports = CouponModel;