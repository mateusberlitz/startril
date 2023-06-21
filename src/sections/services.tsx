import { Box, Button, Flex, HStack, Heading, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { OutlineButton } from "../components/Buttons/OutlineButton";
import { useRouter } from "next/router";

import DevIcon from '../../public/dev.svg';
import AdsIcon from '../../public/ads.svg';
import Ui from '../../public/ui.svg';
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";
import { ArrowRight, ArrowUpRight } from "react-feather";

export function Services(){
    const router = useRouter();

    const [activeItem, setActiveItem] = useState(1);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const timeline = gsap.timeline({
    //             repeat: -1,
    //             repeatDelay: 2,
    //             yoyo:true
    //         });

    //         timeline
    //         .to("#light1", {
    //             delay: 0.5,
    //             duration: 2,
    //             xPercent: 200,
    //             yPercent: 800,
    //         })
    //         .to("#light1", {
    //             delay: 0.5,
    //             duration: 2,
    //             xPercent: 750,
    //             yPercent: 500,
    //         })
    //         .to("#light1", {
    //             duration: 2,
    //             delay: 0.5,
    //             xPercent: 1250,
    //             yPercent: 350,
    //         })
    //         .to("#light1", {
    //             duration: 2,
    //             delay: 0.5,
    //             xPercent: 1750,
    //             yPercent: 900,
    //         })
    //         .to("#light1", {
    //             duration: 2,
    //             delay: 0.4,
    //             xPercent: 2750,
    //             yPercent: 300,
    //         })
    //         .to("#light1", {
    //             duration: 2,
    //             delay: 0.4,
    //             xPercent: 2750,
    //             yPercent: 700,
    //         })
    //     });
    // }, []);

    return(
        <Flex w="100%" bg="#080510" overflow="hidden" pos="relative">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="0" spacing="20" direction={["column", "column", "row", "row"]} alignItems={""}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" justifyContent={"center"}>
                        <Stack spacing="6">
                            <TextTag>O Trabalho</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>Soluções digitais para:</Heading>

                        <Stack spacing={["6","6","4","4","4","10"]}>
                            <HStack onClick={() => setActiveItem(1)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 1 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 1 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
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

                            <HStack onClick={() => setActiveItem(2)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 2 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 2 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
                                <Box pos="absolute" bg="gradient" left="0" right="0" top="0" bottom="0" opacity={activeItem === 2 ? "1" : "0"} _groupHover={{opacity: "0.5"}} transition="all ease .5s"/>
                                <HStack spacing="8" zIndex={1}>
                                    <Flex filter={activeItem === 2 ? "brightness(15)" : "brightness(1)"}>
                                        <Icon as={Ui} fontSize={"40px"}/>
                                    </Flex>
                                    {/* <Ui/> */}
                                    <Text>UI/UX Design</Text>
                                </HStack>
                                <Flex zIndex={1}>
                                    <ArrowRight/>
                                </Flex>
                            </HStack>

                            <HStack onClick={() => setActiveItem(3)} pos="relative" className="serviceItem" role="group" border="1px solid" borderColor={activeItem === 3 ? "transparent" : "rgba(255,255,255,0.1)"} color={activeItem === 3 ? "white" : ""} bg={"transparent"} w="100%" justifyContent={"space-between"} p="4" px="6" cursor={"pointer"} _hover={{borderColor: "transparent", color: "white", transition: "all ease .5s"}} transition="all ease .5s">
                                <Box pos="absolute" bg="gradient" left="0" right="0" top="0" bottom="0" opacity={activeItem === 3 ? "1" : "0"} _groupHover={{opacity: "0.5"}} transition="all ease .5s"/>
                                <HStack spacing="8" zIndex={1}>
                                    <Flex filter={activeItem === 3 ? "brightness(15)" : "brightness(1)"}>
                                        <Icon as={Ui} fontSize={"40px"}/>
                                    </Flex>
                                    {/* <Ui/> */}
                                    <Text>UI/UX Design</Text>
                                </HStack>
                                <Flex zIndex={1}>
                                    <ArrowRight/>
                                </Flex>
                            </HStack>
                        </Stack>
                    </Stack>

                    <Stack w={["100%", "100%", "45%", "45%"]} pos="absolute" pr={["6", "6", "6" , "6" , "6" , "20"]} top={360-(activeItem*360)} zIndex={2} right="0" textAlign={"right"} justifyContent={"right"} alignItems={"flex-end"} transition="all ease .5s">
                        
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 1 ? "visible" : "hidden"} opacity={activeItem === 1 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="white" fontSize={"2xl"}>Design de</Heading>
                                <Heading color="purple.500" fontSize={"2xl"}>Interfaces</Heading>
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>     
                        
                            <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                        </Stack> 
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 2 ? "visible" : "hidden"} opacity={activeItem === 2 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="white" fontSize={"2xl"}>Tráfego pago</Heading>
                                {/* <Heading color="purple.500" fontSize={"2xl"}>Interfaces</Heading> */}
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Produzimos artes, publicações e anúncios que criam conectividade com o seu público alvo, assim acelerando os seus resultados e crescimento.</Text>     
                        
                            <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                        </Stack>
                        <Stack maxW="300px" h="360px" pt="20" spacing="5" justifyContent={"right"} visibility={activeItem === 3 ? "visible" : "hidden"} opacity={activeItem === 3 ? "1" : 0} transition="all ease .5s">
                            <HStack justifyContent={"right"} alignItems={"flex-end"} pt="16">
                                <Heading color="white" fontSize={"2xl"}>Desenvolvimento</Heading>
                                {/* <Heading color="purple.500" fontSize={"2xl"}>Interfaces</Heading> */}
                            </HStack>
                            <Text color="white" fontWeight={"regular"} maxW="280px">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>     
                        
                            <Button alignSelf={"flex-end"} rightIcon={<Icon as={ArrowUpRight}/>} w="fit-content" p="0" pt="10" bg="transparent" color="white" _hover={{bg: "transparent"}} _focus={{bg: "transparent"}}>Explorar agora</Button>
                        </Stack>
                    </Stack>

                    <Stack w={["100%", "100%", "45%", "45%"]} zIndex={1} pos="absolute" right="0" visibility={activeItem === 1 ? "visible" : "hidden"} opacity={activeItem === 1 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./ana_job.jpg"} w="100%"/>
                    </Stack>
                    <Stack w={["100%", "100%", "45%", "45%"]} zIndex={1} pos="absolute" right="0" visibility={activeItem === 2 ? "visible" : "hidden"} opacity={activeItem === 2 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./rahin_job.jpg"} w="100%"/>
                    </Stack>
                    <Stack w={["100%", "100%", "45%", "45%"]} zIndex={1} pos="absolute" right="0" visibility={activeItem === 3 ? "visible" : "hidden"} opacity={activeItem === 3 ? "1" : 0} transition="all ease .5s">
                        <Img transition="all ease .5s" src={"./guris_job.jpg"} w="100%"/>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}