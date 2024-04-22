import { Col, Row } from 'react-bootstrap'

const AdminAddSubCategory = () => {
  return (
    <div>
      <Row className='justify-content-start mt-3'>
        <div className='admin-content-text pb-4'>Ajouter une nouvelle sous-catégorie</div>
        <Col sm='8'>
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='Nom de la sous-catégorie'
          />
          <select name='languages' id='lang' className='select mt-3 px-2 '>
            <option value='val'>Catégorie 1</option>
            <option value='val2'>Catégorie 2</option>
            <option value='val2'>Catégorie 3</option>
            <option value='val2'>Catégorie 4</option>
          </select>
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

export default AdminAddSubCategory
