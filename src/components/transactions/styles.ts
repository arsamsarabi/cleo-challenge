import styled, { css } from 'styled-components'

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    padding: ${measurements.medium};

    & > p {
      margin-bottom: ${measurements.medium};
    }
  `
})

export const Details = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    display: flex;
    &:not(:last-of-type) {
      margin-bottom: ${measurements.small};
    }
    p {
      font-size: 0.9rem;
      font-weight: bold;
    }
    span {
      font-size: 0.8rem;
      font-weight: normal;
      &:first-of-type {
        margin-right: ${measurements.xsmall};
      }
      &:last-of-type {
        margin-left: ${measurements.xsmall};
        margin-right: ${measurements.xsmall};
      }
    }
  `
})
