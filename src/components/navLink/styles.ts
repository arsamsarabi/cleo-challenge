import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

type LinkProps = WithTheme & {
  isactive: number
}

export const Link = styled(RouterLink)(
  ({ theme: { measurements, palette }, isactive }: LinkProps) => {
    const activeStyles = css`
      color: ${palette.grey[900]};
    `

    return css`
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: ${measurements.small};
      text-decoration: none;
      color: ${palette.grey[600]};
      transition: 0.3s color linear;

      &:not(:last-of-type) {
        margin-bottom: ${measurements.small};
      }

      &:hover {
        ${activeStyles}
      }

      ${isactive &&
      css`
        ${activeStyles}
      `}
    `
  }
)

export const Label = styled.p(({ theme: { measurements } }: WithTheme) => {
  return css`
    margin-left: ${measurements.medium};
    font-size: 20px;
  `
})
