import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

  const startrilVariant = definePartsStyle((props) => {
    const { colorScheme: c } = props // extract colorScheme from component props
  
    return {
      tab: {
        transition: "all ease 0.5s",
        border: "1px solid transparent",
        _hover: {
            border: "1px solid rgba(255,255,255,0.5)",
            borderBottomColor: "transparent",
            //color: "white",
            bg: "rgba(255,255,255,0.05)"
        },
        _selected: {
            border: "1px solid white",
            borderBottomColor: "transparent",
            color: "white"
        }
      },
      tablist: {
        transition: "all ease 0.5s",
        borderBottom: '1px solid !important',
        borderColor: 'rgba(255,255,255,0.05) !important',
      },
      tabpanel: {
        padding: 0
      }
    }
  })
  
  const variants = {
    startril: startrilVariant,
  }

export const tabsTheme = defineMultiStyleConfig({ variants })