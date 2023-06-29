import { Box, Flex, HStack, Heading, Icon, Img, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import ContactAnimation from '../../public/contact_animation.svg';
import { MainButton } from "../components/Buttons/MainButton";
import { ColoredTag } from "../components/ColoredTag";
import { Footer } from "../components/Footer";
import { Phone, Tool, Zap } from "react-feather";

import Lamp from '../../public/lightbulb-line.svg';
import Whatsapp from '../../public/whatsapp.svg';
import BgAngles from '../../public/bg_angles.svg';
import { useEffect, useRef } from "react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Sobre(){
    const letsTalkSection = useRef(null);

    const isMobileVersion = useBreakpointValue({
        base: true,
        md: false,
    })

    useEffect(() => {
        const ctx = gsap.context(() => {
            const arrows = gsap.utils.toArray<HTMLElement>('.bg_angles_svg__backgroundArrow');
            const sections = gsap.utils.toArray<HTMLElement>('.section');

            arrows.forEach((arrow, i) => {
                gsap.to(arrow, {
                    scrollTrigger: {
                        start: 'top bottom',
                    //   end: 'bottom top',
                        trigger: ".letsTalk",
                        toggleClass: 'active',
                        //markers: true,
                        once: true
                    }
                });
            })

            sections.forEach((section, i) => {
                const fadeShow = gsap.fromTo(section, { 
                    autoAlpha: 0,
                    y: 50
                }, { 
                    autoAlpha: 1,
                    y: 0
                });

                console.log(i);

                ScrollTrigger.create({
                    trigger: section,
                    animation: fadeShow,
                    once: true,
                    start: "top center",
                    //markers: true,
                    toggleActions: 'play none none none',
                });
            })
        });

        const sections = document.querySelectorAll(".sectionFade");

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.1 && e.classList.add("active")
            })
        }

        scrollAnimate();
        window.addEventListener("scroll", scrollAnimate);

        return () => ctx.revert();
    }, [])

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

            <Flex borderTop="3px solid" borderColor="rgba(255,255,255,0.1)" w="100%" pos="relative" bg="linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);">
                <Flex pos="absolute" zIndex={-1} top="0" left="0" overflow={"hidden"} h="90vh" maxH="940px" w="100%">
                    <HStack id="aboutPhotosTranslate" spacing="0">
                        <Img src="./rahin.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" h={isMobileVersion ? "90vh" : "auto"} maxW={isMobileVersion ? "none" : "600px"}/>    
                        <Img src="./mateus.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" maxW={isMobileVersion ? "none" : "650px"}/>    
                        <Img src="./ana.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" maxW={isMobileVersion ? "none" : "650px"}/>    
                        <Img src="./rahin2.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" maxW={isMobileVersion ? "none" : "650px"}/>    
                        <Img src="./mateus2.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" maxW={isMobileVersion ? "none" : "650px"}/>    
                        <Img src="./ana2.webp" border={"2px solid"} borderColor="rgba(255,255,255,0.1)" maxW={isMobileVersion ? "none" : "650px"}/>    
                    </HStack>
                </Flex>

                <Stack className="section" px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h={["100vh","90vh","90vh","90vh"]} maxH="940px" pos="relative">
                    <Stack spacing="14" pos="absolute" bottom="9%" >
                        {/* pt={isMobileVersion ? "48" : "0"} */}
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
                <Stack className="section" px="6" w="100%" maxW="1200px" m="0 auto" py="40" spacing="14" pos="relative" alignItems={"center"} direction={["column", "column", "row", "row"]}>
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
                        <Img src="./equipe.webp" />


                    </Stack>
                    <Stack spacing="14" w={["100%", "100%", "50%", "50%"]}>
                        <Stack maxW="600px" spacing="10">
                            <ColoredTag>Sua Equipe</ColoredTag>
                            <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Estamos prontos para te auxiliar com mais</Heading>
                        </Stack>

                        <Stack spacing="20" pos="relative">
                            <Stack direction={["column", "column", "row", "row"]}>
                                <Stack role="group" bg="rgba(255,255,255,0.1)" p="6" w="100%" maxW={isMobileVersion ? "100%" : "190px"} h="170px" spacing="0" borderRadius={"3"} pos="relative" overflow={"hidden"}>
                                    <Box pos="absolute" bg="gradient" opacity="0" transition="all ease .5s" _groupHover={{opacity: 1}} top="0" bottom="0" left="0" right="0"/>
                                    <Stack spacing="3" zIndex={1}>
                                        <Icon as={Zap} color="white" fontSize={"20px"}/>
                                        <Text fontSize={"xl"} color="white">Criatividade</Text>
                                    </Stack>
                                </Stack>
                                <Stack role="group" bg="rgba(255,255,255,0.1)" p="6" w="100%" maxW={isMobileVersion ? "100%" : "190px"} h="170px" spacing="0" borderRadius={"3"} pos="relative" overflow={"hidden"}>
                                    <Box pos="absolute" bg="gradient" opacity="0" transition="all ease .5s" _groupHover={{opacity: 1}} top="0" bottom="0" left="0" right="0"/>
                                    <Stack spacing="3" zIndex={1}>
                                        <Icon as={Lamp} fill="white" fontSize={"20px"}/>
                                        <Text fontSize={"xl"} color="white">Ideias</Text>
                                    </Stack>
                                </Stack>
                                <Stack role="group" bg="rgba(255,255,255,0.1)" p="6" w="100%" maxW={isMobileVersion ? "100%" : "190px"} h="170px" spacing="0" borderRadius={"3"} pos="relative" overflow={"hidden"}>
                                    <Box pos="absolute" bg="gradient" opacity="0" transition="all ease .5s" _groupHover={{opacity: 1}} top="0" bottom="0" left="0" right="0"/>
                                    <Stack spacing="3" zIndex={1}>
                                        <Icon as={Tool} color="white" fontSize={"20px"}/>
                                        <Text fontSize={"xl"} color="white">Soluções</Text>
                                    </Stack>
                                </Stack>
                                {/* <Text>Mais criatividade.</Text>
                                <Text>Mais ideias.</Text>
                                <Text>Mais olhar crítico.</Text>
                                <Text>Mais soluções.</Text> */}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Flex>

            <Flex className="letsTalk" bg="#000" flexDir="column" pos="relative">
                <Flex pos="absolute" top="100px" bottom="0" left="0" right="0">
                    <BgAngles/>
                </Flex>
                <Stack className="section" zIndex={1} px="6" w="100%" maxW="1200px" m="0 auto" py="40" pb="56" spacing="14" h="80vh" pos="relative" textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    
                    <Stack spacing="6">
                        <ColoredTag>Para começar</ColoredTag>
                        <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Vamos falar sobre o seu projeto?</Heading>
                    </Stack>
                    <MainButton leftIcon={<Icon as={Whatsapp}/>} onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551991090700&text=Olá Mateus!\nGostaria de conversar sobre o meu projeto.`, '_blank')}>Whatsapp</MainButton>
                </Stack>
            </Flex>

            <Footer/>
        </Flex>
    )
}