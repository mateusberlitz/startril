import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  root: {

  },
  container: {
    transition: "all ease .5s",
    border: "1px solid rgba(255,255,255,0.05)",
    bg: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)",
    //borderColor: "rgba(255,255,255,0.01)",
    py: "3",
    px: ["6", "6", "8", "8"],
    _hover: {
        borderColor: "rgba(255,255,255,.8)",
        bg: "rgba(255,255,255,.05)"
    },
    _expanded: {
        borderColor: "rgba(255,255,255,1)",
    }
  },
  button:{
    color: "white",
    fontSize: "lg"
  },
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })