import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, store } from '../../utils'
import Bills from './Bills'
import { MockStoreType } from '../../utils'
import type { Merchant } from '../../store'
import { patchMerchantBill as mockPatchMerchantBill } from '../../api/merchants'

jest.mock('../../api/merchants', () => ({
  patchMerchantBill: jest.fn(() => Promise.resolve()),
}))

describe('<Bills />', () => {
  test('Should render all merchants', () => {
    const { getByTestId } = render(<Bills />)

    ;(store.getState() as MockStoreType).merchantsStore.merchants.forEach(
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
