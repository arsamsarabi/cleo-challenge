import React from 'react'

import { render, store } from '../../utils'
import Bills from './Bills'
import type { Merchant, RootState } from '../../store'

jest.mock('../../api/merchants', () => ({
  patchMerchantBill: jest.fn(() => Promise.resolve()),
}))

describe('<Bills />', () => {
  test('Should render all merchants', () => {
    const { getByTestId } = render(<Bills />)

    ;(store.getState() as RootState).merchantsStore.merchants.forEach(
      (merchant: Merchant) => {
        if (merchant.isBill) {
          expect(getByTestId(merchant.id)).toBeDefined()
        } else {
          expect(() => getByTestId(merchant.id)).toThrow()
        }
      }
    )
  })
})
