import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  control:{
    padding: 2,
    borderWidth: 1,
    borderRadius: 0,
    borderColor: "rgba(255,255,255,0.2)",
    transition: 'all ease 0.5s',
    _checked: {
        borderColor: "rgba(255,255,255,1)",
        bg: "transparent",
        transition: 'all ease 0.5s',
    },
    _hover: {
        borderColor: "rgba(255,255,255,0.8)",
        transition: 'all ease 0.5s',
        _checked: {
            bg: "transparent",
            borderColor: "rgba(255,255,255,1)",
        },
    }
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })