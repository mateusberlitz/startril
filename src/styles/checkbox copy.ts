import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  control:{
    padding: 0,
    borderWidth: 1,
    borderRadius: "full",
    borderColor: "rgba(255,255,255,0.2)",
    transition: 'all ease 0.5s',
    height: 5,
    width: 5,
    _checked: {
        borderColor: "rgba(255,255,255,1)",
        bg: "transparent",
        transition: 'all ease 0.5s',
        _before: {
            height: "40%",
            width: "40%",
            //bg: "gradient"
        }
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

export const radioTheme = defineMultiStyleConfig({ baseStyle })