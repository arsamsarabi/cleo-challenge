import styled, { css } from 'styled-components'

export const Wrapper = styled.main(() => {
  return css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
  `
})

export const MainContent = styled.section(
  ({ theme: { measurements, palette } }: WithTheme) => {
    return css`
      box-shadow: -10px 0px 10px 1px ${palette.grey[500]};
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      padding: ${measurements.large};
      background-color: ${palette.grey[50]};
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    `
  }
)
