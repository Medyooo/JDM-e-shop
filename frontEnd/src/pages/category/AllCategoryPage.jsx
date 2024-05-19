import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoryContainer from '../../components/category/CategoryContainer'
import Pagination from '../../components/utility/Pagination'
import { GetAllCategory } from '../../redux/actions/CategoryAction'

const AllCategoryPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCategory(6))
  }, [])

  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)

  let pageCount = 0
  if (category.paginationResult) { pageCount = category.paginationResult.numberOfPages }
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={category.data} loading={loading} />
      <Pagination pageCount={pageCount} />
    </div>
  )
}

export default AllCategoryPage
