import React from 'react'

import { render } from '../../utils'
import { MerchantsTable, MerchantsTableProps } from './MerchantsTable'
import dbJsonFile from '../../../db.json'
import type { Merchant } from '../../store'

const initialProps: MerchantsTableProps = {
  merchants: dbJsonFile.merchants,
  categories: dbJsonFile.categories,
  pageTitle: 'Test Page',
  merchantAction: {
    Icon: <i />,
    label: 'Test action',
    action: jest.fn(),
    colorMode: 'danger',
  },
}

describe('<MerchantsTable />', () => {
  test('Should render all merchants', () => {
    const { getByTestId } = render(<MerchantsTable {...initialProps} />)
    initialProps.merchants.forEach((merchant: Merchant) => {
      expect(getByTestId(merchant.id)).toBeDefined()
    })
  })
})
