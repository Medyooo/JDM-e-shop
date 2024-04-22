import { Col, Row } from 'react-bootstrap'

import avatar from '../../assets/images/avatar.png'

const AdminAddBrand = () => {
  return (
    <div>
      <Row className='justify-content-start mt-3 '>
        <div className='admin-content-text pb-4'>Ajouter une nouvelle marque</div>
        <Col sm='8'>
          <div className='text-form pb-2'>Logo de la marque</div>
          <img src={avatar} alt='' height='100px' width='120px' />
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='Nom de la marque'
          />
        </Col>
      </Row>
      <Row>
        <Col sm='8' className='d-flex justify-content-end '>
          <button className='btn-a d-inline mt-2 pe-5 ps-5' style={{ fontSize: '20px' }}>Ajouter</button>
        </Col>
      </Row>
    </div>
  )
}

export default AdminAddBrand
