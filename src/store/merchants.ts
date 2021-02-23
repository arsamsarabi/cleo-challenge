import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './store'

interface MerchantsStoreState {
  merchants: Merchant[]
}

const initialState: MerchantsStoreState = {
  merchants: [],
}

export const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {
    fetchMerchants: (state) => {
      return state
    },
    updateBill: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      return state
    },
  },
})

const { fetchMerchants, updateBill } = merchantsSlice.actions

const selectBills = (state: RootState): Merchant[] =>
  state.merchants.filter((m: Merchant) => m.isBill)

const selectPotentialBills = (state: RootState): Merchant[] =>
  state.merchants.filter((m: Merchant) => !m.isBill)

export default merchantsSlice.reducer
export { fetchMerchants, updateBill, selectBills, selectPotentialBills }
