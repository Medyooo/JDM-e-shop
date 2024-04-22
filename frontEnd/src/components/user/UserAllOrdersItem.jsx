import { Col, Row } from 'react-bootstrap'

import UserAllOrdersCard from './UserAllOrdersCard'

const UserAllordersItem = () => {
  return (
    <div
      className='mb-3' style={{
        boxShadow: '0 1px 2px 0 rgba(151, 151, 151, 0.5)',
        borderRadius: '8px',
        border: 'none'
      }}
    >
      <Row>
        <div className='py-2 order-title'>Commande N° 145</div>
      </Row>
      <UserAllOrdersCard />
      <UserAllOrdersCard />
      <Row className='d-flex justify-content-between'>
        <Col xs='6' className=''>
          <div>
            <div className='d-inline'>État : </div>
            <div className='d-inline mx-2 stat'>En livraison</div>
          </div>
        </Col>
        <Col xs='6' className='d-flex justify-content-end'>
          <div>
            <div className='barnd-text'>95.50 EUR</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAllordersItem
