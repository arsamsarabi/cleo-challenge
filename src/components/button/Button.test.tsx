import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render } from '../../utils'
import { ActionButton } from './Button'
import { theme } from '../../styles'

describe('<ActionButton />', () => {
  test('Should have correct default css rules', () => {
    const TEST_ID = 'action-button'
    const { getByTestId, container } = render(
      <ActionButton data-testid={TEST_ID} />
    )
    const styledComponent = getByTestId(TEST_ID)

    expect(styledComponent).toHaveStyleRule('color', theme.palette.blue)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should have correct success css rules', () => {
    const TEST_ID = 'action-button'
    const { getByTestId, container } = render(
      <ActionButton data-testid={TEST_ID} mode="success" />
    )
    const styledComponent = getByTestId(TEST_ID)

    expect(styledComponent).toHaveStyleRule('color', theme.palette.common.green)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should have correct danger css rules', () => {
    const TEST_ID = 'action-button'
    const { getByTestId, container } = render(
      <ActionButton data-testid={TEST_ID} mode="danger" />
    )
    const styledComponent = getByTestId(TEST_ID)

    expect(styledComponent).toHaveStyleRule('color', theme.palette.common.red)

    expect(container.firstChild).toMatchSnapshot()
  })
})
