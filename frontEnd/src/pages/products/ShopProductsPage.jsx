import { Col, Container, Row } from 'react-bootstrap'

import CategoryHeader from '../../components/category/CategoryHeader'
import SearchCountResult from '../../components/utility/SearchCountResult'
import SideFilter from '../../components/utility/SideFilter'
import CardProductsContainer from '../../components/products/CardProductsContainer'
import Pagination from '../../components/utility/Pagination'

const ShopProductsPage = () => {
  return (

    <div style={{ minHeight: '680px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title='50 Produits Disponible' />
        <Row className='filter-row d-flex flex-row'>
          <Col sm='2' xs='2' md='2' className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm='10' xs='10' md='10'>
            <CardProductsContainer title='' btntitle='' />
            <CardProductsContainer title='' btntitle='' />
            <CardProductsContainer title='' btntitle='' />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}

export default ShopProductsPage
