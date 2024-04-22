import { Col, Container, Row } from 'react-bootstrap'

import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminAllProducts from '../../components/admin/AdminAllProducts'
import Pagination from '../../components/utility/Pagination'

const AdminAllProductsPage = () => {
  return (
    <Container>
      <Row className='py-3 mt-5 mb-5'>
        <Col sm='3' xs='3' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='9' md='10'>
          <AdminAllProducts />
          <Pagination />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAllProductsPage
