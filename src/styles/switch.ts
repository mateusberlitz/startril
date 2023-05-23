import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: 'rgba(255,255,255,0.7)',
    border: '1px solid white'
    // _checked: {
    //     bg: 'blue',
    // },
  },
  track: {
    bg: 'transparent',
    border: '1px solid',
    _checked: {
      bg: 'transparent',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })