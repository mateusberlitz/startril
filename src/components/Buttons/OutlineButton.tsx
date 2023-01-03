import { Button, ButtonProps } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { ElementType } from "react";

interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
}

export function OutlineButton({icon, children, ...rest} : ButtonModelProps){
    return (
        <Button px="10" w="fit-content" leftIcon={icon && <Icon as={icon} stroke="#ffffff" fontSize="lg" fill="none" mr="2"/>} fontSize="sm" variant="outline" borderRadius="3px" border="1px" {...rest}>
            {children}
        </Button>
    )
}