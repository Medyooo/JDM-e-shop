import { Col, Row, Spinner } from 'react-bootstrap'
import addCategoryHook from '../../customHook/category/AddCategoryHook'

const AdminAddCategory = () => {
  const [img, name, loading, isPress, handleSubmit, onImageChange,onChangeName] = addCategoryHook()
  return (
    <div>
      <Row className='justify-content-start mt-3 '>
        <div className='admin-content-text pb-4'>Ajouter une nouvelle catégorie</div>
        <Col sm='8'>
          <div className='text-form pb-2'>L'image de la catégorie</div>

          <div>
            <label for='upload-photo'>
              <img src={img} alt='addpic' height='100px' width='120px' style={{ cursor: 'pointer' }} />

            </label>
            <input type='file' name='photo' onChange={onImageChange} id='upload-photo' />
          </div>
          <input
            type='text'
            className='input-form d-block mt-3 px-3'
            placeholder='Nom de la catégorie'
            onChange={onChangeName}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm='8' className='d-flex justify-content-end '>
          <button className='btn-a d-inline mt-2 pe-5 ps-5 ' style={{ fontSize: '20px' }} onClick={handleSubmit}>Ajouter</button>
        </Col>
      </Row>
      {
        isPress
          ? loading
            ? <Spinner animation='border' variant='warning' />
            : <h4>Enregistrement effectué</h4>
          : null

      }
    </div>
  )
}

export default AdminAddCategory
