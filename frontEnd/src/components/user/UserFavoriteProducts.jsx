import { Row } from 'react-bootstrap'
import ProductCard from '../products/ProductCard'
import Pagination from '../utility/Pagination'

const UserFavoriteProducts = () => {
  return (
    <div>
      <div
        className='admin-content-text pb-4 mt-' style={{
          fontFamily: "'Poppins', sans-serif",
          fontFamily: "'Satisfy', cursive",
          fontSize: '42px'
        }}
      >Mes Favoris
      </div>
      <Row className='justify-content-start'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  )
}

export default UserFavoriteProducts
