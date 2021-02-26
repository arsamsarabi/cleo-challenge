import { api } from './api'
import type { Category, CategoryThunk } from '../store'
import { setCategories, setLoading, setError } from '../store/categories'

export const fetchCategories = (): CategoryThunk => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await api.get('categories')
    dispatch(setLoading(false))
    dispatch(setCategories(response.data as Category[]))
  } catch (error) {
    dispatch(setLoading(false))
    dispatch(setError(error))
  }
}
