import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { Category, CategoryState } from './types'

export const initialState: CategoryState = {
  categories: [],
  loading: false,
  errors: '',
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, { payload }: PayloadAction<Category[]>) => {
      state.categories = payload
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },
  },
})

const { setCategories, setLoading, setError } = categoriesSlice.actions

const selectCategories = (state: {
  categoriesStore: CategoryState
}): CategoryState => state.categoriesStore

export default categoriesSlice.reducer
export { setCategories, setLoading, setError, selectCategories }
