import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCategory, GetAllCategoryPage } from '../../redux/actions/CategoryAction'

const AllCategoryPageHook = () => {
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
  }
  return [category, loading, pageCount, getPage]
}

export default AllCategoryPageHook
