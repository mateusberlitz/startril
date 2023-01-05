import { Button, ButtonProps } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { ElementType } from "react";

interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
}

export function OutlineButton({icon, children, ...rest} : ButtonModelProps){
    return (
        <Button px="10" w="fit-content" leftIcon={icon && <Icon as={icon} stroke="#ffffff" fontSize="lg" fill="none" mr="2"/>} fontSize="sm" variant="outline" borderRadius="1px" borderColor="gray.800" border="1px" 
        _hover={{borderColor: "gray.600", bg: "rgba(255,255,255,0.04)"}}
        _focus={{borderColor: "gray.600", bg: "rgba(255,255,255,0.04)"}}
        {...rest}>
            {children}
        </Button>
    )
}