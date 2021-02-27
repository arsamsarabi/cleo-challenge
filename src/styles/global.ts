import { createGlobalStyle, css } from 'styled-components'

import { resetCss } from './resetCss'

export const GlobalStyles = createGlobalStyle(
  ({ theme: { palette } }: WithTheme) => {
    return css`
      ${resetCss}

      body {
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${palette.grey[800]};
        background-color: ${palette.grey[300]};
        font-size: 18px;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
    `
  }
)
