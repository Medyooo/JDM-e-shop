import { GET_ALL_CATEGORY, GET_ERROR } from '../Type'

import useGetData from '../../hooks/UseGetData'

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
