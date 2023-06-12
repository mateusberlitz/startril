import { Box, Flex, HStack, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import ContactAnimation from '../../public/contact_animation.svg';
import { MainButton } from "../components/Buttons/MainButton";
import { ColoredTag } from "../components/ColoredTag";

export default function Sobre(){
    return(
        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px" h="calc(100% + 215px)" overflow="hidden">
                    <ContactAnimation/>
                </Flex>

                <Box w="100%" bg="rgba(0,0,0,0.6)">
                    <Header/>

                    <Flex w="100%">
                        <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0" minH="90vh">
                            <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                                <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                    <Heading color="white" fontSize="5xl" fontWeight={"regular"}>Focados em criar e transformar</Heading>
                                    <Text color="gray.300">E estar na internet e demonstrar como é completo, diferente e se conecta com o cliente.</Text>

                                    <Stack spacing="1">
                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"5xl"} fontWeight={"semibold"} color="purple.500">+6</Text>
                                            <Text fontSize={"lg"} color="white">Anos de experiência</Text>
                                        </HStack>

                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"5xl"} fontWeight={"semibold"} color="purple.500">+R$ 200mil</Text>
                                            <Text fontSize={"lg"} color="white">em investimento gerenciado</Text>
                                        </HStack>

                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"5xl"} fontWeight={"semibold"} color="purple.500">+95</Text>
                                            <Text fontSize={"lg"} color="white">Campanhas e estratégias lançadas</Text>
                                        </HStack>
                                    </Stack>

                                    {/* <HStack spacing="8">
                                        <MainButton>Contratar</MainButton>
                                        <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s">Ver serviços</Button>
                                    </HStack> */}
                                </Stack>
                                <Stack w={["100%", "100%", "40%", "40%"]} pos="absolute" right="0">
                                    <Img src="./soco.webp" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Flex> 
                </Box>
            </Flex>

            <Flex>
                <Flex>
                    <HStack>
                                    
                    </HStack>
                </Flex>

                <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="14">
                    <Stack maxW="600px" spacing="10">
                        <ColoredTag>Sobre Nós</ColoredTag>
                        <Heading color="white" fontSize={"5xl"} fontWeight={"regular"}>Moldamos empresas <br/>de destaque</Heading>
                    </Stack>

                    <Stack spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                        <Stack w={["100%", "100%", "50%", "50%"]}>
                            <Text>
                                Surgimos com o ideal de melhorar o processo de vendas das empresas pela internet, desde o primeiro contato com o cliente até a maturação para a venda.<br/><br/>
                                Nossa experiência com público na internet, design, anúncios, e programação nos permite criar uma marca com um processo mais detalhado de venda pela internet. Este que qualquer empresa poderá melhorar e ampliar cada vez mais, através de dados reais e mais tecnologia.
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Flex>
        </Flex>
    )
}