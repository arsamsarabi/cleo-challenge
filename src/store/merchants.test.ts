import { mockInitialState } from '../utils'
import reducer, {
  initialState,
  setMerchants,
  setLoading,
  setError,
  updateMerchantBill,
  selectPotentialBills,
  selectBills,
} from './merchants'

describe('Merchants slice', () => {
  test('Should have initialState at start', () => {
    const result = reducer(undefined, { type: 'any' })
    expect(result).toEqual(initialState)
  })

  test('Should setMerchants correctly', () => {
    const fetchedMetchants = mockInitialState.merchantsStore.merchants
    const nextState = reducer(initialState, setMerchants(fetchedMetchants))

    const rootState = { merchantsStore: nextState }

    const { merchants: selectBillsMechants } = selectBills(rootState)
    expect(selectBillsMechants).toEqual(
      mockInitialState.merchantsStore.merchants.filter((m) => m.isBill)
    )

    const { merchants: selectPotentialBillsMechants } = selectPotentialBills(
      rootState
    )
    expect(selectPotentialBillsMechants).toEqual(
      mockInitialState.merchantsStore.merchants.filter((m) => !m.isBill)
    )
  })

  test('Should setLoading correctly', () => {
    const nextState = reducer(initialState, setLoading(true))
    const rootState = { merchantsStore: nextState }
    const { loading } = selectBills(rootState)
    expect(loading).toBeTruthy()
  })

  test('Should setError correctly', () => {
    const EXPECTED_ERROR = 'example error'
    const nextState = reducer(initialState, setError(EXPECTED_ERROR))
    const rootState = { merchantsStore: nextState }

    const { errors } = selectBills(rootState)
    expect(errors).toEqual(EXPECTED_ERROR)
  })

  test('Should updateMerchantBill correctly', () => {
    const fetchedMetchants = mockInitialState.merchantsStore.merchants
    const nextState = reducer(initialState, setMerchants(fetchedMetchants))
    const rootState = { merchantsStore: nextState }

    const { merchants } = selectBills(rootState)
    const testMerchant = merchants[0]

    expect(testMerchant.isBill).toBeTruthy()

    const modifiedState = reducer(nextState, updateMerchantBill(testMerchant))
    const modifiedRootState = { merchantsStore: modifiedState }
    const { merchants: updatedMerchants } = selectBills(modifiedRootState)

    expect(
      updatedMerchants.find((m) => m.id === testMerchant.id)
    ).toBeUndefined()
  })
})
