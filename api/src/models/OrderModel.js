const mongoose = require("mongoose");

// 1-Create schema
const OrderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'Order must be belong to user'],
    },

  cartItems: [ 
    {
    product: {
       type: mongoose.Schema.ObjectId,
       ref: 'Product',
    },   
   quantity: Number,
   price: Number,
   },
  ],

  taxPrice: {type:Number , default :0},

  shippingPrice:{type:Number ,default:0},
  shippingAddress: {details: String, phone: String, city: String, postalCode: String},
  totalOrderPrice: {type:Number},

  paymentMethodType: {
    type: String,
    enum: ['card','cash'],
    default: 'cash',
  },

  isPaid: {type:Boolean, default:false},
  paidAt: Date,

  isDelivered: {type:Boolean, default:false},
  deliveredAt:Date,

  isCanceled: {type:Boolean, default:false},
  canceledAt: Date,

},
{ timestamps: true }
);


//2-Create model
const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;