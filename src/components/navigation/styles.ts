import styled, { css } from 'styled-components'

export const Wrapper = styled.nav(({ theme: { measurements } }: WithTheme) => {
  return css`
    width: 320px;
    padding: ${measurements.large};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `
})

export const Logo = styled.img<WithTheme>(({ theme: { measurements } }) => {
  return css`
    width: 160px;
    margin-bottom: ${measurements.medium};
  `
})
