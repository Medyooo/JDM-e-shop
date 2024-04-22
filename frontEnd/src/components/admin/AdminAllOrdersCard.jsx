import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import deleteicon from '../../assets/images/delete.png'

const AdminAllOrdersCard = () => {
  return (
    <Col sm='12'>
      <Link
        to='/admin/orders/55'
        className='cart-item-body my-2 d-flex pt-3'
        style={{ textDecoration: 'none' }}
      >

        <div className='w-100 mx-3'>
          <Row className='justify-content-between '>
            <Col sm='12' className=' d-flex flex-row justify-content-between'>
              <div className='d-inline pt-2 cat-text' style={{ color: '#4a2200', fontFamily: 'Almarai' }}>Commande N ° 55</div>
              <div className='d-flex pt-2 ' style={{ cursor: 'pointer' }}>
                <img src={deleteicon} alt='' width='20px' height='24px' />
                <div className=' cat-text d-inline mx-2 ' style={{ fontSize: '18px', fontFamily: 'Almarai' }}>Supprimer</div>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center mt-2'>
            <Col sm='12' className=' d-flex flex-row justify-content-start'>
              <div className='  cat-title'>
                status :

              </div>
              <div className='px-2 ' style={{ color: 'orange', fontWeight: 'bold', fontSize: '18px' }}>en cours</div>
            </Col>
          </Row>
          <Row>
            <Col sm='12' className='mt-3'>
              <div className='cat-text d-inline' style={{ color: '#4a2200', fontFamily: 'Almarai' }}>Nom de client :</div>
              <div className='barnd-text d-inline mx-1'>Hervé Renard </div>
            </Col>
          </Row>
          <Row>
            <Col sm='12' className='mt-2 d-flex' />
          </Row>

          <Row className='justify-content-between mt-2'>
            <Col sm='12' className=' d-flex flex-row justify-content-between'>
              <div className='d-inline pt-2 d-flex'>
                <div className='cat-text  d-inline' style={{ color: '#4a2200', fontFamily: 'Almarai' }}>Quantitée</div>
                <input
                  className='mx-2 '
                  type='number'
                  defaultValue={2}
                  style={{ width: '40px', height: '25px' }}
                />
              </div>
              <div className='d-inline pt-2 barnd-text'>78.99 EUR</div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  )
}

export default AdminAllOrdersCard
