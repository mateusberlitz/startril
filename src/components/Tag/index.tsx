import { Tag as ChakraTag, TagProps, Text, useBreakpointValue } from "@chakra-ui/react";

interface CustomTagProps extends TagProps{
    children: string;
}

export function Tag({children, color, ...rest}: CustomTagProps){
    const isMobile = useBreakpointValue({
        base: true,
        sm: false,
    })

    return(
        <ChakraTag bg="transparent" h="38px" border="1px solid" borderColor="rgba(255,255,255,0.1)" borderRadius={"4px"} textAlign={"center"} alignItems={"center"} w={isMobile ? "100%" : ""} {...rest}>
            <Text w="100%" color={color ? color : "white"} fontWeight={"medium"} px="3">{children}</Text>
        </ChakraTag>
    )
}