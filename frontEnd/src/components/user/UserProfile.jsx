import { Col, Row } from 'react-bootstrap'

import deleteicon from '../../assets/images/delete.png'

const UserProfile = () => {
  return (
    <div>
      <div
        className='admin-content-text pb-4 mt-4' style={{
          fontFamily: "'Poppins', sans-serif",
          fontFamily: "'Satisfy', cursive",
          fontSize: '42px'
        }}
      >Mon Profil
      </div>
      <div className='user-address-card my-3 px-2'>
        <Row className='d-flex justify-content-between pt-2 '>
          <Col xs='6' className='d-flex'>
            <div className='p-2'>Nom et Prénom :</div>
            <div className='p-1 item-delete-edit'>Dupont Hugo</div>
          </Col>
          <Col xs='6' className='d-flex justify-content-end'>
            <div className='d-flex mx-2'>
              <img
                alt=''
                className='ms-1 mt-2'
                src={deleteicon}
                height='17px'
                width='15px'
              />
              <p className='item-delete-edit'>Modifier</p>
            </div>
          </Col>
        </Row>

        <Row className=''>
          <Col xs='12' className='d-flex'>
            <div className='p-2'>Numéro de téléphone</div>
            <div className='p-1 item-delete-edit'>+33 6 28 91 04 58</div>
          </Col>
        </Row>
        <Row className=''>
          <Col xs='12' className='d-flex'>
            <div className='p-2'>Adresse mail :</div>
            <div className='p-1 item-delete-edit'>hugo@gmail.com</div>
          </Col>
        </Row>
        <Row className='mt-5 '>
          <Col xs='10' sm='8' md='6' className='mt-4'>
            <div
              className='admin-content-text pb-4 mt-4' style={{
                fontFamily: "'Poppins', sans-serif",
                fontFamily: "'Satisfy', cursive",
                fontSize: '42px'
              }}
            >Modifier votre mot de passe
            </div>
            <input
              type='password'
              className='input-form d-block mt-1 px-3'
              placeholder='Insérez votre ancien mot de passe'
            />
            <input
              type='password'
              className='input-form d-block mt-3 px-3'
              placeholder='Insérez votre nouveau mot de passe'
            />
          </Col>
        </Row>

        <Row>
          <Col xs='10' sm='8' md='6' className='d-flex justify-content-end '>
            <button className='btn-a d-inline mt-2 '>Sauvegarder</button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile
