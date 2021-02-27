import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div<WithTheme>(
  ({ theme: { palette, measurements } }) => {
    return css`
      display: flex;
      flex-direction: column;
      background-color: ${palette.common.white};
      box-shadow: 4px 4px 12px -4px ${rgba(palette.common.black, 0.5)};
      border-radius: 8px;

      &:not(:last-of-type) {
        margin-bottom: ${measurements.medium};
      }
    `
  }
)

export const ActionsRow = styled.div<WithTheme & { open: boolean }>(
  ({ theme: { measurements, palette }, open }) => {
    return css`
      border-bottom: ${open ? `1px solid ${palette.grey[500]};` : '0;'};
      margin-bottom: ${measurements.medium};
      padding-left: ${measurements.medium};
      padding-right: ${measurements.medium};
      padding-bottom: ${open ? measurements.medium : 0};
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    `
  }
)
