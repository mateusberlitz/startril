import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, Img, Stack, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react'
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
import { ArrowUpRight, Check, Eye, PlayCircle, X } from 'react-feather';

import Star from '../../public/star.svg';
import HeartFlag from '../../public/heart-flag.svg';
import Leads from '../../public/leads.svg';
import Sale from '../../public/sale.svg';

import LockIcon from '../../public/LockIcon.svg';
import PenIcon from '../../public/PenIcon.svg';
import ShieldCheck from '../../public/shield-check.svg';
import DevIcon from '../../public/DevIcon.svg';
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
import { OutlineButton } from '../components/Buttons/OutlineButton';
import Link from 'next/link';
import { Tag } from '../components/Tag';
gsap.registerPlugin(ScrollTrigger);

export default function Desenvolvimento() {
    const {toggleColorMode, colorMode } = useColorMode();
    const router = useRouter();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
            <title>Desenvolvimento - Startril</title>
            <meta name="description" content="Crie seu site, sistema ou aplicação web com tecnologias sofisticadas, design especializado para entregar aquilo que precisa ser entregue." />
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
                                <Text color="gray.300">Tenha acesso a uma programação de alto nível para o desenvolvimento de sites, sistemas e plataformas. Nós proporcionamos soluções tecnologicamente avançadas para impulsionar e fortalecer sua presença digital de forma eficaz.</Text>

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
                                    <ColoredTag>VISÃO E TECNOLOGIA</ColoredTag>
                                </Stack>
                                <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Transformamos projetos em negócios escaláveis</Heading>
                                <Text color="gray.500">Com as melhores tecnologias de desenvolvimento web, você pode agregar inúmeras possibilidades para inovar os processos e a apresentação da sua empresa.</Text>
                            </Stack>

                            <Stack spacing="12" className="sectionFade">
                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <LockIcon/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Boas práticas em segurança</Text>
                                        </Stack>
                                        <Text>A segurança é um pilar essencial para aplicações e websites. Implementamos as melhores práticas e que estejam em conformidade com a LGPD, para proteger dados e garantir confiança dos usuários.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <ShieldCheck/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Integração com APIs</Text>
                                        </Stack>
                                        <Text>Integração de sistemas e serviços externos através de API. Expanda as funcionalidades e aplicações ao utilizar recursos externos já existentes ou criar suas próprias APIs.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>
                                </Stack>

                                <Stack spacing="12" direction={["column", "column", "row", "row"]}>
                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <DevIcon/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Front-end e Back-end</Text>
                                        </Stack>
                                        <Text>Utilização de tecnologias de alto nível para construção de aplicações web, tanto da interface gráfica do usuário até as funcionalidades da aplicação, integração com banco de dados e formas de pagamento.</Text>
                                        <Box pos="absolute" bg="gradient" w="100px" h="100px" right="-20px" top="-50px" borderRadius={"full"} filter="blur(40px)"/>
                                    </Stack>

                                    <Stack w={["100%","100%","50%","50%"]} overflow="hidden" pos="relative" spacing="6" border="1px solid" bg="rgba(255,255,255,0.05)" borderColor="rgba(255,255,255,0.1)" px="8" py="8">
                                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                                            <PenIcon/>
                                            <Text fontSize={"xl"} color="white" fontWeight={"semibold"}>Design do Projeto</Text>
                                        </Stack>
                                        <Text>Desenvolvemos a sua interface com a melhor usabilidade e experiência de usuário. Aplicando elementos para compor uma aplicação que cumpra os seus objetivos.</Text>
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
                                onClick={() => window.open(`https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís!\nGostaria de criar meu site personalizado e feito a mão.Olá Mateus! Estou interessado em desenvolver um site personalizado e exclusivo, criado sob medida para atender às minhas necessidades.`, '_blank')}>
                                    Crie o seu
                                </MainButton>
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

                <Flex w="100%" bg="#080510" overflow="hidden" bgImage={"./chip_bg.webp"} bgSize={"cover"} bgPos={isWideVersion ? "center center" : "-540px"}>
                    <Stack px="6" w="100%" maxW="800px" m="0 auto" py="20" spacing="0">
                        <Stack pt="32" spacing="10" direction={["column", "column"]} className="sectionFade" alignItems={"center"} textAlign={"center"}>
                            <ColoredTag>TIPOS DE WEBSITES</ColoredTag>
                            <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Criamos a tela ideal para o seu negócio!</Heading>
                            <Text maxW="600px">Entregamos um design clean e objetivo, focado na conversão dos seus leads conforme seu objetivo.</Text>
                            <Stack alignItems={"center"} spacing="6">
                                <HStack spacing="6" w={["100%","100%","auto","auto"]}>
                                    <Stack spacing="6" w={["100%","100%","auto","auto"]} direction={["column", "column", "row", "row"]}>
                                        <StarTag>LANDING PAGE</StarTag>
                                        <StarTag>SITE INSTITUCIONAL</StarTag>
                                    </Stack>
                                    <Stack spacing="6" w={["100%","100%","auto","auto"]} direction={["column", "column", "row", "row"]}>
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

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Flex direction="column" px="6" w="100%" maxW="1200px" m="0 auto" py="20" pt="32" alignItems={"center"}>
                        <Brands/>
                        <Stack maxW="800px" mt={["0","-6","-12"]} pt="0" spacing="10" direction={["column", "column"]} className="sectionFade" alignItems={"center"} textAlign={"center"}>
                            <ColoredTag>NOS INSPIRAMOS NAS</ColoredTag>
                            <Heading color="white" fontSize={isWideVersion ? "5xl" : "4xl"} fontWeight={"semibold"}>Tecnologia das Gigantes!</Heading>
                            <Text maxW="600px">Software é, e sempre será seu aliado no futuro. Por isso, não deixe de investir em uma boa base para continuar construindo.</Text>
                        </Stack>
                    </Flex>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Flex direction="column" px="6" w="100%" maxW="1200px" m="0 auto" py="20" pt="32" alignItems={"center"}>
                        <Stack pt="20" spacing="20" pos="relative" direction={["column", "column", "row", "row"]} w="100%">
                            <Stack bg="rgba(255,255,255,0.05)" p={["8","10","10"]} spacing="8" w={["100%", "40%", "40%"]}>
                                <Tag w="100px">BÁSICO</Tag>
                                <Stack>
                                    <Heading color="white" fontSize={"2xl"}>Landing Pages</Heading>
                                    <HStack color="white" fontSize={"lg"}>
                                        <Text>R$2.190,00</Text>
                                        <Text>-</Text>
                                        <Text>5 Seções</Text>
                                    </HStack>
                                </Stack>

                                <Stack>
                                    <Text opacity={"0.7"}>Em até 8x sem juros</Text>
                                    <HStack>
                                        <Text opacity={"0.7"}>Seção adicional a partir de:</Text>
                                        <Text opacity={"1"}>R$390,00</Text>
                                    </HStack>
                                </Stack>

                                <Stack>
                                    <HStack><Check stroke="#fff"/><Text color="white">SSL</Text></HStack>
                                    <HStack><Check stroke="#fff"/><Text color="white">Domínio</Text></HStack>
                                    <HStack><Check stroke="#fff"/><Text color="white">A partir de 5 seções</Text></HStack>
                                    <HStack><Check stroke="#fff"/><Text color="white">Você escolhe as seções</Text></HStack>
                                    <HStack><Check stroke="#fff"/><Text color="white">Suas cores, fotos e detalhes</Text></HStack>
                                    <HStack><X stroke="#fff" opacity={"0.7"}/><Text opacity={"0.7"}>Design personalizado</Text></HStack>
                                    <HStack><X stroke="#fff" opacity={"0.7"}/><Text opacity={"0.7"}>Seções e funcionalidades predefinidas</Text></HStack>
                                </Stack>

                                <HStack color="white">
                                    <Text fontSize={"lg"}>à Vista por:</Text>
                                    <Text fontSize={"2xl"}>R$1.890,00</Text>
                                </HStack>

                                <Link href="https://api.whatsapp.com/send?phone=5551994720653&text=Olá Thaís!\nGostaria de criar uma landing page." target='_blank'>
                                    <SolidButton>Adquirir</SolidButton>
                                </Link>
                            </Stack>

                            <Stack bg="white" p={["8","10","10"]} spacing="8" color="#000" w={["100%", "60%", "60%"]}>
                                <HStack justifyContent={"space-between"}>
                                    <Tag w="120px" borderColor="rgba(0,0,0,0.1)" color="black">PREMIUM</Tag>
                                    <HStack>
                                        <Flex w="20px">
                                            <Star/>
                                        </Flex>
                                        <Text>Recomendado</Text>
                                    </HStack>
                                </HStack>
                                <Stack>
                                    <Heading color="black" fontSize={"2xl"}>Site Personalizado ou Sistemas</Heading>
                                </Stack>

                                {/* <Stack>
                                    <Text opacity={"0.7"}>Em até 8x sem juros</Text>
                                    <HStack>
                                        <Text opacity={"0.7"}>Seção adicional:</Text>
                                        <Text opacity={"1"}>R$390,00</Text>
                                    </HStack>
                                </Stack> */}

                                <Stack>
                                    <HStack><Check stroke="#000"/><Text color="black">Sem limite de páginas ou seções</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Funções personalizadas</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Painel de gerenciamento</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Estrutura criada para escalar</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Animações (Front-motion)</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Design exclusivo criado um especialista UI&UX</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Definitivamente não há limites</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Integrações com API e sistemas externos</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">Domínio</Text></HStack>
                                    <HStack><Check stroke="#000"/><Text color="black">SSL</Text></HStack>
                                </Stack>

                                <Link href="/contato">
                                    <MainButton>Solicitar Orçamento</MainButton>
                                </Link>
                            </Stack>
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
