import { Text, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TextTagProps extends ChakraProps{
    children?: ReactNode;
}

export function TextTag({children, ...rest} : TextTagProps){
    return (
        <Text fontWeight="light" fontSize="xl" color="rgba(255,255,255,0.7)" {...rest}>
            {children}
        </Text>
    )
}