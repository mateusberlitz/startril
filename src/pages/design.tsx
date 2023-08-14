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
import Branding from '../../public/branding.svg';
import Asterisk from '../../public/asterisk.svg';

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
import UiBoards from '../../public/ui-boards-v2.svg';
import UiBoardsMobile from '../../public/ui-boards-mobile.svg';

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { FaqCenter } from '../sections/faqCenter';
import { Loader } from '../components/Loader';
import Image from 'next/image';
import { SolidButton } from '../components/Buttons/SolidButton';
import { BePArt } from '../sections/bePart';
import { StarTag } from '../components/StarTag';
import { OutlineButton } from '../components/Buttons/OutlineButton';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

export default function Design() {
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
            <title>Design - Startril</title>
            <meta name="description" content="Criamos o design de sites, sistemas e aplicativos. Trabalhamos conceitos de UX nas telas do seu projeto." />
            <link rel="icon" href="/icone_startril.svg" />
        </Head>

        {
            firstLoad && (
                <Loader />
            )
        }

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                

                <Flex pos="absolute" zIndex={-1} w='100%' top={isWideVersion ? "-215px" : "0px"}>
                    <HomeBackground/>
                </Flex>

                <Flex w="100%" direction={"column"} id="adsIntro">
                    <Header/>

                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="32">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16" className="sectionFade">
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Conquiste corações e fidelize seus clientes.</Heading>
                                <Text color="gray.300">Criamos o ambiente perfeito para que seus clientes acessem e adquiram seus produtos ou serviços sem complicações, gerando experiências incríveis que os motivam a recomendar a todos.</Text>

                                <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    {/* <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button> */}
                                </HStack>
                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                {
                                    isWideVersion ? (
                                        <UiBoards/>
                                    ) : (
                                        <UiBoardsMobile/>
                                    )
                                }
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="20" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                                <ColoredTag>TUDO O QUE SEU PROJETO PRECISA</ColoredTag>
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Alinhando experiência com sofisticação</Heading>
                                <Text color="gray.300">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>

                                {/* <HStack spacing="8">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>} onClick={() => router.push('/contato')}>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver serviços</Button>
                                </HStack> */}
                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} minH="500px">
                                <Flex>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="#7260DF" filter="blur(120px)"/>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="#7260DF"/>
                                    <Box h={isWideVersion ? "450px" : "350px"} w={isWideVersion ? "450px" : "350px"} pos="absolute" borderRadius="full" bg="linear-gradient(350deg, #2E2372 0%, rgba(59, 161, 240, 0.00) 100%, rgba(114, 96, 223, 0.00) 100%);"/>
                                </Flex>
                                <Img src="./uiux.webp" zIndex={9} className="sectionFade"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex id="" w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="10" spacing="20" pos="relative" direction={["column", "column", "column", "column"]}>
                            <Stack className="sectionFade" w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>Proporcione a melhor experiência</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Quais vantagens do UI & UX em um projeto?</Heading>
                                <Text color="gray.500">UI (Interface do Usuário) se concentra na aparência e interação visual de um produto, enquanto UX (Experiência do Usuário) trata da experiência geral do usuário ao interagir com o produto, visando facilidade de uso, satisfação e eficiência. </Text>
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
                        <Stack pt="12" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion && (
                                        <Branding/>
                                    ) 
                                }
                            </HStack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <ColoredTag>IDENTIDADE VISUAL</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Uma nova identidade para o seu negócio.</Heading>
                                
                                
                                {/* {
                                    !isWideVersion && (
                                        <Stack w="100%">
                                            <SiteAnimation/>
                                        </Stack>
                                    )
                                }
                                 */}
                                <Text color="gray.500">Tornamos a sua marca única e impactante com nossa expertise em identidade visual.</Text>
                                <Stack>
                                    <HStack><Asterisk/> <Text>Logomarcas</Text></HStack>
                                    <HStack><Asterisk/> <Text>Paleta de cores e aplicações</Text></HStack>
                                    <HStack><Asterisk/> <Text>Textos e conceitos de abordagem</Text></HStack>
                                    <HStack><Asterisk/> <Text>Apresentação e materiais gráficos</Text></HStack>
                                </Stack>
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
                                <HStack spacing="6" w={["100%","100%","auto","auto"]}>
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>LANDING PAGE</StarTag>
                                        <StarTag>SITE INSTITUCIONAL</StarTag>
                                    </Stack>
                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                        <StarTag>E-COMMERCE</StarTag>
                                        <StarTag>PÁGINA DE VENDAS</StarTag>
                                    </Stack>
                                </HStack>
                                <HStack spacing="6" w={["100%","100%","auto","auto"]}>
                                    <Stack spacing="6" w={["100%","100%","auto","auto"]} direction={["column", "column", "row", "row"]}>
                                        <StarTag>SITE ONEPAGE</StarTag>
                                        <StarTag>PORTFÓLIO</StarTag>
                                    </Stack>
                                    <Stack spacing="6" w={["100%","100%","auto","auto"]} direction={["column", "column", "row", "row"]}>
                                        <StarTag>SISTEMAS</StarTag>
                                        <StarTag>BLOG</StarTag>
                                    </Stack>
                                </HStack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="20" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                                <ColoredTag>CASES DE SUCESSO</ColoredTag>
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Inspire-se com cases reais e transforme o futuro do seu negócio.</Heading>
                                <Text color="gray.300">Conheça alguns dos nossos cases de clientes que passaram pela renovação digital e alcançaram resultados excepcionais, confiando em nosso trabalho para impulsionar seu sucesso.</Text>

                                <HStack spacing="8">
                                    <Link href="https://dribbble.com/Startril" target="_blank">
                                        <OutlineButton>Ver Portfólio</OutlineButton>
                                    </Link>
                                </HStack>
                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} minH="500px">
                                <HStack spacing="8">
                                    <Stack spacing="8">
                                        <Img src="./lance_laptop.webp" zIndex={9} className="sectionFade" borderRadius={2}/>
                                        <Img src="./ane_laptop.webp" zIndex={9} className="sectionFade" borderRadius={2}/>
                                    </Stack>
                                    <Stack spacing="8" pt="20">
                                        <Img src="./ql_laptop.webp" zIndex={9} className="sectionFade" borderRadius={2}/>
                                        <Img src="./ss_laptop.webp" zIndex={9} className="sectionFade" borderRadius={2}/>
                                    </Stack>
                                </HStack>
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
