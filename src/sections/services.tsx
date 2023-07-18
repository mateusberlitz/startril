import { Box, Button, Flex, HStack, Heading, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { OutlineButton } from "../components/Buttons/OutlineButton";
import { useRouter } from "next/router";

import DevIcon from '../../public/dev.svg';
import AdsIcon from '../../public/ads.svg';
import Ui from '../../public/ui.svg';
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";
import { ArrowRight, ArrowUpRight } from "react-feather";
import Link from "next/link";

export function Services(){
    const router = useRouter();
    let timer: ReturnType<typeof setTimeout>;

    const firstLoadingBar = useRef(null);
    const secondLoadingBar = useRef(null);
    const thirdLoadingBar = useRef(null);

    const [activeItem, setActiveItem] = useState(1);

    useEffect(() => {
        const sections = document.querySelectorAll(".sectionFade");

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.1 && e.classList.add("active")
            })
        }

        scrollAnimate()
        window.addEventListener("scroll", scrollAnimate);
        
        timer = setTimeout(() => {
            switchService()
        }, 9000)
    }, []);

    const handleSwitchService = (item?: number) => {

        if(item){
            window.clearTimeout(timer);
            setActiveItem(item);
        }
    }

    const switchService = () => {
        if(activeItem == 1){
            setActiveItem(activeItem + 1);
            //document.getElementsByClassName("loadingServiceBar")[0].classList.remove("loadingServiceBar");
            //document.getElementsByClassName("loadBar2")[0].classList.add("loadingServiceBar");
        }else if(activeItem == 2){
            setActiveItem(activeItem + 1);
            //document.getElementsByClassName("loadingServiceBar")[0].classList.remove("loadingServiceBar");
            //document.getElementsByClassName("loadBar3")[0].classList.add("loadingServiceBar");
        }else{
            setActiveItem(1);
            //document.getElementsByClassName("loadingServiceBar")[0].classList.remove("loadingServiceBar");
            //document.getElementsByClassName("loadBar1")[0].classList.add("loadingServiceBar");
        }
    }

    useEffect(() => {
        timer = setTimeout(() => {
            switchService()
        }, 9000)
    }, [activeItem, switchService])

    return(
        <Flex w="100%" bg="#080510" overflow="hidden" pos="relative" pt="20">
            <Stack id="services" px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="0" spacing="20" direction={["column", "column", "row", "row"]} alignItems={""}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" justifyContent={"center"} className="sectionFade">
                        <Stack spacing="6">
                            <TextTag>O Trabalho</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>Soluções digitais para:</Heading>

                        <Stack spacing={["6","6","4","4","4","10"]}>
                            <HStack onClick={() => handleSwitchService(1)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 1 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 1 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
                                <Box pos="absolute" bg="gradient" left="0" right="0" top="0" bottom="0" opacity={activeItem === 1 ? "1" : "0"} _groupHover={{opacity: "0.5"}} transition="all ease .5s"/>
                                <HStack spacing="8" zIndex={1}>
                                    <Flex filter={activeItem === 1 ? "brightness(15)" : "brightness(1)"}>
                                        <Icon as={Ui} fontSize={"40px"}/>
                                    </Flex>
                                    {/* <Ui/> */}
                                    <Text>UI/UX Design</Text>
                                </HStack>
                                <Flex zIndex={1}>
                                    <ArrowRight/>
                                </Flex>
                            </HStack>

                            <HStack onClick={() => handleSwitchService(2)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 2 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 2 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
                                <Box pos="absolute" bg="gradient" left="0" right="0" top="0" bottom="0" opacity={activeItem === 2 ? "1" : "0"} _groupHover={{opacity: "0.5"}} transition="all ease .5s"/>
                                <HStack spacing="8" zIndex={1}>
                                    <Flex filter={activeItem === 2 ? "brightness(15)" : "brightness(1)"}>
                                        <Icon as={AdsIcon} fontSize={"40px"}/>
                                    </Flex>
                                    {/* <Ui/> */}
                                    <Text>Tráfego pago</Text>
                                </HStack>
                                <Flex zIndex={1}>
                                    <ArrowRight/>
                                </Flex>
                            </HStack>

                            <HStack onClick={() => handleSwitchService(3)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 3 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 3 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
                                <Box pos="absolute" bg="gradient" left="0" right="0" top="0" bottom="0" opacity={activeItem === 3 ? "1" : "0"} _groupHover={{opacity: "0.5"}} transition="all ease .5s"/>
                                <HStack spacing="8" zIndex={1}>
                                    <Flex filter={activeItem === 3 ? "brightness(15)" : "brightness(1)"}>
                                        <Icon as={DevIcon} fontSize={"40px"}/>
                                    </Flex>
                                    {/* <Ui/> */}
                                    <Text>Desenvolvimento</Text>
                                </HStack>
                                <Flex zIndex={1}>
                                    <ArrowRight/>
                                </Flex>
                            </HStack>
                        </Stack>
                    </Stack>

                    <Stack w={["100%", "100%", "45%", "45%"]} pos="absolute" pr={["6", "6", "6" , "6" , "6" , "20"]} top={430-(activeItem*360)} zIndex={2} right="0" textAlign={"right"} justifyContent={"right"} alignItems={"flex-end"} transition="all ease .5s">
                        
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 1 ? "visible" : "hidden"} opacity={activeItem === 1 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="white" fontSize={"2xl"}>Design de</Heading>
                                <Heading color="purple.500" fontSize={"2xl"}>Interfaces</Heading>
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Desenvolvemos telas coerentes para proporcionar a melhor experiência aos seus usuários, com o objetivo de transmitir de forma correta as ideias e sensações da sua marca.</Text>     
                        
                            <Link href="/design">
                                <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                            </Link>
                        </Stack> 
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 2 ? "visible" : "hidden"} opacity={activeItem === 2 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="blue.400" fontSize={"2xl"}>Tráfego</Heading>
                                <Heading color="white" fontSize={"2xl"}>pago</Heading>
                                {/* <Heading color="purple.500" fontSize={"2xl"}>Interfaces</Heading> */}
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Posicionamos e direcionamos a sua empresa ao público certo, para impulsionar as suas vendas e visibilidade pelos meios digitais.</Text>     
                        
                            <Link href="/trafego">
                                <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                            </Link>
                        </Stack>
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 3 ? "visible" : "hidden"} opacity={activeItem === 3 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="white" fontSize={"2xl"}>Desenvolvimento</Heading>
                                
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Programamos a sua plataforma digital com todas as interações e transações necessárias para interligar a sua equipe ao seu consumidor final, sempre com alta performance e segurança.</Text>     
                        
                            <Link href="/desenvolvimento">
                                <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                            </Link>
                        </Stack>
                    </Stack>

                    <Stack w={["100%", "100%", "45%", "45%"]} maxW="700px" zIndex={1} pos="absolute" right="0" visibility={activeItem === 1 ? "visible" : "hidden"} opacity={activeItem === 1 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./ana_job.webp"} w="100%"/>
                        <Text fontSize={"11px"} pt="8" pos="absolute" bottom="50px" right="6">Ana Maria Almeida</Text>
                        <Box w="92%" px="7" pos="absolute" bottom="20px">
                            <Box pos="absolute" w="100%" h="2px" bg="rgba(255,255,255,0.2)"/>
                            <Box ref={firstLoadingBar} className={activeItem === 1 ? "loadingServiceBar" : ""} pos="absolute" w={"0%"} transition="width linear 9s" h="2px" bg="rgba(255,255,255,0.8)"/>
                        </Box>
                    </Stack>
                    <Stack w={["100%", "100%", "45%", "45%"]} maxW="700px" zIndex={1} pos="absolute" right="0" visibility={activeItem === 2 ? "visible" : "hidden"} opacity={activeItem === 2 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./rahin_job.webp"} w="100%"/>
                        <Text fontSize={"11px"} pt="8" pos="absolute" bottom="50px" right="6">Rahin Molter</Text>

                        <Box w="92%" px="7" pos="absolute" bottom="20px">
                            <Box pos="absolute" w="100%" h="2px" bg="rgba(255,255,255,0.2)"/>
                            <Box ref={secondLoadingBar} className={activeItem === 2 ? "loadingServiceBar" : ""} pos="absolute" w="0%" h="2px" bg="rgba(255,255,255,0.8)"/>
                        </Box>
                    </Stack>
                    <Stack w={["100%", "100%", "45%", "45%"]} maxW="700px" zIndex={1} pos="absolute" right="0" visibility={activeItem === 3 ? "visible" : "hidden"} opacity={activeItem === 3 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./guris_job.webp"} w="100%"/>
                        <Text fontSize={"11px"} pt="8" pos="absolute" bottom="50px" right="6">Mateus Berlitz e Rahin Molter</Text>

                        <Box w="92%" px="7" pos="absolute" bottom="20px">
                            <Box pos="absolute" w="100%" h="2px" bg="rgba(255,255,255,0.2)"/>
                            <Box ref={thirdLoadingBar} className={activeItem === 3 ? "loadingServiceBar" : ""} pos="absolute" w="0%" h="2px" bg="rgba(255,255,255,0.8)"/>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}