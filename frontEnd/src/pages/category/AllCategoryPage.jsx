import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoryContainer from '../../components/category/CategoryContainer'
import Pagination from '../../components/utility/Pagination'
import { GetAllCategory, GetAllCategoryPage } from '../../redux/actions/CategoryAction'

const AllCategoryPage = () => {
  const dispatch = useDispatch()
  // when first load
  useEffect(() => {
    dispatch(GetAllCategory(6))
  }, [])
  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)

  // to get page count
  let pageCount = 0
  if (category.paginationResult) { pageCount = category.paginationResult.numberOfPages }

  // when press pagination
  const getPage = (page) => {
    dispatch(GetAllCategoryPage(page))
    console.log(page)
  }
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
      }

    </div>
  )
}

export default AllCategoryPage
