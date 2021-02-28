import React, { FC, ReactElement } from 'react'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { theme } from '../../styles'
import { mockInitialState } from './mockInitialState'

const mockStore = configureMockStore([thunk])
export const store = mockStore(mockInitialState)

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
