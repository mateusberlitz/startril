import { Box, Button, Flex, Heading, HStack, Icon, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
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
import Image from 'next/image';
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
                markers: true,
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
                markers: true,
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
                markers: true,
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
                <Header/>

                <Flex pos="absolute" zIndex={-1} w='100%' top={isWideVersion ? "-215px" : "0px"}>
                    <HomeBackground/>
                </Flex>

                <Stack w={["100%", "100%", "35%", "22%" , "37%"]} h="100vh" pos="absolute" right="0">
                    <Flex pos="absolute" bottom="0" top="0" left="0" right="0" justifyContent={"left"} margin="0 auto">
                        <Box pos="absolute" bg="gradient" h="100%" w={"45px"} filter="blur(73px)"/>
                        <Box pos="absolute" bg="gradient" h="100%" w={"3px"}/>
                    </Flex>
                </Stack>

                <Flex w="100%" id="adsIntro">
                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="32">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                            <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Aumente a visibilidade, suas conversões e vendas</Heading>
                                <Text color="gray.300">Destaque-se na internet, demonstre a sua autoridade e crie conexão com os seus clientes.</Text>

                                <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button>
                                </HStack>
                            </Stack>
                            
                            <Stack id="adsAnimation" w={["100%", "100%", "50%", "50%"]} h="100%" pos="relative" zIndex={999} height="auto">
                                <Flex pos="absolute" bottom="" top="0" justifyContent={"center"} margin="0 auto">
                                    <Flex bottom="0">
                                        <AdsAnimation/>
                                    </Flex>
                                </Flex>
                            </Stack>

                            
                        </Stack>

                        <Flex direction="column">
                            <Flex zIndex={99} id="adsDash">
                                <Image src="/google_ads_dash.png" width={1426} height={721} alt="Gerenciamento de Google Ads"/>
                            </Flex>

                            <Flex zIndex={999} id="faceDash" mt="-300px" p="20">
                                <Image src="/face_dash.png" width={1426} height={721} alt="Gerenciamento de Google Ads"/>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>O que é</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Cativar, relacionar e converter</Heading>
                                <Text color="gray.500">Não deixe os seus resultados serem prejudicados por não estar atualizado! Transferimos a sua empresa para o digital!</Text>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>ELEVE O SUCESSO DA SUA MARCA</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Descubra as vantagens desse investimento</Heading>
                                <Text color="gray.500">Esse serviço oferece a oportunidade de impulsionar o crescimento do seu negócio de forma rápida e direcionada, permitindo que você atinja seu público-alvo de maneira eficiente e mensurável.</Text>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

            </Flex>
        </Flex>

        <Footer />
        
    </Box>
  )
}
