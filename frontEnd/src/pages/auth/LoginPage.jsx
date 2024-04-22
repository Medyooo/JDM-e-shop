import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (

    <Container style={{ minHeight: '680px' }}>
      <Row className='py-5 my-5 d-flex justify-content-center '>
        <Col sm='12' className='d-flex flex-column '>
          <label className='mx-auto title-login'>S'identifier</label>
          <input
            placeholder='Adresse e-mail...'
            type='text'
            className='user-input my-3 text-center mx-auto'
          />
          <input
            placeholder=' Mot de passe...'
            type='password'
            className='user-input text-center mx-auto'
          />
          <button className='btn-login mx-auto mt-4'>S'identifier</button>
          <label className='mx-auto my-4'>
            Nouveau chez Les Jardins Du Maroc ?{' '}
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer', color: '#4a2200', fontWeight: 'bold' }}>
                Créer votre compte
              </span>
            </Link>
          </label>
        </Col>

        <label className='mx-auto my-4'>
          <Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer', color: '#4a2200', fontWeight: 'bold' }}>
              Admin vision
            </span>
          </Link>

          <Link to='/user/allorders' style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer', color: '#4a2200', fontWeight: 'bold' }} className='mx-3'>
              User vision
            </span>
          </Link>
        </label>
      </Row>
    </Container>

  )
}

export default LoginPage
