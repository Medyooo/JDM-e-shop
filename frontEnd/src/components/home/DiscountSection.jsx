import { Col, Container, Row } from 'react-bootstrap'

import prod2 from '../../assets/images/prod2.png'

const DiscountSection = () => {
  return (
    <Container>
      <Row className='discount-backcolor my-3  mx-2 d-flex text-center align-items-center'>
        <Col sm='6'>
          <div className='discount-title'>
            Reduction de 25% sur tous les produits
          </div>
        </Col>
        <Col sm='6'>
          <img className='dicount-img' src={prod2} alt='prod2' />
        </Col>
      </Row>
    </Container>
  )
}

export default DiscountSection
