import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ErrorBoundary } from './components'
import { theme, GlobalStyles } from './constants/styles'
import { AppRouter } from './navigation'

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
