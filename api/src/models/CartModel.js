const mongoose = require("mongoose");

// 1-Create schema
const CartSchema = new mongoose.Schema({
   
  cartItems: [
    {
     product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
     },   
    quantity: {
        type:Number,
        default: 1,
    },
    
    price: Number,

  }],
   totalCartPrice :Number,
   totalPriceAfterDiscount: Number,

   user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
   },
 },
{ timestamps: true }
);

//2-Create model
const CartModel = mongoose.model('Cart', CartSchema);

module.exports = CartModel;