import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import avatar from '../../assets/images/avatar.png'
import { CreateCategory } from '../../redux/actions/CategoryAction'
import notify from '../UseNotify'

const AddCategoryHook = () => {
  const dispatch = useDispatch()
  const [img, setImg] = useState(avatar)
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(null)
  const [isPress, SetIsPress] = useState(null)

  // to change name state
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0])
    }
  }

  const res = useSelector(state => state.allCategory.category)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (name === '' || selectedFile === null) {
      notify('Veuillez remplir tous les champs requis et sélectionner une photo.', 'warn')
    }
    const formData = new FormData()
    formData.append('name', name)
    formData.append('image', selectedFile)

    setLoading(true)
    SetIsPress(true)
    await dispatch(CreateCategory(formData))
    setLoading(false)
  }

  useEffect(() => {
    if (!loading) {
      setImg(avatar)
      setSelectedFile(null)
      setName('')
      setLoading(true)
      setTimeout(() => SetIsPress(false), 1000)

      if (res.status === 201) {
        notify('Opération réussie ! Vos données ont été enregistrées avec succès.', 'success')
      } else {
        notify("Erreur lors de l'enregistrement des données. Veuillez réessayer.", 'error')
      }
    }
  }, [loading])

  return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName]
}

export default AddCategoryHook
