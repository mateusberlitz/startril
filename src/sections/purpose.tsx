import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";
import { DnaAnimation } from '../components/DnaAnimation';

export function Purpose(){
    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>

                    <Stack w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                        <Box id="moon" w="60" h="60" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(100px)"/>
                        <DnaAnimation/>
                    </Stack>

                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                        <Stack spacing="6">
                            <TextTag>O propósito é</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>Fazer a renovação digital da sua empresa</Heading>
                        <Text color="gray.500">Não deixe os seus resultados serem prejudicados por não estar atualizado! Transferimos a sua empresa para o digital!</Text>

                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}