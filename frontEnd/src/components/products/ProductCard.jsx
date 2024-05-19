import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import favoff from '../../assets/images/fav-off.png'
import rate from '../../assets/images/rate.png'

const ProductCard = ({ prodImg, price, prodName, prodRate }) => {
  return (
    <Col xs='6' sm='6' md='4' lg='3'>

      <Card
        className='my-2'
        style={{
          width: '100%',
          height: '385px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)'
        }}
      >
        <Link to='/products/:id' style={{ textDecoration: 'none' }}>
          <Card.Img style={{ height: '228px', width: '100%' }} src={prodImg} />

          <div className='d-flex justify-content-end  mx-2'>
            <img
              src={favoff}
              alt='favicon'
              style={{
                height: '24px',
                width: '26px'
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className='card-title px-2 '>
                {prodName}
              </div>

            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-between '>

                <div className='d-flex'>
                  <div className='card-price'>{price}</div>
                  <div className='card-currency mx-1 '>€</div>
                </div>
                <div className='d-flex my-1 '>
                  <img
                    src={rate}
                    alt='rate'
                    height='16px'
                    width='16px'
                  />
                  <div className='card-rate mx-2'>{prodRate}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  )
}

export default ProductCard
