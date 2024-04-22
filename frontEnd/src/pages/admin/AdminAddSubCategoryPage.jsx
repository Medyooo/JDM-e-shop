import { Col, Container, Row } from 'react-bootstrap'

import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminAddSubCategory from '../../components/admin/AdminAddSubCategory'

const AdminAddSubCategoryPage = () => {
  return (

    <Container>
      <Row className='py-3 mt-5 mb-5'>
        <Col sm='3' xs='2' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='10' md='10'>
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>

  )
}

export default AdminAddSubCategoryPage
