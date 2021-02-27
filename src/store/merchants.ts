import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { Merchant, MerchantState } from './types'

const initialState: MerchantState = {
  merchants: [],
  loading: false,
  errors: '',
}

export const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    setMerchants: (state, { payload }: PayloadAction<Merchant[]>) => {
      state.merchants = payload
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },
    updateMerchantBill: (state, { payload }: PayloadAction<Merchant>) => {
      const merchantToUpdate = state.merchants.find(
        (m: Merchant) => m.id === payload.id
      ) as Merchant
      merchantToUpdate.isBill = !merchantToUpdate.isBill
    },
  },
})

const selectBills = (state: {
  merchantsStore: MerchantState
}): MerchantState => ({
  merchants: state.merchantsStore.merchants.filter((m: Merchant) => m.isBill),
  loading: state.merchantsStore.loading,
  errors: state.merchantsStore.errors,
})

const selectPotentialBills = (state: {
  merchantsStore: MerchantState
}): MerchantState => ({
  merchants: state.merchantsStore.merchants.filter((m: Merchant) => !m.isBill),
  loading: state.merchantsStore.loading,
  errors: state.merchantsStore.errors,
})

const {
  setMerchants,
  setLoading,
  setError,
  updateMerchantBill,
} = merchantsSlice.actions

export default merchantsSlice.reducer
export {
  setMerchants,
  setLoading,
  setError,
  updateMerchantBill,
  selectPotentialBills,
  selectBills,
}
