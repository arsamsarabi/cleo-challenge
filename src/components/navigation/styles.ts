import styled, { css } from 'styled-components'

export const Wrapper = styled.nav(({ theme: { measurements, palette } }: WithTheme) => {
  return css`
    width: 320px;
    padding: ${measurements.large};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `
})

export const Logo = styled.img(() => {
  return css`
    width: 160px;
  `
})
