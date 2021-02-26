import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { ErrorBoundary } from './components'
import { theme, GlobalStyles } from './styles'
import { AppRouter } from './navigation'
import { store } from './store'

const App: FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
)

export default App
