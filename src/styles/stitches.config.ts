import { createStitches } from '@stitches/react';

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

      dark900: '#232323',
      dark600: '#373737',
      dark400: '#4E4E4E',
      dark200: '#6C6C6C',

      pink: '#FC5FFF',
      purple: '#A55FFF',
      blue: '#5FBCFF',

      red: '#FF0000',
      redLight: '#ff6c6c',
      green: '#04D100',
      greenLight: '#04c300',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },

    // media: {
    //   xs: '(min-width: 520px)',
    //   sm: '(min-width: 640px)',
    //   md: '(min-width: 768px)',
    //   lg: '(min-width: 1024px)',
    // },

    media: {
      bp1: '@media (min-width: 640px)',
      bp2: '@media (min-width: 768px)',
      bp3: '@media (min-width: 1024px)',
    },
  },
});
