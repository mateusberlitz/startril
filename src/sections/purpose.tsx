import { Box, Flex, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";
import { DnaAnimation } from '../components/DnaAnimation';

export function Purpose(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex id="#services" w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>

                   
                            <Stack w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                                <Box id="moon" w="60" h="60" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(100px)"/>
                                <DnaAnimation/>
                            </Stack>


                    <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                        <Stack spacing="6">
                            <TextTag>Nosso foco é</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}><Text as={"span"} color={"#85C7FB"}>Aumento de Receita.</Text></Heading>
                        <Text color="gray.500">Além do crescimento de faturamento, construímos um método que possa ser mantido e escalável no seu processo de vendas.</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}