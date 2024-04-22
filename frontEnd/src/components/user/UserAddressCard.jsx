import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import deleteicon from '../../assets/images/delete.png'

const UserAddressCard = () => {
  return (
    <div className='user-address-card my-3 px-2'>
      <Row className='d-flex justify-content-between  '>
        <Col xs='1'>
          <div className='admin-content-text py-2 pt-3' style={{ color: '#4a2200', fontSize: '20px' }}>Domicile</div>
        </Col>
        <Col xs='4' className='d-flex d-flex justify-content-end'>
          <div className='d-flex p-2'>
            <div className='d-flex mx-2'>
              <img
                alt=''
                className='ms-1 mt-2'
                src={deleteicon}
                height='17px'
                width='15px'
              />
              <Link to='/user/edit-address' style={{ textDecoration: 'none' }}>
                <p className='item-delete-edit'>Modifier</p>
              </Link>
            </div>
            <div className='d-flex '>
              <img
                alt=''
                className='ms-1 mt-2'
                src={deleteicon}
                height='17px'
                width='15px'
              />
              <p className='item-delete-edit'>Supprimer</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs='12'>
          <div
            style={{
              color: 'black',
              fontFamily: 'Lato',
              fontSize: '16px'
            }} className='mx-2'
          >
            1 Rue Dr pouzin malegue, 44100 Nantes
          </div>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col xs='12' className='d-flex'>
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px'
            }} className='mx-2'
          >
            Numéro de téléphone :
          </div>

          <div
            style={{
              color: 'black',
              fontFamily: 'Lato',
              fontSize: '16px'
            }}
            className='mx-2'
          >
            +33 6 28 91 04 58
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAddressCard
