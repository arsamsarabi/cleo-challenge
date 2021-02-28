import { ThunkAction } from 'redux-thunk'
import { Action } from '@reduxjs/toolkit'

export type Transaction = {
  amount: number
  date: string
  id: number
}

export type Merchant = {
  categoryId: number
  iconUrl: string | null
  id: string
  isBill: boolean
  name: string
  transactions: Transaction[]
}

export type Category = {
  iconUrl: string
  name: string
  id: number
}

export type MerchantState = {
  merchants: Merchant[]
  loading: boolean
  errors: string
}

export type CategoryState = {
  categories: Category[]
  loading: boolean
  errors: string
}

export type MerchantThunk = ThunkAction<
  void,
  MerchantState,
  unknown,
  Action<string>
>

export type CategoryThunk = ThunkAction<
  void,
  CategoryState,
  unknown,
  Action<string>
>
