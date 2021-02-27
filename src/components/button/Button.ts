import styled, { css } from 'styled-components'

export type ButtonColorMode = 'normal' | 'danger' | 'success'

export type ActionButtonProps = WithTheme & {
  mode?: ButtonColorMode
}

export const ActionButton = styled.button<ActionButtonProps>(
  ({ theme: { measurements, palette }, mode = 'normal' }) => {
    const colorMap: { [key in typeof mode]: string } = {
      normal: palette.blue,
      success: palette.common.green,
      danger: palette.common.red,
    }

    return css`
      outline: none;
      border: none;
      color: ${colorMap[mode]};
      background-color: ${palette.common.white};
      padding: ${measurements.small} ${measurements.medium};
      min-height: 40px;
      min-width: 140px;
      text-transform: uppercase;
      border: 2px solid ${colorMap[mode]};
      border-radius: 4px;
      transition: 0.2s all ease-in-out;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      svg {
        color: ${colorMap[mode]};
        margin-right: ${measurements.medium};
      }

      &:hover {
        cursor: pointer;
        color: ${palette.common.white};
        background-color: ${colorMap[mode]};
        font-weight: bold;
        border-color: ${colorMap[mode]};

        svg {
          color: ${palette.common.white};
        }
      }
    `
  }
)
