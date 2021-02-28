import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import merchantsReducer from './merchants'
import categoriesReducer from './categories'

export const store = configureStore({
  reducer: {
    merchantsStore: merchantsReducer,
    categoriesStore: categoriesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: any = () => useDispatch<AppDispatch>()
