import { Col, Row } from 'react-bootstrap'

import prod1 from '../../assets/images/prod1.png'

const UserAllOrdersCard = () => {
  return (
    <div>
      <Row className='d-flex mb-2 '>
        <Col xs='3' md='2' className='d-flex justify-content-start'>
          <img width='93px' height='120px' src={prod1} alt='' />
        </Col>
        <Col className='my-3' xs='8' md='6'>
          <div className='d-inline pt-2 me-2 cat-title'>
            Title Title Title Title
          </div>
          <div className='d-inline pt-2 cat-rate me-2'>4.5</div>
          <div className='rate-count d-inline p-1 pt-2'>(160 Avis)</div>
          <div className='mt-3'>
            <div className='cat-text  d-inline'>Quantitée</div>
            <input
              className='mx-2 '
              type='number'
              style={{ width: '40px', height: '25px' }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAllOrdersCard
