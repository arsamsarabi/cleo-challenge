import { createGlobalStyle, css } from 'styled-components'

import { resetCss } from './resetCss'

export const GlobalStyles = createGlobalStyle(({ theme: { palette } }: WithTheme) => {
  return css`
    ${resetCss}

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${palette.grey[900]};
      background-color: ${palette.grey[300]};
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
  `
})
