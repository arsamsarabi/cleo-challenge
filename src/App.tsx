import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from './constants/styles'
import welcomeIcon from './assets/welcome.jpg'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <img src={welcomeIcon} alt="Welcome!" />
  </ThemeProvider>
)

export default App
