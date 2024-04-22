import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import UserAddressCard from './UserAddressCard'

const UserAllAddresses = () => {
  return (
    <div>
      <div
        className='admin-content-text pb-5 mt-4' style={{
          fontFamily: "'Poppins', sans-serif",
          fontFamily: "'Satisfy', cursive",
          fontSize: '42px'
        }}
      >Mes Adresses
      </div>

      <UserAddressCard />
      <UserAddressCard />

      <Row className='justify-content-center'>
        <Col sm='5' className='d-flex justify-content-center'>
          <Link to='/user/add-address' style={{ textDecoration: 'none' }}>
            <button className='product-cart-add pe-4 ps-4' style={{ fontSize: '22px' }}>Ajouter une address</button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default UserAllAddresses
