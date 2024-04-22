import { Col, Container, Row } from 'react-bootstrap'

const RegisterPage = () => {
  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className='py-5 d-flex justify-content-center hieght-search'>
        <Col sm='12' className='d-flex flex-column '>
          <label className='mx-auto title-login'> Créer un compte</label>
          <input
            placeholder=' Votre nom...'
            type='text'
            className='user-input mt-3 text-center mx-auto'
          />
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
          <button className='btn-login mx-auto mt-4'>Créer un compte</button>
          <label className='mx-auto my-4'>
            Vous possédez déjà un compte ?{' '}

            <span style={{ cursor: 'pointer', color: '#4a2200', fontWeight: 'bold' }}>
              Identifiez-vous
            </span>

          </label>
        </Col>
      </Row>
    </Container>
  )
}
export default RegisterPage
