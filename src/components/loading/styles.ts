import styled, { css } from 'styled-components'

export const Wrapper = styled.div(() => {
  return css`
    flex: 1;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

export const LoadingGif = styled.img(() => {
  return css`
    width: 160px;
  `
})
