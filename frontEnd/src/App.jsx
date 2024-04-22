import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/utility/Footer'
import NavBarLogin from './components/utility/NavBarLogin'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import AllCategoryPage from './pages/category/AllCategoryPage'
import AllBrandPage from './pages/brand/AllBrandPage'
import ShopProductsPage from './pages/products/ShopProductsPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import CartPage from './pages/cart/CartPage'
import PaymentMethodPage from './pages/checkout/PaymentMethodPage'
import AdminAllProductsPage from './pages/admin/AdminAllProductsPage'
import AdminAllOrdersPage from './pages/admin/AdminAllOrdersPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminAddBrandPage from './pages/admin/AdminAddBrandPage'
import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './pages/admin/AdminAddSubCategoryPage'
import AdminAddProductPage from './pages/admin/AdminAddProductPage'
import UserAllOrdersPage from './pages/user/UserAllOrdersPage'
import UserFavoriteProductsPage from './pages/user/UserFavoriteProductsPage'
import UserAllAddressesPage from './pages/user/UserAllAddressesPage'
import UserAddAddressPage from './pages/user/UserAddAddressPage'
import UserEditAddressPage from './pages/user/UserEditAddressPage'
import UserProfilePage from './pages/user/UserProfilePage'

function App () {
  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/allcategory' element={<AllCategoryPage />} />
          <Route path='/allbrand' element={<AllBrandPage />} />
          <Route path='/products' element={<ShopProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order/paymentmethod' element={<PaymentMethodPage />} />
          <Route path='/admin/allproducts' element={<AdminAllProductsPage />} />
          <Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
          <Route path='/admin/orders/:id' element={<AdminOrderDetailsPage />} />
          <Route path='/admin/addbrand' element={<AdminAddBrandPage />} />
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage />} />
          <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='/admin/addproduct' element={<AdminAddProductPage />} />
          <Route path='/user/allorders' element={<UserAllOrdersPage />} />
          <Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage />} />
          <Route path='/user/addresses' element={<UserAllAddressesPage />} />
          <Route path='/user/add-address' element={<UserAddAddressPage />} />
          <Route path='/user/edit-address' element={<UserEditAddressPage />} />
          <Route path='/user/profil' element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
