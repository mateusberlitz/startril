import { Text, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TextTagProps extends ChakraProps{
    children?: ReactNode;
}

export function TextTag({children, ...rest} : TextTagProps){
    return (
        <Text fontWeight="light" fontSize="sm" color="rgba(255,255,255,1)" textTransform={"uppercase"} letterSpacing="0.2em" {...rest}>
            {children}
        </Text>
    )
}