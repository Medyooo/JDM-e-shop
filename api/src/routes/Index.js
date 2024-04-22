const CategoryRoute = require("./CategoryRoute");
const SubCategoryRoute = require("./SubCategoryRoute");
const BrandRoute = require("./BrandRoute");
const ProductRoute = require("./ProductRoutes");
const UserRoute = require("./UserRoute");
const AuthRoute = require("./AuthRoute");
const ReviewRoute = require("./ReviewRoute");
const WishlistRoute = require("./WishlistRoute");
const AddressRoute = require("./AddressRoute");
const CouponRoute = require("./CouponRoute");
const CartRoute = require("./CartRoute");
const OrderRoute = require("./OrderRoute");


const MountRoutes = (App) => {
App.use("/api/v1/categories", CategoryRoute);
App.use("/api/v1/subcategories", SubCategoryRoute);
App.use("/api/v1/brands", BrandRoute);
App.use("/api/v1/products", ProductRoute);
App.use("/api/v1/users", UserRoute);
App.use("/api/v1/auth", AuthRoute);
App.use("/api/v1/reviews", ReviewRoute);
App.use("/api/v1/wishlist", WishlistRoute);
App.use("/api/v1/addresses", AddressRoute);
App.use("/api/v1/coupons", CouponRoute);
App.use("/api/v1/cart", CartRoute);
App.use("/api/v1/orders", OrderRoute);



}

module.exports = MountRoutes;