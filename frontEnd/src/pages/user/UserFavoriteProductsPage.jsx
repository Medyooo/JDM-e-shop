import { Col, Container, Row } from 'react-bootstrap'

import UserSideBar from '../../components/user/UserSideBar'
import UserFavoriteProducts from '../../components/user/UserFavoriteProducts'

const UserFavoriteProductsPage = () => {
  return (
    <Container>
      <Row className='py-3 mt-5'>
        <Col sm='3' xs='2' md='2'>
          <UserSideBar />
        </Col>

        <Col
          sm='9' xs='10' md='10'
        >
          <UserFavoriteProducts />
        </Col>
      </Row>
    </Container>
  )
}

export default UserFavoriteProductsPage
