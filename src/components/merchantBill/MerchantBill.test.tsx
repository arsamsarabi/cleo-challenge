import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from '../../utils'
import { MerchantBill, MerchantBillProps } from './MerchantBill'

const initialProps: MerchantBillProps = {
  merchant: {
    categoryId: 3,
    iconUrl: null,
    id: '5a5cab3bfe33900100fd8ed9',
    isBill: true,
    name: 'Transfer to flatmate',
    transactions: [
      {
        amount: 450,
        date: '2018-01-02',
        id: 11,
      },
      {
        amount: 450,
        date: '2018-02-02',
        id: 12,
      },
      {
        amount: 450,
        date: '2018-03-02',
        id: 13,
      },
      {
        amount: 450,
        date: '2018-04-02',
        id: 14,
      },
      {
        amount: 450,
        date: '2018-05-02',
        id: 15,
      },
    ],
  },
  caregory: {
    amount: 4,
    date: '2018-05-02',
    id: 25,
  },
  billAction: {
    action: jest.fn(),
    colorMode: 'success',
    label: 'Add bill',
    Icon: <i />,
  },
}

describe('<MerchantBill />', () => {
  test('Should call billAction.action correctly', () => {
    const { getByTestId } = render(<MerchantBill {...initialProps} />)
    const actionButton = getByTestId(
      `action-button-${initialProps.merchant.id}`
    )

    userEvent.click(actionButton)
    expect(initialProps.billAction.action).toBeCalledTimes(1)
  })

  test('Should not render transactions if closed', () => {
    const { getByTestId } = render(<MerchantBill {...initialProps} />)

    expect(() => getByTestId('transactions-wrapper')).toThrow()
  })

  test('Should render transactions if open', () => {
    const { getByTestId } = render(<MerchantBill {...initialProps} />)

    const summaryWrapper = getByTestId('summary-wrapper')
    userEvent.click(summaryWrapper)

    const transactions = getByTestId('transactions-wrapper')
    expect(transactions).toBeDefined()
  })
})
