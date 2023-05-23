import { Box, ButtonProps, Flex, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { SolidButton } from "./SolidButton"

interface MainButtonProps extends ButtonProps{
    children: string;
}

export function MainButton({children, ...rest} : MainButtonProps){
    return(
        <Flex flexDir={"column"} pos="relative" w="fit-content" role="group" alignItems={"center"}>
            <SolidButton zIndex={3} _groupHover={{transform: "translate(0px, -12px);"}} _groupFocus={{transform: "translate(0px, -10px);"}} fontWeight={"normal"} size="lg" bg="linear-gradient(225deg, #3BA1F0 0%, #7260DF 100%);" color="white" {...rest} transition="all ease 1s">
                {children}
            </SolidButton>
            <Box pos="absolute" zIndex={1} top="40%" opacity={"0"} _groupHover={{opacity: '1' }} w="50%" bg="linear-gradient(90deg, rgba(59, 161, 240, 0.25) -1.31%, rgba(114, 96, 223, 0.25) 91.65%);" h="30px" borderRadius="80%" filter="blur(2px)" transition="all ease 1s"/>

            <Box pos="absolute" zIndex={1} opacity={"0"} _groupHover={{opacity: '1' }} top="40%" w="100%" bg="linear-gradient(90deg, rgba(59, 161, 240, 0.25) -1.31%, rgba(114, 96, 223, 0.25) 91.65%);" h="50px" borderRadius="80%" filter="blur(17px)" transition="all ease 1s"/>
        </Flex>
    )
}