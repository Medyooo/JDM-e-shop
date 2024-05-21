const AsyncHandler = require("express-async-handler");
const CartModel = require("../models/CartModel");
const ProductModel = require("../models/ProductModel");
const ApiError = require("../../utils/ApiError");
const CouponModel = require("../models/CouponModel");


const CalcTotalCartPrice = (cart) =>{
    let totalPrice = 0;
  cart.cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity
  });
  cart.totalCartPrice = totalPrice;
  cart.totalPriceAfterDiscount = undefined
  return totalPrice;
}

// @desc Get logged user cart
// @route GET /api/v1/cart
// @acces Private/User
exports.GetLoggedUserCart = AsyncHandler(async (req, res, next) => {
    const cart = await CartModel.findOne({user: req.user._id});
    
    if(!cart) {
    return next(new ApiError(`There is no cart for this user id : ${req.user._id}`, 404)
    );
  }
  res.status(200).json({ status:'succes', numOfCartItems: cart.cartItems.length, data: cart})
})


// @desc Add product to cart
// @route POST /api/v1/cart
// @acces Private/User
exports.AddProductToCart = AsyncHandler(async (req, res, next) => {
    const {productId} = req.body;

    const product = await ProductModel.findById(productId);
 // 1) Get Cart for logged user
 let cart = await CartModel.findOne({user: req.user._id});

 if(!cart){
    // create cart for logged user with product
    cart = await CartModel.create({
        user: req.user._id,
        cartItems: [{ product: productId, price:product.price  }],
 });
}else{
    // product exist in cart , update product quantity 
    const productIndex = cart.cartItems.findIndex((item) => item.product.toString() === productId);
    
    if (productIndex > -1){
     const cartItem = cart.cartItems[productIndex];
     cartItem.quantity += 1;

     cart.cartItems[productIndex] = cartItem;
    }else {
    // if product not exist push product to cartItems array
    cart.cartItems.push({product: productId, price: product.price})
    }
} 
// Calculate total cart price 
 CalcTotalCartPrice(cart);

  res.status(200).json({status: 'success', message: 'product added to cart successfully', data: cart});
  await cart.save();
})

// @desc Update a specific cart item quantity
// @route PUT /api/v1/cart/:itemId
// @access Private
exports.UpdateCartItemQuantity = AsyncHandler(async (req, res, next) => {
  const {quantity} = req.body;

  const cart = await CartModel.findOne({ user: req.user._id });

  if(!cart) {
    return next(new ApiError(`There is no cart with this User id : ${req.user._id}`, 404));
  }

  const itemIndex = cart.cartItems.findIndex( (item) => item._id.toString() === req.params.itemId);

  if(itemIndex > -1) {
    const cartItem = cart.cartItems[itemIndex];
    cartItem.quantity = quantity;
    cart.cartItems[itemIndex] = cartItem;
  }else {
    return next(new ApiError(`There is no item for this id : ${req.params.itemId}`,404))
  }
  
  CalcTotalCartPrice(cart);

  await cart.save();

  res.status(200).json({ status:'sucess', numOfCartItems: cart.cartItems.length, message:"The Item's Quantity has been updated", data: cart})
});

// @desc Remove a specific Cart
// @route DELETE /api/v1/cart/:id
// @access Private/User
exports.RemoveSpecificCartItem = AsyncHandler(async (req, res, next) => {
  const cart = await CartModel.findOneAndUpdate(
    { user: req.user._id },
     {
      $pull: { cartItems: { _id: req.params.itemId}},
     },
     {new: true}
     );

     CalcTotalCartPrice(cart);
     cart.save();

     res.status(200).json({
      status: 'success',
      numOfCartItems: cart.cartItems.length,
      data: cart
     })
})

// @desc Clear user Cart
// @route DELETE /api/v1/cart/:id
// @access Private/User
exports.ClearCart = AsyncHandler(async (req, res, next) => {
   await CartModel.findOneAndDelete(
    { user: req.user._id });
     res.status(204).send();
     });


// @desc Apply coupon on logged  user Cart
// @route Put /api/v1/cart/applyCoupon
// @access Private/User
exports.ApplyCoupon = AsyncHandler(async (req, res, next) => {
    //1- Get coupon based on coupon name
    const coupon = await CouponModel.findOne({ name: req.body.coupon, expire:{ $gt: Date.now()} })

    if(!coupon){
      return next(new ApiError(`Coupon is invalid or expired`));
    }

    //2- Get logged user cart to get total cart price
    const  cart = await CartModel.findOne({user : req.user._id});

    const totalPrice = cart.totalCartPrice

    const totalPriceAfterDiscount = ( totalPrice - (totalPrice * coupon.discount ) / 100 ) // 99.25

    cart.totalPriceAfterDiscount = totalPriceAfterDiscount;
    await cart.save();

    res.status(200).json({
      status: 'success',
      message:'Coupon has been applied!',
      data: cart
    })

    });



