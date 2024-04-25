import { Box, Flex, HStack, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";
import { FunilAnimation } from '../components/FunilAnimation';

export function OurWork(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex w="100%" bg="#080510">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="0" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                        <Stack spacing="6">
                            <TextTag>Como trabalhamos</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"}  fontWeight={"semibold"}>Os pilares do nosso método</Heading>
                        <Text color="gray.500">Metodologia validada e um processo quase como científico.</Text>

                    </Stack>

                    <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                        <Box id="moon" zIndex={-1} w="60" h="60" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(100px)"/>
                        <HStack spacing="0" w="100%">
                            <Flex w="100%">
                                {/* <Funil/> */}
                                <FunilAnimation/>
                            </Flex>
                            {/* <Stack spacing="4">
                                <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"}>PERCEPÇÃO</Text>
                                <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                                <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                                <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                            </Stack> */}
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}