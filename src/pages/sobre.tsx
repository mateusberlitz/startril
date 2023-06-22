import { Box, Flex, HStack, Heading, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import ContactAnimation from '../../public/contact_animation.svg';
import { MainButton } from "../components/Buttons/MainButton";
import { ColoredTag } from "../components/ColoredTag";
import { Footer } from "../components/Footer";
import { Phone } from "react-feather";

export default function Sobre(){
    return(
        <Flex flexDir="column" w="100%">
            <Header/>
            {/* <Flex flexDir="column">
                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px" h="calc(100% + 215px)" overflow="hidden">
                    <ContactAnimation/>
                </Flex>

                <Box w="100%" bg="rgba(0,0,0,0.6)">
                    <Header/> */}

                    {/* <Flex w="100%">
                        <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0" minH="90vh">
                            <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                                <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                    <Heading color="white" fontSize="5xl" fontWeight={"regular"}>A sua equipe de especialistas a disposição!</Heading>
                                    <Text color="gray.300">E estar na internet e demonstrar como é completo, diferente e se conecta com o cliente.</Text>

                                    <Stack spacing="1">
                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+6</Text>
                                            <Text fontSize={"lg"} color="white">Anos de experiência</Text>
                                        </HStack>

                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+R$ 200mil</Text>
                                            <Text fontSize={"lg"} color="white">em investimento gerenciado</Text>
                                        </HStack>

                                        <HStack spacing="4">
                                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+95</Text>
                                            <Text fontSize={"lg"} color="white">Campanhas e estratégias lançadas</Text>
                                        </HStack>
                                    </Stack>
                                </Stack>
                                <Stack w={["100%", "100%", "40%", "40%", "25%"]} pos="absolute" right="0">
                                    <Img src="./soco.webp" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Flex>  */}
                {/* </Box>
            </Flex> */}

            <Flex borderTop="3px solid" borderColor="rgba(255,255,255,0.1)" pos="relative" bg="linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);">
                <Flex pos="absolute" zIndex={-1} top="0" left="0" overflow={"hidden"} h="90vh" maxH="940px">
                    <HStack id="aboutPhotosTranslate" spacing="0">
                        <Img src="./rahin.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                        <Img src="./mateus.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                        <Img src="./ana.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                        <Img src="./rahin2.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                        <Img src="./mateus2.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                        <Img src="./ana2.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/>    
                    </HStack>
                </Flex>
                


                <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h="90vh" maxH="940px" pos="relative">
                    <Stack spacing="14" pos="absolute" bottom="9%">
                        <Stack maxW="600px" spacing="10">
                            <ColoredTag>Sobre Nós</ColoredTag>
                            <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Moldamos empresas <br/>de destaque</Heading>
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
                </Stack>
            </Flex>

            <Flex bg="#000" flexDir="column">
                <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="40" spacing="14" pos="relative" alignItems={"center"} direction={["column", "column", "row", "row"]}>
                    <Stack spacing="10"  w={["100%", "100%", "50%", "50%"]}>
                        {/* <Stack spacing="0">
                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+6</Text>
                            <Text fontSize={"lg"} color="white">Anos de experiência</Text>
                        </Stack>

                        <Stack spacing="0">
                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+R$ 200mil</Text>
                            <Text fontSize={"lg"} color="white">em investimento gerenciado</Text>
                        </Stack>

                        <Stack spacing="0">
                            <Text lineHeight={"1em"} fontSize={"4xl"} fontWeight={"regular"} color="purple.500" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}} >+95</Text>
                            <Text fontSize={"lg"} color="white">Campanhas e estratégias lançadas</Text>
                        </Stack> */}

                        
                    </Stack>
                    <Stack spacing="14" w={["100%", "100%", "50%", "50%"]}>
                        <Stack maxW="600px" spacing="10">
                            <ColoredTag>Sua Equipe</ColoredTag>
                            <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Estamos prontos para te auxiliar com...</Heading>
                        </Stack>

                        <Stack spacing="20" pos="relative">
                            <Stack>
                                <Text>Mais criatividade.</Text>
                                <Text>Mais ideias.</Text>
                                <Text>Mais olhar crítico.</Text>
                                <Text>Mais soluções.</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="40" pb="56" spacing="14" h="90vh" pos="relative" textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    <Stack spacing="6">
                        <ColoredTag>Para começar</ColoredTag>
                        <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Vamos falar sobre o seu projeto?</Heading>
                    </Stack>
                    <MainButton leftIcon={<Icon as={Phone}/>}>Whatsapp</MainButton>
                </Stack>
            </Flex>

            <Footer/>
        </Flex>
    )
}