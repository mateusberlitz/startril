import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
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
import AdsTargetMobile from '../../public/ads_target_mobile.svg';
import { ArrowUpRight, Eye, PlayCircle } from 'react-feather';

import Star from '../../public/star.svg';
import HeartFlag from '../../public/heart-flag.svg';
import Leads from '../../public/leads.svg';
import Sale from '../../public/sale.svg';

import EyeGradient from '../../public/eye-gradient.svg';
import MessageGradient from '../../public/message-gradient.svg';
import CamGradient from '../../public/eye-gradient.svg';

import InstaIcon from '../../public/insta-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import FacebookIcon from '../../public/facebook-icon.svg';
import GoogleIcon from '../../public/google-icon.svg';
import YoutubeIcon from '../../public/youtube-icon.svg';
import TiktokIcon from '../../public/tiktok-icon.svg';

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
gsap.registerPlugin(ScrollTrigger);

export default function Trafego() {
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

        if(isWideVersion){
            const ctx = gsap.context(() => {
                // const progress = gsap.to("#adsAnimation", { 
                //     y: 900,
                //     ease: "none"
                // });
                
                // ScrollTrigger.create({
                //     trigger: "#adsIntro",
                //     scrub: true,
                //     start: "top top",
                //     animation: progress
                // });
    
                // const fadeUp = gsap.fromTo("#adsDash", { 
                //     y: 100,
                //     autoAlpha: 0
                // },{ 
                //     y: 0,
                //     autoAlpha: 1
                // });
                
                // ScrollTrigger.create({
                //     trigger: "#adsDash",
                //     //scrub: true,
                //     start: "top-=400px top",
                //     animation: fadeUp
                // });
    
                // const fadeUpFace = gsap.fromTo("#faceDash", { 
                //     y: 100,
                //     autoAlpha: 0
                // },{ 
                //     y: 0,
                //     autoAlpha: 1
                // });
                
                // ScrollTrigger.create({
                //     trigger: "#faceDash",
                //     //scrub: true,
                //     start: "top-=300px top",
                //     animation: fadeUpFace
                // });
            });
        }
    }, []);

  return (
    <Box pos="relative" className='main'>
        <Head>
            <title>Tráfego Pago - Startril</title>
            <meta name="description" content="Somos uma agência de tráfego pago que vai gerenciar e te encaminhar para alcançar grandes resultados em visibilidade e mais vendas com anúncios nas maiores plataformas." />
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
                        <Box pos="absolute" bg="gradient" h="50%" w={"45px"} filter="blur(73px)"/>
                        <Box pos="absolute" bg="gradient" h="50%" w={"3px"}/>
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
                                <Flex pos={isWideVersion ? "initial" : "initial"} bottom="" top="0" justifyContent={"center"} margin="0 auto">
                                    <Flex bottom="0">
                                        {
                                            isWideVersion ? (
                                                <AdsAnimation/>
                                            ) : (
                                                <Flex ml="-20px">
                                                    <AdsAnimationMobile/>
                                                </Flex>
                                            )
                                        }
                                    </Flex>
                                </Flex>
                            </Stack>
                        </Stack>

                        {/* {
                            isWideVersion && (
                                <Flex direction="column">
                                    <Flex zIndex={99} id="adsDash">
                                        <Image src="/google_ads_dash.png" width={1426} height={721} alt="Gerenciamento de Google Ads"/>
                                    </Flex>

                                    <Flex zIndex={999} id="faceDash" mt="-420px" p="20">
                                        <Image src="/face_dash.png" width={1426} height={721} alt="Gerenciamento de Google Ads"/>
                                    </Flex>
                                </Flex>
                            )
                        } */}
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>
                            <Stack w={["100%", "100%", "50%", "50%"]}>
                                <Img src="./dashboards.webp" zIndex={9} className="sectionFade" alt="Dashboards Google e Facebook ads"/>
                            </Stack>

                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>INVISTA EM</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Grandes empresas como suas aliadas</Heading>
                                <Text color="gray.500">Anuncie nas maiores redes sociais para alcançar o seu público alvo</Text>
                                <Stack spacing="8">
                                    <HStack spacing="8">
                                        <HStack>
                                            <InstaIcon/>
                                            <Text>Instagram</Text>
                                        </HStack>

                                        <HStack>
                                            <GoogleIcon/>
                                            <Text>Google</Text>
                                        </HStack>

                                        <HStack>
                                            <LinkedinIcon/>
                                            <Text>Linkedin</Text>
                                        </HStack>
                                    </HStack>

                                    <HStack spacing="8">
                                        <HStack>
                                            <FacebookIcon/>
                                            <Text>Facebook</Text>
                                        </HStack>

                                        <HStack>
                                            <YoutubeIcon/>
                                            <Text>Youtube</Text>
                                        </HStack>

                                        <HStack>
                                            <TiktokIcon/>
                                            <Text>Tiktok</Text>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </Stack>
                        </Stack>
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

                            <Stack w={["100%", "100%", "50%", "50%"]}>
                                {
                                            isWideVersion ? (
                                                <AdsTarget/>
                                            ) : (
                                                <AdsTargetMobile/>
                                            )
                                        }
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "column", "column"]}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>ELEVE O SUCESSO DA SUA MARCA</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Descubra as vantagens desse investimento</Heading>
                                <Text color="gray.500">Esse serviço oferece a oportunidade de impulsionar o crescimento do seu negócio de forma rápida e direcionada, permitindo que você atinja seu público-alvo de maneira eficiente e mensurável.</Text>
                            </Stack>

                            <Stack spacing="12" className="sectionFade">
                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Star/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Aumentar a relevância da marca</Text>
                                        </Stack>
                                        <Text>O tráfego pago aumenta a relevância do sua marca, garantindo que ela seja exibida para um público altamente segmentado, o que resulta em maior reconhecimento, credibilidade e conexão com seu público-alvo.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <HeartFlag/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Ganho de autoridade</Text>
                                        </Stack>
                                        <Text>Essa é uma poderosa estratégia para a construção de autoridade da sua marca, permitindo que ela se destaque diante da concorrência e seja reconhecida como uma referência no mercado.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>
                                </Stack>

                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Leads/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Amplie sua rede de contatos</Text>
                                        </Stack>
                                        <Text>Expanda sua base de clientes em potencial por meio de captura de leads e obtenção de informações valiosas.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Sale/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Conversões em vendas</Text>
                                        </Stack>
                                        <Text>Maximize suas vendas convertendo visitantes em clientes e impulsionando o crescimento do seu negócio.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>
                                </Stack>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} alignItems={"center"}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>Metodologia</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Estratégia eficaz e garantida</Heading>
                                <Text color="gray.500">Aplicamos a fórmula do sucesso com o tráfego pago e levamos seu negócio para o próximo nível.</Text>
                            </Stack>

                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]}>
                                <Stack spacing="8" w="100%">
                                    <HStack w="100%" spacing="0">
                                        <Flex w="100px" h="100px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                            <Text fontWeight={"bold"} color={'white'} fontSize={"56px"}>1</Text>
                                        </Flex>
                                        <Flex pl="10" bg="rgba(255,255,255,0.05)" h="100px" w="calc(100% - 100px)" alignItems={"center"}>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Estudo e estratégia</Text>
                                        </Flex>
                                    </HStack>

                                    <HStack w="100%" spacing="0">
                                        <Flex w="100px" h="100px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                            <Text fontWeight={"bold"} color={'white'} fontSize={"56px"}>2</Text>
                                        </Flex>
                                        <Flex pl="10" bg="rgba(255,255,255,0.05)" h="100px" w="calc(100% - 100px)" alignItems={"center"}>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Criação e organização</Text>
                                        </Flex>
                                    </HStack>

                                    <HStack w="100%" spacing="0">
                                        <Flex w="100px" h="100px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                            <Text fontWeight={"bold"} color={'white'} fontSize={"56px"}>3</Text>
                                        </Flex>
                                        <Flex pl="10" bg="rgba(255,255,255,0.05)" h="100px" w="calc(100% - 100px)" alignItems={"center"}>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Configurações</Text>
                                        </Flex>
                                    </HStack>

                                    <HStack w="100%" spacing="0">
                                        <Flex w="100px" h="100px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                            <Text fontWeight={"bold"} color={'white'} fontSize={"56px"}>4</Text>
                                        </Flex>
                                        <Flex pl="10" bg="rgba(255,255,255,0.05)" h="100px" w="calc(100% - 100px)" alignItems={"center"}>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Testes e aprimoramento</Text>
                                        </Flex>
                                    </HStack>
                                </Stack>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="40" pos="relative" direction={["column", "column", "column", "column"]}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>SEUS CLIENTES MAIS PRÓXIMOS</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Receba leads diretamente no seu canal ou plataforma</Heading>
                                <Text color="gray.500">Aproveite ao máximo suas oportunidades de negócio, capturando leads qualificados diretamente em sua plataforma e impulsionando o crescimento da sua empresa de forma eficiente.</Text>
                            </Stack>

                            <Stack className="sectionFade" pos="relative" spacing="12" w="100%" direction={["column", "column", "row", "row"]} justifyContent={"space-between"}>
                                <Stack spacing="5">
                                    <Stack direction={["row", "row", "column", "column"]} alignItems={!isWideVersion ? "center" : ""}>
                                        <Img src="/ads.png" w="120px" zIndex={1}/>
                                        <Text fontSize={"xl"} color="white" fontWeight={"semibold"} pl="2">Plataforma</Text>
                                    </Stack>
                                    <Stack pl={isWideVersion ? "2" : "32"} direction={["row", "row", "column", "column"]}>
                                        <Text>- Google Ads</Text>
                                        <Text>- Meta Ads</Text>
                                        <Text>- Linkedin</Text>
                                    </Stack>
                                </Stack>

                                <Stack spacing="5">
                                    <Stack direction={["row", "row", "column", "column"]} alignItems={!isWideVersion ? "center" : ""}>
                                        <Img src="/net.png" w="120px" zIndex={1}/>
                                        <Text fontSize={"xl"} color="white" fontWeight={"semibold"} pl="2">Seu site</Text>
                                    </Stack>
                                    <Stack pl={isWideVersion ? "2" : "32"} direction={["row", "row", "column", "column"]}>
                                        <Text>- Lead</Text>
                                        <Text>- Venda</Text>
                                        <Text>- Whatsapp</Text>
                                    </Stack>
                                </Stack>
                                <Stack spacing="5">
                                    <Stack direction={["row", "row", "column", "column"]} alignItems={!isWideVersion ? "center" : ""}>
                                        <Img src="/folder.png" w="120px" zIndex={1}/>
                                        <Text fontSize={"xl"} color="white" fontWeight={"semibold"} pl="2">Seu gerenciamento</Text>
                                    </Stack>
                                    <Stack pl={isWideVersion ? "2" : "32"} direction={["row", "row", "column", "column"]}>
                                        <Text>- E-mail</Text>
                                        <Text>- CRM</Text>
                                        <Text>- Planilhas</Text>
                                    </Stack>
                                </Stack>

                                {
                                    isWideVersion ? (
                                        <Box pos="absolute" w="82%" h="2px" bg="rgba(255,255,255,0.4)" top="21%" left="0"/>
                                    ) : (
                                        <Box pos="absolute" w="2px" h="80%" bg="rgba(255,255,255,0.4)" top="" left="14"/>
                                    )
                                }
                            </Stack>

                            <Stack className="sectionFade" pos="relative" spacing="12" w="100%" direction={["column", "column", "row", "row"]} justifyContent={"space-between"}>
                                <Stack w={["100%", "100%", "33%", "33%"]} spacing="6">
                                    <Flex h="55px" w="55px" bg="gradientBorder" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                        <Flex bg="black" h="53px" w="53px" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                            <Icon as={EyeGradient} fontSize={"30px"}/>
                                        </Flex>
                                    </Flex>
                                    <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Monitoramos as campanhas <br/>semanalmente</Text>
                                    <Text>Fazemos as as alterações e ajustes de melhoria</Text>
                                </Stack>

                                <Stack w={["100%", "100%", "33%", "33%"]} spacing="6">
                                    <Flex h="55px" w="55px" bg="gradientBorder" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                        <Flex bg="black" h="53px" w="53px" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                            <Icon as={MessageGradient} fontSize={"30px"}/>
                                        </Flex>
                                    </Flex>
                                    <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Conversas e <br/>consultorias</Text>
                                    <Text>Para alinhar feedbacks às estratégias</Text>
                                </Stack>

                                <Stack w={["100%", "100%", "33%", "33%"]} spacing="6">
                                    <Flex h="55px" w="55px" bg="gradientBorder" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                        <Flex bg="black" h="53px" w="53px" justifyContent={"center"} alignItems={"center"} borderRadius={"3"}>
                                            <Icon as={CamGradient} fontSize={"30px"}/>
                                        </Flex>
                                    </Flex>
                                    <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Alinhamento <br/>mensal</Text>
                                    <Text>Faremos uma videochamada para discussão do mês e planejamento do mês seguinte.</Text>
                                </Stack>
                            </Stack>
                        </Stack>
                            
                    </Stack>
                </Flex>

                <BePArt/>

            </Flex>
        </Flex>

        <Footer />
        
    </Box>
  )
}
