import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoryContainer from '../../components/category/CategoryContainer'
import Pagination from '../../components/utility/Pagination'
import { GetAllCategory } from '../../redux/actions/CategoryAction'

const AllCategoryPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCategory())
  }, [])

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}

export default AllCategoryPage
