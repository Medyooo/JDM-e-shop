const express = require("express");

const AuthService = require("../services/AuthService");
const { createCashOrder, filterOrderForLoggedUser, GetAllOrders, GetOrder, UpdateOrderToPaid, UpdateOrderToDelivered, UpdateOrderToCancel } = require("../services/OrderService");

const router = express.Router();

router.use(AuthService.Protect)

router.route("/:cartId").post(createCashOrder,AuthService.AllowedTo('user'));
router.get('/',AuthService.AllowedTo('user','admin'), filterOrderForLoggedUser , GetAllOrders)

router.get('/:id', GetOrder)
router.put('/:id/pay',AuthService.AllowedTo('admin'),UpdateOrderToPaid)
router.put('/:id/deliver',AuthService.AllowedTo('admin'),UpdateOrderToDelivered)
router.put('/:id/cancel',AuthService.AllowedTo('admin'),UpdateOrderToCancel)




module.exports = router;
