import { Col, Container, Row } from 'react-bootstrap'

import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminAllOrders from '../../components/admin/AdminAllOrders'
import Pagination from '../../components/utility/Pagination'

const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className='py-3 mt-5 mb-5'>
        <Col sm='3' xs='3' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='9' md='10'>
          <AdminAllOrders />
          <Pagination />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAllOrdersPage
