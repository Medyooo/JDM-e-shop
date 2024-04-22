import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
    <Row className='my-1 d-flex justify-content-center cart-checkout pt-3 mb-5'>
      <Col xs='12' className='d-flex  flex-column  '>
        <div className='d-flex  '>
          <input
            className='copon-input d-inline text-center '
            placeholder='Code Promo'
          />
          <button className='copon-btn d-inline '>Appliquer</button>
        </div>
        <div className='product-price d-inline w-100 my-3  border'> 57.98 EUR</div>
        <Link
          to='/order/paymentmethod'
          style={{ textDecoration: 'none' }}
          className='product-cart-add  d-inline '
        >
          <button className='product-cart-add w-100 px-2' style={{ height: '65px' }}>Passer la commande</button>
        </Link>
      </Col>
    </Row>
  )
}

export default CartCheckout
