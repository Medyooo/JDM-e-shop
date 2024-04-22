import { Col, Row } from 'react-bootstrap'

import rate from '../../assets/images/rate.png'

const RateItem = () => {
  return (
    <div>
      <Row className='mt-3'>
        <Col className='d-felx me-5'>
          <div className='rate-name  d-inline ms-2'>Mohamed Larbi</div>
          <img className='mx-2' src={rate} alt='' height='16px' width='16px' />
          <div className='cat-rate  d-inline  '>4.3</div>
        </Col>
      </Row>
      <Row className='border-bottom mx-2'>
        <Col className='d-felx me-4 pb-2'>
          <div className='rate-description  d-inline ms-2'>
            Produit top ! Produit top ! Produit top !
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RateItem
