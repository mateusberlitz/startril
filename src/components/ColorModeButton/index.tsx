import { Box, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

export function ColorModebutton(){
    const { toggleColorMode, colorMode } = useColorMode();

    return(
        <Box pos="fixed" zIndex={99} bg={colorMode === "dark" ? "#1d1a26" : "gray.200"} right="0" borderLeftRadius={5} cursor={"pointer"} onClick={toggleColorMode}>
            <Flex  h="50px" w="50px" alignItems={"center"} justifyContent={"center"} >
                <Icon as={colorMode === "dark" ? Moon : Sun}/>
            </Flex>
        </Box>
    )
}