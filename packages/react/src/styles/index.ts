import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@afrodis-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },

    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },

    utils: {
      px: (value: typeof space) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: typeof space) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  })
