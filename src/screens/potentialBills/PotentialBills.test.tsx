import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { render } from '../../utils'
import PotentialBills from './PotentialBills'
import { mockInitialState, MockStoreType } from '../../utils'
import type { Merchant } from '../../store'

const mockStore = configureMockStore([thunk])

describe('<PotentialBills />', () => {
  test('Should render all merchants', () => {
    const store = mockStore(mockInitialState)
    const { getByTestId } = render(
      <Provider store={store}>
        <PotentialBills />
      </Provider>
    )
    ;(store.getState() as MockStoreType).merchantsStore.merchants.forEach(
      (merchant: Merchant) => {
        if (!merchant.isBill) {
          expect(getByTestId(merchant.id)).toBeDefined()
        } else {
          expect(() => getByTestId(merchant.id)).toThrow()
        }
      }
    )
  })
})
