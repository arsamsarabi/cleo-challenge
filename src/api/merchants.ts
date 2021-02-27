import { api } from './api'
import type { Merchant, MerchantThunk } from '../store'
import {
  updateMerchantBill,
  setMerchants,
  setLoading,
  setError,
} from '../store/merchants'

export const fetchMerchants = (): MerchantThunk => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await api.get('merchants')
    dispatch(setLoading(false))
    dispatch(setMerchants(response.data as Merchant[]))
  } catch (error) {
    dispatch(setLoading(false))
    dispatch(setError(error))
  }
}

export const patchMerchantBill = (merchant: Merchant): MerchantThunk => async (
  dispatch
) => {
  try {
    await api.patch(`merchants/${merchant.id}`, {
      isBill: !merchant.isBill,
    })
    dispatch(updateMerchantBill(merchant))
  } catch (error) {
    dispatch(setError(error))
  }
}
