import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      blue800: '#0E7DFF',
      blue600: '#4E9FFF',
      blue300: '#A1CDFF',

      green: '#00C67E',
      red: '#E75555',

      dark900: '#232323',
      dark600: '#5E5E5E',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },

    media: {
      xs: '(min-width: 520px)',
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
  },
})
