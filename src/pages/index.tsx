import { Box, Button, Divider, Flex, Heading, HStack, Icon, Img, ListIcon, ListItem, Stack, Text, UnorderedList, useBreakpointValue, useColorMode, VStack } from '@chakra-ui/react'
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
import { ArrowUpRight, Bold, PlayCircle } from 'react-feather';


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
import Link from 'next/link';
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
                                <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Construa uma <Text as="span" color={"#85C7FB"}>Máquina de Vendas</Text> para <Text as="span" color={"#7260DF"}>elevar o faturamento</Text> da sua empresa em 60 dias.</Heading>
                                <Text color="gray.300">Nosso método é diferente de qualquer coisa que você já viu ou contratou.</Text>

                                <HStack spacing="8">
                                    <Link href="https://api.whatsapp.com/send?phone=5551998154553">
                                    <MainButton rightIcon={<Icon as={ArrowUpRight} fontSize={"20px"}/>}>Contratar</MainButton>
                                    </Link>
                                    {/* <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s" onClick={() => router.push('/#services')}>Ver soluções</Button> */}
                                </HStack>
                            </Stack>
                            <Stack w={["100%", "100%", "50%", "50%"]}>
                                <PeopleIcon />
                            </Stack>
                        </Stack>

                    </Stack>
                </Flex>

                <Purpose/>

                <Flex w="100%" pos="relative">
                    {/* <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/> */}

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="0">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                            <Stack w={["100%", "100%", "55%", "55%"]} spacing="12" textAlign={"center"}>
                                <Box padding={"5"} bg={"gray"} borderRadius={"10px"}>
                                    <Heading color="white" fontSize={isWideVersion ? "3xl" : "2xl"} fontWeight={"semibold"}>O que outras agências fazem:</Heading>
                                </Box>

                                <VStack w={"100%"} fontSize={"22px"} textAlign={"left"}>
                                    <UnorderedList spacing={"8"}>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text >Divulgam a sua empresa nas redes sociais;</Text>
                                        </ListItem>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Criam algumas artes para impulsionar ou ficam te solicitando material;</Text>
                                        </ListItem>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Não conseguem explicar os resultados e os números;</Text>
                                        </ListItem>

                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Entrou lead, não entrou lead, você se vira;</Text>
                                        </ListItem>

                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Não falam em números relevantes $.</Text>
                                        </ListItem>
                                    </UnorderedList>
                                </VStack>

                            </Stack>

                            {
                                isWideVersion ? (
                                    <Divider orientation={'vertical'} h="650px" />
                                ):(
                                    <Divider orientation={'horizontal'} w="100%" />
                                )
                            }

                            <Stack w={["100%", "100%", "50%", "50%"]} textAlign={"center"}>
                                <Box padding={"5"} bg="linear-gradient(90deg, rgba(59, 161, 240, 0.25) -1.31%, rgba(114, 96, 223, 0.25) 91.65%);" borderRadius={"10px"}>
                                    <Heading color="white" fontSize={isWideVersion ? "3xl" : "2xl"} fontWeight={"semibold"}>O que nós fazemos:</Heading>
                                </Box>

                                <VStack w={"100%"} fontSize={"22px"} textAlign={"left"}>
                                    <UnorderedList spacing={"8"}>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text >Entendemos o seu produto e sua realidade;</Text>
                                        </ListItem>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Analisamos o seu fluxo de vendas;</Text>
                                        </ListItem>
                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Criamos um funil e otimizamos todas as etapas de venda;</Text>
                                        </ListItem>

                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Criamos campanhas de alta conversão;</Text>
                                        </ListItem>

                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Definimos com o seu time comercial melhores abordagens para vender mais;</Text>
                                        </ListItem>

                                        <ListItem w={"100%"} textAlign={"left"}>
                                            <Text>Criamos estratégias para aumentar seus ganhos recorrentes.</Text>
                                        </ListItem>
                                    </UnorderedList>
                                </VStack>
                            </Stack>
                        </Stack>

                        <Box w={"100%"} textAlign={"center"} pb="20">
                            <Heading fontSize={["2xl","3xl","3xl"]} color={"#ffffff"} mt={"70px"} textDecoration={"underline"}>Qual empresa você prefere para ser seu parceiro estratégico?</Heading>
                        </Box>



                        <Box w="100%" textAlign={"center"}>
                            <Heading fontSize={["3xl","4xl","5xl"]} color={"#ffffff"} fontWeight={"bold"} mt={"70px"}>Mostramos o seu produto/serviço para o cliente ideal e <Text as={"span"} color={"#7260DF"}>geramos urgência</Text> para ele comprar.</Heading>
                        </Box>

                    </Stack>
                </Flex>

                {
                    isWideVersion ? (
                        <Services/>
                    ):(
                        <ServicesBox/>
                    )
                }

                <OurWork/>

                <Flex w="100%" pos="relative">
                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="5" pb={["0","20","20","32","40"]} spacing="0">

                        <Stack w={"100%"} direction={["column", "column", "row", "row"]}>
                            <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" w={["100%","100%","25%","25%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)", transform: "translate(0px, -10px)", background: "#5545B5"}} transition="all ease 0.5s">

                                <Text fontSize={"2xl"} fontWeight="regular" color="white">1. Exploração</Text>
                                <Text color="gray.500">O primeiro passo é fazer um processo rigoroso de testes, ofertando o seu produto ou serviço de diferentes maneiras, em diferentes canais, para diferentes pessoas, e coletando os dados que vão nos mostrar onde estão os diamantes para construir o seu processo de vendas.</Text>

                            </Stack>

                            <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" w={["100%","100%","25%","25%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)", transform: "translate(0px, -10px)", background: "#5545B5"}} transition="all ease 0.5s">

                                <Text fontSize={"2xl"} fontWeight="regular" color="white">2. Lapidação</Text>
                                <Text color="gray.500">Na primeira etapa encontramos os diamantes brutos, que já geram bons resultados, e que serão lapidados na 2ª etapa, através de teste A/B focado em melhoria contínua das taxas de conversão em casa parte do funil.</Text>

                            </Stack>

                            <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" w={["100%","100%","25%","25%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)", transform: "translate(0px, -10px)", background: "#5545B5"}} transition="all ease 0.5s">

                                <Text fontSize={"2xl"} fontWeight="regular" color="white">3. Escala</Text>
                                <Text color="gray.500">Esse é o momento em que vamos aumenter consideravelmente as vendas trazendo mais alcance para os anúncios que mais funcionaram, e que agora foram lapidados através de um processo intenso de melhoria e confirmação de resultados.</Text>

                            </Stack>

                            <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" w={["100%","100%","25%","25%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)", transform: "translate(0px, -10px)", background: "#5545B5"}} transition="all ease 0.5s">

                                <Text fontSize={"2xl"} fontWeight="regular" color="white">4. Extração</Text>
                                <Text color="gray.500">As primeiras 3 etapas geram um bom fluxo de caixa e já aumentam consideravelmente as vendas, mas o processo de extração garante que não fique dinheiro na mesa, nessa etapa onde vamos extrair o máximo da lista de clientes já adquiridos nas etapas anteriores, com estratpegias de retenção, remarketing e esteira de produção.</Text>

                            </Stack>
                        </Stack>
                        
                    </Stack>
                </Flex>




                <Customers/>

                {/* <ListMethodsHorizontal/> */}


                <Flex w="100%" pos="relative">
                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack textAlign={"center"} px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb={["0","20","20","32","40"]} spacing="0">

                        <Heading fontSize={"36px"} fontWeight={"bold"} color={"#ffffff"} marginBottom={"60px"}>A equipe necessária para realizar esse processo na sua empresa</Heading>

                        <Stack w={"100%"} direction={["column", "column", "row", "row"]} spacing={"20"} alignItems={"center"} justifyContent={"center"}>
                            
                            <VStack spacing={"5"}>
                                <Img maxW={"100px"} src='/serv1.svg' />

                                <Text fontSize={"22px"} fontWeight={"bold"}>Vendas</Text>
                            </VStack>

                            <VStack spacing={"5"}>
                                <Img maxW={"100px"} src='/serv2.svg' />

                                <Text fontSize={"22px"} fontWeight={"bold"}>Copyright</Text>
                            </VStack>

                            <VStack spacing={"5"}>
                                <Img maxW={"100px"} src='/serv3.svg' />

                                <Text fontSize={"22px"} fontWeight={"bold"}>Gestão de Tráfego</Text>
                            </VStack>

                            <VStack spacing={"5"}>
                                <Img maxW={"100px"} src='/serv4.svg' />

                                <Text fontSize={"22px"} fontWeight={"bold"}>Design Gráfico</Text>
                            </VStack>

                            <VStack spacing={"5"}>
                                <Img maxW={"100px"} src='/serv5.svg' />

                                <Text fontSize={"22px"} fontWeight={"bold"}>Audiovisual</Text>
                            </VStack>

                        </Stack>
                        
                    </Stack>
                </Flex>


                <VideoSection/>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        {/* <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
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
                                <MainButton leftIcon={<Icon as={Whatsapp} fill={"#fff"} fontSize={"16px"}/>}
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
                        </Stack> */}

                        <Stack pt="0" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <HStack w={["100%", "100%", "50%", "50%"]}>
                                {
                                    isWideVersion && (
                                        <SiteAnimation/>
                                    ) 
                                }
                            </HStack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Performance no seu Projeto</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Um <Text as="span" color={"#85C7FB"}>método válidado</Text> e aplicável para <Text as="span" color={"#7260DF"}>qualquer empresa</Text>.</Heading>
                                
                                
                                {
                                    !isWideVersion && (
                                        <Stack w="100%">
                                            <SiteAnimation/>
                                        </Stack>
                                    )
                                }
                                
                                {/* <Text color="gray.500">Podemos criar tudo aquilo que for necessário para engajar o usuário dentro do seu site, entendemos ele como ninguém e entregamos as melhores funcionalidades. Sites desenvolvidos por nós só conhecem alta velocidade e performance.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fill={"#fff"} fontSize={"16px"}/>}
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís!\nGostaria de criar meu site personalizado e feito a mão.Olá Mateus! Estou interessado em desenvolver um site personalizado e exclusivo, criado sob medida para atender às minhas necessidades.`, '_blank')}>
                                    Crie o seu
                                </MainButton> */}
                            </Stack>
                        </Stack>

                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]} className="sectionFade">
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Agilidade nos Resultados</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Queremos <Text as="span" color={"#85C7FB"}>trazer vendas</Text> para você o <Text as="span" color={"#7260DF"}>mais rápido possivel</Text>.</Heading>
                                
                                {
                                    !isWideVersion && (
                                        <Stack>
                                            <AdsAnimationMobile/>
                                        </Stack>
                                    ) 
                                }
                                {/* <Text color="gray.500">Posicionamos estrategicamente o seu negócio no digital para ter o maior alcance ao público alvo, aumentando suas vendas e engajamento para sua marca. Com maior visibilidade, atraia novos clientes e fortaleça o relacionamento com os atuais.</Text>
                                <MainButton leftIcon={<Icon as={Whatsapp} fill={"#fff"} fontSize={"16px"}/>} 
                                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís! Estou interessado em investir estrategicamente em tráfego pago para potencializar o reconhecimento da minha marca e impulsionar o crescimento do meu negócio.`, '_blank')}>
                                        Invista agora
                                </MainButton> */}
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

                {/* <FaqCenter/> */}

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
