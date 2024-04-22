import { Col, Row } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown'

import avatar from '../../assets/images/avatar.png'

const AdminAddProduct = () => {
  const OnSelect = () => {

  }
  const OnRemove = () => {

  }

  const options = [
    { name: 'catégorie 1', id: 1 },
    { name: 'catégorie 2', id: 2 }
  ]
  return (
    <div>
      <Row className='justify-content-start mt-3 '>
        <div className='admin-content-text pb-4'>Ajouter un nouveau produit</div>
        <Col sm='8'>
          <div className='text-form pb-2'>Photos de produit</div>
          <img src={avatar} alt='' height='100px' width='120px' />
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='Nom de produit'
          />
          <textarea
            className='input-form-area p-2 mt-3'
            rows='4'
            cols='50'
            placeholder='Description du produit'
          />
          <input
            type='number'
            className='input-form d-block mt-3 px-3'
            placeholder='Prix sans coupon'
          />
          <input
            type='number'
            className='input-form d-block mt-3 px-3'
            placeholder='Prix'
          />
          <select
            name='languages'
            id='lang'
            className='select input-form-area mt-3 px-2 '
          >
            <option value='val'>Catégorie 1</option>
            <option value='val2'>Catégorie 2</option>
            <option value='val2'>Catégorie 3</option>
            <option value='val2'>Catégorie 4</option>
          </select>

          <Multiselect
            className='mt-2 '
            placeholder='sous-catégorie'
            options={options}
            onSelect={OnSelect}
            onRemove={OnRemove}
            displayValue='name'
            style={{ backgroundColor: 'orange' }}
          />
          <select
            name='brand'
            id='brand'
            className='select input-form-area mt-3 px-2 '
          >
            <option value='val'>Marque</option>
            <option value='val2'>Marque 1</option>
            <option value='val2'>Marque 2</option>
            <option value='val2'>Marque 3</option>
          </select>

        </Col>
      </Row>
      <Row>
        <Col sm='8' className='d-flex justify-content-end '>
          <button className='btn-a d-inline mt-2 mb-4 pe-5 ps-5' style={{ fontSize: '20px' }}>Ajouter</button>
        </Col>
      </Row>
    </div>
  )
}

export default AdminAddProduct
