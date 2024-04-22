import { Col, Container, Row } from 'react-bootstrap'

import UserSideBar from '../../components/user/UserSideBar'
import UserProfile from '../../components/user/UserProfile'

const UserProfilePage = () => {
  return (
    <Container>
      <Row className='py-3 mt-5 mb-5'>
        <Col sm='3' xs='2' md='2'>
          <UserSideBar />
        </Col>

        <Col
          sm='9' xs='10' md='10'
        >
          <UserProfile />
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfilePage
