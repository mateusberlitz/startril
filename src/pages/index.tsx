import { Box, Button, Flex, Heading, HStack, Icon, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import { MainButton } from '../components/Buttons/MainButton'
import { Header } from '../components/Header'

import { TextTag } from '../components/TextTag';
import { ColoredTag } from '../components/ColoredTag';
import { StarDivider } from '../components/StarDivider';

import PeopleIcon from '../../public/people_logo.svg';
import HomeBackground from '../../public/home.svg';
import React from '../../public/react.svg';
import StartrilIcon from '../../public/icone_startril.svg';
import { ArrowUpRight, PlayCircle } from 'react-feather';


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

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { FaqCenter } from '../sections/faqCenter';
import { Loader } from '../components/Loader';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const router = useRouter();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    // useEffect(() => {

    //     const ctx = gsap.context(() => {
    //         const sections = gsap.utils.toArray<HTMLElement>('.sectionFade');

    //         console.log(sections);

    //         sections.forEach((section, i) => {
    //             const fadeShow = gsap.fromTo(section, { 
    //                 autoAlpha: 0,
    //                 y: 50
    //             }, { 
    //                 autoAlpha: 1,
    //                 y: 0
    //             });

    //             console.log(i);

    //             ScrollTrigger.create({
    //                 trigger: section,
    //                 animation: fadeShow,
    //                 once: true,
    //                 start: "top center",
    //                 //markers: true,
    //                 toggleActions: 'play none none none',
    //                 //toggleClass: 'active'
    //             });
    //         })
    //     });

    //     return () => ctx.revert();
    // }, []);

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

        //setFirstLoad(false);
        
        const storedBriefingLead = localStorage.getItem('@startril/load');
        console.log(storedBriefingLead);

        if(storedBriefingLead && storedBriefingLead != undefined){
            setFirstLoad(false);
        }
    }, []);

  return (
    <Box pos="relative" className='main'>
        <Head>
            <title>Startril</title>
            <meta name="description" content="Transformamos seu negócio com sites, anúncios e design" />
            <link rel="icon" href="/icone_startril.svg" />
        </Head>

        {
            firstLoad && (
                <Loader />
            )
        }

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                <Header/>

                <Flex pos="absolute" zIndex={-1} w='100%' top={isWideVersion ? "-215px" : "0px"}>
                    <HomeBackground/>
                </Flex>

                <Flex w="100%" pos="relative">
                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="0">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                            <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Criamos o fundamental para aqueles que almejam destaque!</Heading>
                                <Text color="gray.300">Destaque-se na internet, demonstre a sua autoridade e crie conexão com os seus clientes.</Text>

                                <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button>
                                </HStack>
                            </Stack>
                            <Stack w={["100%", "100%", "50%", "50%"]}>
                                <PeopleIcon />
                            </Stack>
                        </Stack>

                        <Flex>
                            <HStack>

                            </HStack>
                        </Flex>
                    </Stack>
                </Flex>

                <Purpose/>

                {
                    isWideVersion ? (
                        <Services/>
                    ):(
                        <ServicesBox/>
                    )
                }

                <OurWork/>

                <Customers/>

                <ListMethodsHorizontal/>

                {/* _hover={{cursor:"url(./play_cursor.png), auto"}} cursos player */}

                <Flex borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={"center right"}>
                    <Flex pos="absolute" top="0" left="0" bottom="0" right="0" bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 75.68%);">
                        {/* <Img src="./mateus_video.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/> */}
                    </Flex>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h={["90vh", "90vh", "90vh", "100vh", "95vh"]} maxH="940px" pos="relative" justifyContent={"center"}>
                        <Stack spacing="14" className="sectionFade">
                            {/* <PlayCircle/> */}
                            <Stack maxW="500px" spacing="10">
                                <ColoredTag>Cenário atual</ColoredTag>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>É necessário se destacar</Heading>
                            </Stack>

                            <Stack spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                                <Stack w={["100%", "100%", "50%", "50%"]}>
                                    <Text>
                                        Destaque-se da concorrência em um mercado cada vez mais competitivo, atraindo um número crescente de clientes. Sobressaia-se ao evidenciar seus diferenciais exclusivos, conquiste a admiração e a confiança por meio da implementação de estratégias digitais eficazes e automação inteligente em suas operações.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Product Design</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Desenvolvemos o seu produto digital</Heading>
                                <Text color="gray.500">Construímos junto com você o seu negócio dentro do digital, como um e-commerce, SaaS, aplicativo, e entre outros.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551991090700&text=Olá Mateus! Tenho o interesse em desenvolver um sistema personalizado que atenda às demandas específicas da minha empresa.`, '_blank')}>
                                    Desenvolva o seu
                                </MainButton>
                            </Stack>

                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion ? (
                                        <ProductAnimation/>
                                    ) : (
                                        <ProductAnimationMobile/>
                                    )
                                }
                            </HStack>
                        </Stack>

                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion ? (
                                        <SiteAnimation/>
                                    ) : (
                                        //<SiteAnimationMobile/>
                                        //<Box/>
                                        <SiteAnimation/>
                                    )
                                }
                            </HStack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Sites Incríveis</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Criamos sites como ninguém</Heading>
                                <Text color="gray.500">Podemos criar tudo aquilo que for necessário para engajar o usuário dentro do seu site, entendemos ele como ninguém e entregamos as melhores funcionalidades. Sites desenvolvidos por nós só conhecem alta velocidade e performance.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551991090700&text=Olá Mateus!\nGostaria de criar meu site personalizado e feito a mão.Olá Mateus! Estou interessado em desenvolver um site personalizado e exclusivo, criado sob medida para atender às minhas necessidades.`, '_blank')}>
                                    Crie o seu
                                </MainButton>
                            </Stack>
                        </Stack>

                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Tráfego Pago</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Aumente suas vendas e engajamento fazendo anúncios</Heading>
                                <Text color="gray.500">Posicionamos estrategicamente o seu negócio no digital para ter o maior alcance ao público alvo, aumentando suas vendas e engajamento para sua marca. Com maior visibilidade, atraia novos clientes e fortaleça o relacionamento com os atuais.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>} 
                                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551991090700&text=Olá Mateus! Estou interessado em investir estrategicamente em tráfego pago para potencializar o reconhecimento da minha marca e impulsionar o crescimento do meu negócio.`, '_blank')}>
                                        Invista agora
                                </MainButton>
                            </Stack>

                            <HStack>
                                {
                                    isWideVersion ? (
                                        <AdsAnimation/>
                                    ) : (
                                        <AdsAnimationMobile/>
                                    )
                                }
                            </HStack>
                        </Stack>
                    </Stack>
                </Flex>

                <FaqCenter/>

                <StartNow/>
            </Flex>
        </Flex>

        {/* <Flex w="100%" maxW="1200px" m="0 auto" px="8" py="20" flexDirection="row" mb="14">
            <Heading color="white" fontSize="6xl" fontWeight={"regular"}>Desenvolvemos Sites, Aplicações e Design para o seu objetivo.</Heading>

        </Flex> */}
        <Footer />
        
    </Box>
  )
}
