/// <reference types="react-scripts" />

type ComplexColor = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type Palette = {
  yellow: string
  blue: string
  grey: ComplexColor
  common: {
    [key in string]: string
  }
}

type Measurements = {
  xsmall: string
  small: string
  medium: string
  large: string
}

type Theme = {
  palette: Palette
  measurements: Measurements
}

type WithTheme = {
  theme: Theme
}
