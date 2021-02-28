import React from 'react'

import { render } from '../../utils'
import { Layout } from './Layout'

describe('<Layout />', () => {
  test('Should render children correctly', () => {
    const TEST_ID = 'dummy-element'
    const { getByTestId } = render(
      <Layout>
        <div data-testid={TEST_ID} />
      </Layout>
    )
    const childElement = getByTestId(TEST_ID)

    expect(childElement).toBeDefined()
  })
})
