import CartItem from '../cart/CartItem'
import { Col, Row } from 'react-bootstrap'

const AdminOrderDetails = () => {
  return (
    <div>
      <div className='admin-content-text mt-3 mb-4'>Détails de la commande N° 55</div>
      <CartItem />
      <CartItem />

      <Row className='justify-content-center mt-4 mb-5 user-data'>
        <Col xs='12' className=' d-flex'>
          <div className='admin-content-text py-2 pt-3' style={{ color: '#4a2200' }}>Informations sur le client</div>
        </Col>
        <Col xs='12' className='d-flex'>
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px'
            }}
          >
            Nom et Prénom :
          </div>

          <div
            style={{
              color: 'black',
              fontFamily: 'Lato',
              fontSize: '16px'
            }}
            className='mx-2'
          >
            Hervé Renard
          </div>
        </Col>

        <Col xs='12' className='d-flex'>
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px'
            }}
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
        <Col xs='12' className='d-flex'>
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px'
            }}
          >
            E-mail :
          </div>

          <div
            style={{
              color: 'black',
              fontFamily: 'Lato',
              fontSize: '16px'
            }}
            className='mx-2'
          >
            ahmed@gmail.com
          </div>
        </Col>
        <div className=' d-inline px-4 text-center pt-2' style={{ borderTop: '2px dashed #E06B01 ', borderBottom: '2px dashed #E06B01 ', fontWeight: 'bold' }}>
          Total 59.98 EUR
        </div>
        <div className='d-flex mt-2 justify-content-center'>
          <select
            name='languages'
            id='lang'
            className='select input-form-area mt-1  text-center px-2 w-50'
          >
            <option value='val'> Statut de la commande </option>
            <option value='val2'>En cours</option>
            <option value='val2'>Livrée</option>
            <option value='val2'>Annulée</option>
          </select>
          <button className='btn-a px-3 d-inline mx-2 '>Sauvegarder</button>
        </div>
      </Row>
    </div>
  )
}

export default AdminOrderDetails
