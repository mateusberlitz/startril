import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { ElementType } from "react";

interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
    hasAnimation?: boolean;
}

export function OutlineButton({icon, children, hasAnimation = false, ...rest} : ButtonModelProps){
    const { colorMode } = useColorMode();

    return (
        <Button px="10" w="fit-content" pos="relative" leftIcon={icon && <Icon as={icon} stroke="#ffffff" fontSize="lg" fill="none" mr="2"/>} fontSize="sm" variant="outline" fontWeight={"normal"} borderRadius="1px" borderColor={colorMode === "dark" ? "gray.800" : "gray.300"} border="1px" 
        _hover={{borderColor: "gray.600", bg: "rgba(255,255,255,0.04)", color: colorMode === "dark" ? "#fff" : "black", _before: {w: "100%"}, _after: {w: "100%"}, transition: "all ease 0.7s" }} transition="all ease 0.7s"
        _focus={{borderColor: "gray.600", bg: "rgba(255,255,255,0.04)", color: "#fff"}}
        {...rest}
        _before={{content: '""', position: "absolute", bottom: "-1px", height: hasAnimation ? "1px" : "0", width: "0", bg:"linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);", transition:"all ease 0.7s"}}
        _after={{content: '""', position: "absolute", top: "-1px", height: hasAnimation ? "1px" : "0", width: "0", bg: "linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);", transition:"all ease 0.7s"}}
        >
            {children}
        </Button>
    )
}