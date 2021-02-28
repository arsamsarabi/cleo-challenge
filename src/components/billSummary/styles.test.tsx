import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render } from '../../utils'
import {
  CategoryIcon,
  MerchantImage,
  MerchantNameRow,
  TransactionSummary,
  Wrapper,
} from './styles'

describe('<CategoryIcon />', () => {
  test('Should have expected css styling', () => {
    const TEST_ID = 'category-icon'
    const { getByTestId, container } = render(
      <CategoryIcon data-testid={TEST_ID} />
    )
    const styledComponent = getByTestId(TEST_ID)
    expect(styledComponent).toHaveStyleRule('width', '20px')
    expect(styledComponent).toHaveStyleRule('height', '20px')
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<MerchantImage />', () => {
  test('Should have expected css styling', () => {
    const { container } = render(<MerchantImage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<MerchantNameRow />', () => {
  test('Should have expected css styling', () => {
    const { container } = render(<MerchantNameRow />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<TransactionSummary />', () => {
  test('Should have expected css styling', () => {
    const { container } = render(<TransactionSummary />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<Wrapper />', () => {
  test('Should have expected css styling', () => {
    const { container } = render(<Wrapper />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
