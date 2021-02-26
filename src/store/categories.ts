import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { Category, CategoryState } from './types'

const initialState: CategoryState = {
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
}): Category[] => state.categoriesStore.categories

export default categoriesSlice.reducer
export { setCategories, setLoading, setError, selectCategories }
