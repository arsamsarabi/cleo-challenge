import { calcSumTransactions, calcSumMerchants } from './transactions'

const MOCK_DATA = [
  {
    transactions: [
      {
        amount: 1,
      },
      {
        amount: 2,
      },
      {
        amount: 3,
      },
    ],
    expected: '6.00',
  },
  {
    transactions: [
      {
        amount: 20,
      },
      {
        amount: 32,
      },
      {
        amount: 301,
      },
    ],
    expected: '353.00',
  },
  {
    transactions: [
      {
        amount: 20.22,
      },
      {
        amount: 65.44,
      },
      {
        amount: 309.74,
      },
    ],
    expected: '395.40',
  },
]

describe('calcSumTransactions()', () => {
  test('It returns the expected amount', () => {
    MOCK_DATA.forEach((item) => {
      expect(calcSumTransactions(item.transactions)).toEqual(item.expected)
    })
  })
})

describe('calcSumMerchants()', () => {
  test('It returns the expected amount', () => {
    let expectedSum = 0
    MOCK_DATA.forEach((item) => {
      expectedSum += parseFloat(item.expected)
    })
    expect(calcSumMerchants(MOCK_DATA)).toEqual(expectedSum.toFixed(2))
  })
})
