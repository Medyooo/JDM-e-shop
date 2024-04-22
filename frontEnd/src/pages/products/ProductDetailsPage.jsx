import { Container } from 'react-bootstrap'

import CategoryHeader from '../../components/category/CategoryHeader'
import ProductDetails from '../../components/products/ProductDetails'
import RateContainer from '../../components/rate/RateContainer'
import CardProductsContainer from '../../components/products/CardProductsContainer'

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title='Inspiré de votre historique de navigation' />
      </Container>
    </div>
  )
}

export default ProductDetailsPage
