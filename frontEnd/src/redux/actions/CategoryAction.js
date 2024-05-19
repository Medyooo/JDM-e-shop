import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from '../Type'

import useGetData from '../../hooks/UseGetData'
import { useInsertDataWithImage } from '../../hooks/UseInsertData'

// Get all categories
export const GetAllCategory = (limit) => async (dispatch) => {
  try {
    // const res = await BaseUrl.get('/api/v1/categories')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useGetData(`/api/v1/categories?limit=${limit}`)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error' + e
    })
  }
}

// Get all categories with pagination
export const GetAllCategoryPage = (page) => async (dispatch) => {
  try {
    // const res = await BaseUrl.get('/api/v1/categories')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error' + e
    })
  }
}

// Create a category
export const CreateCategory = (formData) => async (dispatch) => {
  try {
    // const res = await BaseUrl.get('/api/v1/categories')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useInsertDataWithImage('/api/v1/categories', formData)
    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error' + e
    })
  }
}
