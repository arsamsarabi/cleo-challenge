import styled, { css } from 'styled-components'

import { ImageWithFallback } from '../imageWithFallback/ImageWithFallback'

export const Wrapper = styled.div<WithTheme>(({ theme: { measurements } }) => {
  return css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    padding: ${measurements.medium};

    &:hover {
      cursor: pointer;
    }

    svg {
      margin: 0 ${measurements.large} 0 auto;
    }
  `
})

export const MerchantImage = styled(ImageWithFallback)<WithTheme>(
  ({ theme: { measurements } }) => {
    return css`
      width: 75px;
      height: 75px;
      margin-right: ${measurements.large};
    `
  }
)

export const CategoryIcon = styled.img(() => {
  return css`
    width: 20px;
    height: 20px;
  `
})

export const MerchantNameRow = styled.div<WithTheme>(
  ({ theme: { measurements, palette } }) => {
    return css`
      display: flex;
      h1 {
        font-size: 1.25rem;
        color: ${palette.grey[800]};
        margin-bottom: ${measurements.medium};
        margin-left: ${measurements.small};
      }
    `
  }
)

export const TransactionSummary = styled.p<WithTheme>(
  ({ theme: { measurements, palette } }) => {
    return css`
      font-size: 0.9rem;
      color: ${palette.grey[700]};
      span {
        font-weight: bold;
        &:first-of-type {
          margin-right: ${measurements.xsmall};
        }
        &:last-of-type {
          margin-left: ${measurements.xsmall};
        }
      }
    `
  }
)
