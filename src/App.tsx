import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { ErrorBoundary } from './components'
import { theme, GlobalStyles } from './styles'
import { AppRouter } from './navigation'

const App: FC = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
