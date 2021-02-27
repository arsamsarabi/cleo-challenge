import styled, { css } from 'styled-components'

export const Wrapper = styled.main<WithTheme>(({ theme: { palette } }) => {
  return css`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${palette.grey[50]};
  `
})

export const PageHeader = styled.div<WithTheme>(
  ({ theme: { palette, measurements } }) => {
    return css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: ${measurements.medium};
      h1 {
        font-size: 1.5rem;
        color: ${palette.blue};
      }
      p {
        font-size: 0.9rem;
        color: ${palette.grey[700]};
        margin-left: ${measurements.small};
        span {
          font-weight: bold;
        }
      }
    `
  }
)
