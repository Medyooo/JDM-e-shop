import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../assets/images/prod1.png'
import rate from '../../assets/images/rate.png'

const AdminAllProductsCard = () => {
  return (
    <Col xs='12' sm='6' md='5' lg='4' className='d-flex'>
      <Card
        className='my-2'
        style={{
          width: '100%',
          height: '350px',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Link to='/products/:id' style={{ textDecoration: 'none' }}>
          <Row className='d-flex justify-content-center px-2'>
            <Col className=' d-flex justify-content-between'>
              <div className='d-inline item-delete-edit'>Supprimer</div>
              <div className='d-inline item-delete-edit'>Modifier</div>
            </Col>
          </Row>

          <Card.Img style={{ height: '228px', width: '100%' }} src={prod1} />

          <Card.Body>
            <Card.Title>
              <div className='card-title' style={{ color: 'black' }}>
                Title Title Title Title Title
              </div>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-between'>
                <div className=' mt-1 card-rate'><img
                  className='my-1'
                  src={rate}
                  alt='rate'
                  height='16px'
                  width='16px'
                                                 /><p className='d-inline mx-1   '>4.5</p>
                </div>
                <div className='d-flex'>
                  <div className='card-price mx-1 '>28,99</div>
                  <div className='card-currency my-1'>€</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  )
}

export default AdminAllProductsCard
