import styled, { css } from 'styled-components'

export const ImageWithFallback = styled.img<WithTheme>(
  ({ theme: { palette, measurements } }) => {
    return css`
      display: block;
      position: relative;

      &:before {
        content: 'Failed to load image :(';
        background-color: ${palette.grey[200]};
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        padding: ${measurements.small};
        color: ${palette.grey[400]};
      }
    `
  }
)
