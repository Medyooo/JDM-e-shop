import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import avatar from '../../assets/images/avatar.png'
import { useState } from 'react'
import { CreateCategory } from '../../redux/actions/CategoryAction'

const AdminAddCategory = () => {
  const dispatch = useDispatch()
  const [img, setImg] = useState(avatar)
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('image', selectedFile)

    dispatch(CreateCategory(formData))
  }

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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm='8' className='d-flex justify-content-end '>
          <button className='btn-a d-inline mt-2 pe-5 ps-5 ' style={{ fontSize: '20px' }} onClick={handleSubmit}>Ajouter</button>
        </Col>
      </Row>
    </div>
  )
}

export default AdminAddCategory
