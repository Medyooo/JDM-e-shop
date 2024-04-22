const AsyncHandler = require("express-async-handler");
const CartModel = require("../models/CartModel");
const ApiError = require("../../utils/ApiError");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");
const Factory = require("./HandlersFactory");

// @desc Create cash order
// @route POST /api/v1/orders/cartId
// @acces Protected/User
exports.createCashOrder = AsyncHandler(async (req, res, next) => {
 // 1- Get cart depend on cartId
 const cart = await CartModel.findById(req.params.cartId);
 if (!cart) {
    return next(new ApiError(`There is no cart with this id : ${req.params.cartId}`),404);
 }
 // 2- Get order price depend on cart price "Check if coupon applied"
 const cartPrice = cart.totalPriceAfterDiscount 
   ? cart.totalPriceAfterDiscount
   : cart.totalCartPrice;

 const totalOrderPrice = cartPrice 
 // 3- Create order with default paymentMethodType cash
  const order = await OrderModel.create({
    user: req.user._id,
    cartItems: cart.cartItems,
    shippingAddress: req.body.shippingAddress,
    totalOrderPrice,
  })
 // 4- After creating order decrement product quantity, increment product quantity in stock
   if(order){
     const bulkOption = cart.cartItems.map((item) => ({
        updateOne:{
            filter:{ _id: item.product},
            update:{ $inc: {quantity: -item.quantity, sold: +item.quantity}}
        }
      }));
       await ProductModel.bulkWrite(bulkOption, {})
     // 5- Clear cart depend on cartId
     await CartModel.findByIdAndDelete(req.params.cartId);
 }
   res.status(201).json({ status: 'success', data: order});
});

exports.filterOrderForLoggedUser = AsyncHandler(async (req, res, next) =>{
  if (req.user.role === 'user') req.filterObj = {user : req.user._id }
  next();
})
// @desc Get all orders
// @route GET /api/v1/orders
// @acces Protected/User-Admin
exports.GetAllOrders = Factory.GetAll(OrderModel)

// @desc Get a specific order
// @route GET /api/v1/orders
// @acces Protected/User-Admin
exports.GetOrder = Factory.GetOne(OrderModel)

// @desc Update order paid status to paid
// @route PUT /api/v1/orders/:id/pay
// @acces Protected/Admin
exports.UpdateOrderToPaid = AsyncHandler(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);
  if(!order){
    return next( new ApiError(`There is no such order with this id : ${req.params.id}`), 404);
  }
 
  // update order to paid
  order.isPaid = true;
  order.paidAt = Date.now();

  const updateOrder = await order.save();

  res.status(200).json({status: "succes", data: updateOrder})
})

// @desc Update order to delivred status 
// @route PUT /api/v1/orders/:id/deliver
// @acces Protected/Admin
exports.UpdateOrderToDelivered = AsyncHandler(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);
  if(!order){
    return next( new ApiError(`There is no such order with this id : ${req.params.id}`), 404);
  }
 
  // update order to delivered
  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updateOrder = await order.save();

  res.status(200).json({status: "succes", data: updateOrder})
})


// @desc Update order to canceled status 
// @route PUT /api/v1/orders/:id/cancel
// @acces Protected/Admin
exports.UpdateOrderToCancel = AsyncHandler(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);
  if(!order){
    return next( new ApiError(`There is no such order with this id : ${req.params.id}`), 404);
  }
 
  // update order to delivered
  order.isCanceled = true;
  order.canceledAt = Date.now();

  const updateOrder = await order.save();

  res.status(200).json({status: "succes", data: updateOrder})
})
