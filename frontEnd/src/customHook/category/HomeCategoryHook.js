import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCategory } from '../../redux/actions/CategoryAction'

const HomeCategoryHook = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCategory())
  }, [])
  // get last category state from redux
  const category = useSelector(state => state.allCategory.category)
  // get last loading state from redux
  const loading = useSelector(state => state.allCategory.loading)

  return [category, loading]
}

export default HomeCategoryHook
