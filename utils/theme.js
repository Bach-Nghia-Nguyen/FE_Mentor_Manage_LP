import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    primary: {
      brightRed: 'hsl(12, 88%, 59%)',
      darkBlue: 'hsl(228, 39%, 23%)',
    },
    neutral: {
      darkGrayishBlue: 'hsl(227, 12%, 61%)',
      veryDarkBlue: 'hsl(233, 12%, 13%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Be Vietnam Pro, sans-serif',
        fontSize: '16px',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'Be Vietnam Pro, sans-serif',
      },
    },
  },
  breakpoints: {
    w320: '320px',
    w365: '365px',
    w375: '375px',
    w400: '400px',
    w440: '440px',
    w500: '500px',
    w650: '650px',
    w768: '768px',
    w960: '960px',
    w1080: '1080px',
    w1200: '1200px',
    w1350: '1350px',
    w1440: '1440px',
    '2xl': '1536px',
  },
}

export const theme = extendTheme(customTheme)
