import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, Img, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import { MainButton } from '../components/Buttons/MainButton'
import { Header } from '../components/Header'

import { TextTag } from '../components/TextTag';
import { ColoredTag } from '../components/ColoredTag';
import { StarDivider } from '../components/StarDivider';

import PeopleIcon from '../../public/people_logo.svg';
import HomeBackground from '../../public/background_intro.svg';
import React from '../../public/react.svg';
import StartrilIcon from '../../public/icone_startril.svg';
import AdsTarget from '../../public/ads_target.svg';
import { ArrowUpRight, Eye, PlayCircle } from 'react-feather';

import Star from '../../public/star.svg';
import HeartFlag from '../../public/heart-flag.svg';
import Leads from '../../public/leads.svg';
import Sale from '../../public/sale.svg';

import Medal from '../../public/medal.svg';
import HandShake from '../../public/hand-shake.svg';
import ShieldCheck from '../../public/shield-check.svg';
import UserSwitch from '../../public/user-switch.svg';
import Brands from '../../public/brands.svg';

import { ProductAnimation } from '../components/ProductAnimation';
import { SiteAnimation } from '../components/SiteAnimation';
import { AdsAnimation } from '../components/AdsAnimation';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { Services } from '../sections/services';
import { ProductAnimationMobile } from '../components/ProductAnimation/ProductAnimationMobile';
import { AdsAnimationMobile } from '../components/AdsAnimation/AdsAnimationMobile';
import { Customers } from '../sections/customers';
import { Purpose } from '../sections/purpose';
import { OurWork } from '../sections/ourWork';
import { ListMethodsHorizontal } from '../sections/listMethodsHorizontal';
import { Faq } from '../sections/faq';
import { StartNow } from '../sections/startNow';
import { ServicesBox } from '../sections/servicesBox';
import { useEffect, useState } from 'react';
import Whatsapp from '../../public/whatsapp.svg';
import CustomersImage from '../../public/customers.svg';

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { FaqCenter } from '../sections/faqCenter';
import { Loader } from '../components/Loader';
import Image from 'next/image';
import { SolidButton } from '../components/Buttons/SolidButton';
import { BePArt } from '../sections/bePart';
import { StarTag } from '../components/StarTag';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const router = useRouter();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [firstLoad, setFirstLoad] = useState(true);

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
        
        const storedBriefingLead = localStorage.getItem('@startril/load');

        if(storedBriefingLead && storedBriefingLead != undefined){
            setFirstLoad(false);
        }

        const ctx = gsap.context(() => {
            const progress = gsap.to("#adsAnimation", { 
                y: 900,
                ease: "none"
            });
            
            ScrollTrigger.create({
                trigger: "#adsIntro",
                scrub: true,
                start: "top top",
                animation: progress
            });

            const fadeUp = gsap.fromTo("#adsDash", { 
                y: 100,
                autoAlpha: 0
            },{ 
                y: 0,
                autoAlpha: 1
            });
            
            ScrollTrigger.create({
                trigger: "#adsDash",
                //scrub: true,
                start: "top-=400px top",
                animation: fadeUp
            });

            const fadeUpFace = gsap.fromTo("#faceDash", { 
                y: 100,
                autoAlpha: 0
            },{ 
                y: 0,
                autoAlpha: 1
            });
            
            ScrollTrigger.create({
                trigger: "#faceDash",
                //scrub: true,
                start: "top-=300px top",
                animation: fadeUpFace
            });
        });
    }, []);

  return (
    <Box pos="relative" className='main'>
        <Head>
            <title>Startril</title>
            <meta name="description" content="Transformamos seu negócio com sites, sistemas, anúncios e design" />
            <link rel="icon" href="/icone_startril.svg" />
        </Head>

        {
            firstLoad && (
                <Loader />
            )
        }

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                

                {/* <Flex pos="absolute" zIndex={-1} w='100%' top={isWideVersion ? "-215px" : "0px"}>
                    <Img src="./mateus_video.jpg"/>
                </Flex> */}

                <Flex w="100%" direction={"column"} id="adsIntro" bgImage={"./mateus_video_black.jpg"} bgSize={"cover"} bgPos={isWideVersion ? "center top" : "-540px"}>
                    <Header/>

                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="32" h="80vh">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16" className="sectionFade">
                            <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>O Desenvolvimento de sites e sistemas em outro nível.</Heading>
                                <Text color="gray.300">Destaque-se na internet, demonstre a sua autoridade e crie conexão com os seus clientes.</Text>

                                <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button>
                                </HStack>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="20" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                                <ColoredTag>FEITO POR ESPECIALISTAS</ColoredTag>
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Escalamos um time competente para criar seu projeto.</Heading>
                                <Text color="gray.300">Tenha acesso a uma programação de excelência no desenvolvimento de sites, sistemas e plataformas, oferecendo soluções rápidas e tecnológicas de ponta para impulsionar sua presença online.</Text>

                                {/* <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button>
                                </HStack> */}
                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} minH="500px">
                                <Flex>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="#3BA1F0" filter="blur(120px)"/>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="#3BA1F0"/>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="linear-gradient(350deg, #17507C 0%, rgba(59, 161, 240, 0.00) 100%);"/>
                                </Flex>
                                <Img src="./laptop.webp" zIndex={9} className="sectionFade"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "column", "column"]}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>PROJETOS ESCALÁVEIS</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Com programadores especialistas</Heading>
                                <Text color="gray.500">Lorem ipsum dolor sit amet consectetur. Non amet viverra sem elementum duis enim ac sed ornare.</Text>
                            </Stack>

                            <Stack spacing="12" className="sectionFade">
                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <UserSwitch/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Entrega qualificada da informação</Text>
                                        </Stack>
                                        <Text>Um projeto com UX e técnicas avançadas de UI proporcionará uma experiência do usuário confortável, aumentando a probabilidade de seu cliente recomendar sua aplicação e retornar sempre.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <ShieldCheck/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Garantia de um uso prático</Text>
                                        </Stack>
                                        <Text>Uma aplicação difícil de utilizar, com problemas ou dificuldades para encontrar as informações é sempre motivo de descontentamento.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>
                                </Stack>

                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <HandShake/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Gere emoção e conexão com sua marca</Text>
                                        </Stack>
                                        <Text>Que criamos em conjunto dos nossos clientes, parceiros e pessoas que acreditaram no nosso trabalho.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <Medal/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>O que é único se destaca</Text>
                                        </Stack>
                                        <Text>Com a exclusividade das telas do seu projeto, a sua marca irá facilmente transmitir seu o objetivo e essência, assim se destacando da concorrência.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="32" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion && (
                                        <SiteAnimation/>
                                    ) 
                                }
                            </HStack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>FRONT MOTION</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Sua aplicação no próximo nível</Heading>
                                
                                
                                {
                                    !isWideVersion && (
                                        <Stack w="100%">
                                            <SiteAnimation/>
                                        </Stack>
                                    )
                                }
                                
                                <Text color="gray.500">Entregamos animações capazes de representar sua empresa e impactar ainda mais os seus clientes.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551991090700&text=Olá Mateus!\nGostaria de criar meu site personalizado e feito a mão.Olá Mateus! Estou interessado em desenvolver um site personalizado e exclusivo, criado sob medida para atender às minhas necessidades.`, '_blank')}>
                                    Crie o seu
                                </MainButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden" bgImage={"./chip_bg.webp"} bgSize={"cover"} bgPos={isWideVersion ? "center center" : "-540px"}>
                    <Stack px="6" w="100%" maxW="800px" m="0 auto" py="20" spacing="0">
                        <Stack pt="32" spacing="10" direction={["column", "column"]} className="sectionFade" alignItems={"center"} textAlign={"center"}>
                            <ColoredTag>FRONT MOTION</ColoredTag>
                            <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Criamos o desenvolvimento ideal para o seu negócio!</Heading>
                            <Text maxW="600px">Entregamos o seu projeto com o desenvolvimento necessário para realizar as funções que você precisa para o seu negócio alavancar.</Text>
                            <Stack alignItems={"center"} spacing="6">
                                <HStack spacing="6">
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>LANDING PAGE</StarTag>
                                        <StarTag>SITE INSTITUCIONAL</StarTag>
                                    </Stack>
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>E-COMMERCE</StarTag>
                                        <StarTag>PÁGINA DE VENDAS</StarTag>
                                    </Stack>
                                </HStack>
                                <HStack spacing="6">
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>SITE ONEPAGE</StarTag>
                                        <StarTag>PORTFÓLIO</StarTag>
                                    </Stack>
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>SISTEMAS</StarTag>
                                        <StarTag>BLOG</StarTag>
                                    </Stack>
                                </HStack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden" bgImage={"./chip_bg.webp"} bgSize={"cover"} bgPos={isWideVersion ? "center center" : "-540px"}>
                    <Flex direction="column" px="6" w="100%" maxW="1200px" m="0 auto" py="20" pt="32" alignItems={"center"}>
                        <Brands/>
                        <Stack maxW="800px" mt={["0","-6","-12"]} pt="0" spacing="10" direction={["column", "column"]} className="sectionFade" alignItems={"center"} textAlign={"center"}>
                            <ColoredTag>NOS INSPIRAMOS NAS</ColoredTag>
                            <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Tecnologia das Gigantes!</Heading>
                            <Text maxW="600px">Software é, e sempre será seu aliado no futuro. Por isso, não deixe de investir em uma boa base para continuar construindo.</Text>
                        </Stack>
                    </Flex>
                </Flex>

                <BePArt/>

            </Flex>
        </Flex>

        <Footer />
        
    </Box>
  )
}
