import { createSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

interface CategoriesStoreState {
  categories: Category[]
}

const initialState: CategoriesStoreState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategories: (state) => {
      return state
    },
  },
})

const { fetchCategories } = categoriesSlice.actions

const selectCategories = (state: RootState): Category[] => state.categories

export default categoriesSlice.reducer
export { fetchCategories, selectCategories }
