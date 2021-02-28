import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from '../../utils'
import { BillSummary, BillSummaryProps } from './BillSummary'

const initialProps: BillSummaryProps = {
  merchant: {
    categoryId: 3,
    iconUrl:
      'https://pbs.twimg.com/profile_images/1280422740638470147/aBXwvFOs_bigger.jpg',
    id: '5a5caad4fe33900100fd8ed7',
    isBill: false,
    name: 'HSBC Mortgage',
    transactions: [
      {
        amount: 1023,
        date: '2018-01-01',
        id: 1,
      },
      {
        amount: 1023,
        date: '2018-02-01',
        id: 2,
      },
      {
        amount: 1023,
        date: '2018-03-01',
        id: 3,
      },
      {
        amount: 1023,
        date: '2018-04-01',
        id: 4,
      },
      {
        amount: 1023,
        date: '2018-05-01',
        id: 5,
      },
    ],
  },
  category: {
    iconUrl:
      'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/income.png',
    id: 1,
    name: 'Phone',
  },
  handleClick: jest.fn(),
  open: false,
}

describe('<BillSummary />', () => {
  test('Should fire handleClick correctly', () => {
    const { getByTestId } = render(<BillSummary {...initialProps} />)
    const wrapper = getByTestId('summary-wrapper')

    userEvent.click(wrapper)
    expect(initialProps.handleClick).toHaveBeenCalledTimes(1)
    expect(initialProps.handleClick).toHaveBeenCalledWith(true)
  })

  test('Should render merchant icon correctly', () => {
    const { getByTestId } = render(<BillSummary {...initialProps} />)
    const merchantIcon: Partial<HTMLImageElement> = getByTestId('merchant-icon')

    expect(merchantIcon.src).toEqual(initialProps.merchant.iconUrl)
  })

  test('Should render merchant placeholder icon correctly', () => {
    const testProps = {
      ...initialProps,
      merchant: {
        ...initialProps.merchant,
        iconUrl: null,
      },
    }
    const { getByTestId } = render(<BillSummary {...testProps} />)
    const merchantIcon: Partial<HTMLImageElement> = getByTestId('merchant-icon')

    expect(merchantIcon.src).toMatch(/default-placeholder-image.png/i)
  })

  test('Should render chevron down if open prop is false', () => {
    const { getByTestId } = render(<BillSummary {...initialProps} />)
    const chevronIcon = getByTestId('chevron-down')

    expect(chevronIcon).toBeDefined()
  })

  test('Should render chevron up if open prop is true', () => {
    const testProps = {
      ...initialProps,
      open: true,
    }
    const { getByTestId } = render(<BillSummary {...testProps} />)
    const chevronIcon = getByTestId('chevron-up')

    expect(chevronIcon).toBeDefined()
  })
})
