import { Col, Row } from 'react-bootstrap'

const PaymentMethod = () => {
  return (
    <div className='d-flex flex-column pt-5 ms-5'>
      <div className='  cart-title pt-5'>Choisissez votre méthode de paiement</div>
      <div className='user-address-card my-5 px-3'>
        <Row className='d-flex justify-content-between '>
          <Col xs='12' className='my-4'>
            <input
              name='group'
              id='group1'
              type='radio'
              value='الدفع عن طريق الفيزا'
              className='mt-2'
            />
            <label className='mx-2' for='group1'>
              Paiement avec la carte bancaire
            </label>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col xs='12' className='d-flex'>
            <input
              name='group'
              id='group1'
              type='radio'
              value='الدفع عند الاستلام'
              className='mt-2'
            />
            <label className='mx-2' for='group1'>
              Paiement en retrait
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs='12' className='d-flex justify-content-between'>
          <button className='product-price d-inline   border'>58,97 EUR</button>
          <button className='product-cart-add px-3 pt-2 d-inline me-2'>Valider votre achat</button>
        </Col>
      </Row>
    </div>
  )
}

export default PaymentMethod
