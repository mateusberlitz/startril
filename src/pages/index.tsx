import { Box, Button, Flex, Heading, HStack, Icon, Stack, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react'
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
import { VideoSection } from '../sections/videoSection';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const router = useRouter();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    const {toggleColorMode, colorMode } = useColorMode();

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
        if(colorMode === "light"){
            toggleColorMode();
        }

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
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver soluções</Button>
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

                <VideoSection/>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Product Design</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Desenvolvemos o seu produto digital</Heading>
                                
                                {
                                    !isWideVersion && (
                                        <Stack w="100%">
                                            <ProductAnimationMobile/>
                                        </Stack>
                                    )
                                }
                                
                                <Text color="gray.500">Construímos junto com você o seu negócio dentro do digital, como um e-commerce, SaaS, aplicativo, e entre outros.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís! Tenho o interesse em desenvolver um sistema personalizado que atenda às demandas específicas da minha empresa.`, '_blank')}>
                                    Desenvolva o seu
                                </MainButton>
                            </Stack>

                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion && (
                                        <ProductAnimation/>
                                    ) 
                                }
                            </HStack>
                        </Stack>

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
                                    <TextTag>Sites Incríveis</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Criamos sites como ninguém</Heading>
                                
                                
                                {
                                    !isWideVersion && (
                                        <Stack w="100%">
                                            <SiteAnimation/>
                                        </Stack>
                                    )
                                }
                                
                                <Text color="gray.500">Podemos criar tudo aquilo que for necessário para engajar o usuário dentro do seu site, entendemos ele como ninguém e entregamos as melhores funcionalidades. Sites desenvolvidos por nós só conhecem alta velocidade e performance.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís!\nGostaria de criar meu site personalizado e feito a mão.Olá Mateus! Estou interessado em desenvolver um site personalizado e exclusivo, criado sob medida para atender às minhas necessidades.`, '_blank')}>
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
                                
                                {
                                    !isWideVersion && (
                                        <Stack>
                                            <AdsAnimationMobile/>
                                        </Stack>
                                    ) 
                                }
                                <Text color="gray.500">Posicionamos estrategicamente o seu negócio no digital para ter o maior alcance ao público alvo, aumentando suas vendas e engajamento para sua marca. Com maior visibilidade, atraia novos clientes e fortaleça o relacionamento com os atuais.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fontSize={"16px"}/>} 
                                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís! Estou interessado em investir estrategicamente em tráfego pago para potencializar o reconhecimento da minha marca e impulsionar o crescimento do meu negócio.`, '_blank')}>
                                        Invista agora
                                </MainButton>
                            </Stack>

                            <HStack>
                                {
                                    isWideVersion && (
                                        <AdsAnimation/>
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
