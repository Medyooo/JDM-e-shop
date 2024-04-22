import { Col, Row } from 'react-bootstrap'

const UserAddAddress = () => {
  return (
    <div>
      <Row className='justify-content-start '>
        <div
          className='admin-content-text pb-4 mt-4' style={{
            fontFamily: "'Poppins', sans-serif",
            fontFamily: "'Satisfy', cursive",
            fontSize: '42px'
          }}
        >Ajouter un nouvelle adresse
        </div>
        <Col sm='8'>
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder="Nom de l'adresse exemple (Domicile - Travail )"
          />
          <textarea
            className='input-form-area p-2 mt-3'
            rows='4'
            cols='50'
            placeholder='Adresse compléte'
          />
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='Numéro de téléphone'
          />
        </Col>
      </Row>
      <Row>
        <Col sm='8' className='d-flex justify-content-end '>
          <button className='product-cart-add d-inline mt-2 pe-4 ps-4' style={{ fontSize: '22px' }}>Ajouter</button>
        </Col>
      </Row>
    </div>
  )
}

export default UserAddAddress
