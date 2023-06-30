import { Flex, HStack, Heading, Icon as ChakraIcon, Stack, Text, ChakraProps } from "@chakra-ui/react";
import { Icon } from "react-feather";

interface IconItemListProps extends ChakraProps{
    icon: Icon;
    title: string;
    description: string;
    onHover?: (number:number) => void;
    index: number;
    active: boolean;
}

export function IconItemList({icon, title, description, onHover, active, index, ...rest} : IconItemListProps){
    return(
        <Stack onMouseEnter={onHover ? () => onHover(index) : () => {}} spacing="8" alignItems={"flex-start"} maxW="800px" maxH={active ? "1000px" : "70px"} overflow="hidden" cursor="pointer" transition="max-height ease 1.5s" _hover={{maxH:"1000px"}} {...rest}>
            <HStack spacing="7">
                <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                    <ChakraIcon as={icon} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                </Flex>
                <Flex h="70px" alignItems={"center"} w="calc(100% - 100px)">
                    <Heading fontSize={"2xl"} color="white">{title}</Heading>
                </Flex>
            </HStack>

            <Stack w="calc(100% - 70px)">
                <Text>{description}</Text>
            </Stack>
        </Stack>
    )
}