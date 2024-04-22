import { GET_ALL_CATEGORY, GET_ERROR } from '../Type'

import BaseUrl from '../../api/BaseURL'

export const GetAllCategory = () => async (dispatch) => {
  try {
    const res = await BaseUrl.get('/api/v1/categories')

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error' + e
    })
  }
}
