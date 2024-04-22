import { Col, Container, Row } from 'react-bootstrap'

import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminOrderDetails from '../../components/admin/AdminOrderDetails'

const AdminOrderDetailsPage = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm='3' xs='3' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='9' md='10'>
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminOrderDetailsPage
