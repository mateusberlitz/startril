import { Box, Button, Divider, Flex, Heading, HStack, Icon, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import { MainButton } from '../components/Buttons/MainButton'
import { Header } from '../components/Header'

import { TextTag } from '../components/TextTag';
import { OutlineButton } from '../components/Buttons/OutlineButton';
import { ColoredTag } from '../components/ColoredTag';
import { StarDivider } from '../components/StarDivider';

import StartrilIcon from '../../public/icone_startril.svg';
import BackgroundStarLight from '../../public/bg_star_light.svg';
import PeopleIcon from '../../public/people_logo.svg';
import HomeBackground from '../../public/home.svg';
import React from '../../public/react.svg';
import UiEUx from '../../public/uieux.svg';
import Ui from '../../public/ui.svg';
import LogoWhite from '../../public/logo_tin_white.svg';
import { CheckSquare, Edit, Edit2, Edit3, FileText, MessageSquare, PenTool, Phone, PlayCircle } from 'react-feather';
import { WaveEffect } from '../components/WaveEffect';
import Wave from 'react-wavify';
import { WaveCard } from '../components/WaveCard';
import { useState } from 'react';


import DevIcon from '../../public/dev.svg';
import BgCones from '../../public/bg_star_cones.svg';
import AdsIcon from '../../public/ads.svg';
import Funil from '../../public/funil.svg';
import { ProductAnimation } from '../components/ProductAnimation';
import { SiteAnimation } from '../components/SiteAnimation';
import { AdsAnimation } from '../components/AdsAnimation';
import { Select } from '../components/Forms/Selects/Select';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { Services } from '../sections/services';
import { ProductAnimationMobile } from '../components/ProductAnimation/ProductAnimationMobile';
import { SiteAnimationMobile } from '../components/SiteAnimation/SiteAnimationMobile';
import { AdsAnimationMobile } from '../components/AdsAnimation/AdsAnimationMobile';
import { WaveCardMobile } from '../components/WaveCard/WaveCardMobile';
import { Customers } from '../sections/customers';
import { FunilAnimation } from '../components/FunilAnimation';
import { Purpose } from '../sections/purpose';
import { OurWork } from '../sections/ourWork';
import { ListMethods } from '../sections/listMethods';
import { ListMethodsHorizontal } from '../sections/listMethodsHorizontal';
import { Faq } from '../sections/faq';

export default function Home() {
    const router = useRouter();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

  return (
    <Box pos="relative" className='main'>
        <Head>
            <title>Startril</title>
            <meta name="description" content="Transformamos seu negócio com sites, anúncios e design" />
            <link rel="icon" href="/icone_startril.svg" />
        </Head>

        {/* <Flex className="intro" zIndex={99} w="100vw" h="100vh" position={"fixed"} bg="black" justifyContent={"center"} alignItems="center">
            <StartrilIcon/>
        </Flex> */}

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                <Header/>

                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px">
                    <HomeBackground/>
                </Flex>

                <Flex w="100%" pos="relative">
                    <Box w="100%" h="120px" pos="absolute" bg="linear-gradient(180deg, rgba(14, 17, 25, 0) 0%, #080510 100%);" bottom="0"/>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" pt="20" pb="40" spacing="0">

                        <Stack alignItems={"flex-start"} direction={["column","column","row","row"]} spacing="16">
                            <Stack w={["100%", "100%", "55%", "55%"]} spacing="12">
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Criamos o necessário para quem quer se destacar!</Heading>
                                <Text color="gray.300">E estar na internet e demonstrar como é completo, diferente e se conecta com o cliente.</Text>

                                <HStack spacing="8">
                                    <MainButton>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s">Ver serviços</Button>
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

                <Services/>

                <OurWork/>

                <Customers/>

                <ListMethodsHorizontal/>

                <Flex _hover={{cursor:"url(./play_cursor.png), auto"}} borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={"center right"}>
                    <Flex pos="absolute" top="0" left="0" bottom="0" right="0" bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 75.68%);">
                        {/* <Img src="./mateus_video.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/> */}
                    </Flex>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h="80vh" maxH="940px" pos="relative" justifyContent={"center"}>
                        <Stack spacing="14">
                            <PlayCircle/>
                            <Stack maxW="500px" spacing="10">
                                <ColoredTag>Cenário atual</ColoredTag>
                                <Heading color="white" fontSize={"5xl"} fontWeight={"semibold"}>Desfrute o máximo da tecnologia ao seu favor</Heading>
                            </Stack>

                            <Stack spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                                <Stack w={["100%", "100%", "50%", "50%"]}>
                                    <Text>
                                    No mercado cada vez mais competitivo, destaque-se ao entregar serviços e produtos de qualidade aos consumidores finais. O diferencial das grandes empresas admiradas e confiáveis reside na utilização estratégica da tecnologia e internet para automatizar e agilizar suas operações.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Product Design</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Desenvolvemos o seu produto digital</Heading>
                                <Text color="gray.500">Construímos junto com você o seu negócio dentro do digital, como um e-commerce, SaaS, aplicativo, e entre outros.</Text>
                                <MainButton>Ver Mais</MainButton>
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

                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]}>
                            <HStack>
                                {
                                    isWideVersion ? (
                                        <SiteAnimation/>
                                    ) : (
                                        // <SiteAnimationMobile/>
                                        <Box/>
                                    )
                                }
                            </HStack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Sites Incríveis</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Criamos sites como ninguém</Heading>
                                <Text color="gray.500">Podemos criar tudo aquilo que for necessário para engajar o usuário dentro do seu site, entendemos ele como ninguém e entregamos as melhores funcionalidades. Sites desenvolvidos por nós só conhecem alta velocidade e performance.</Text>
                                <MainButton>Ver Mais</MainButton>
                            </Stack>
                        </Stack>

                        <Stack pt="48" spacing="20" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Tráfego Pago</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Aumente suas vendas e engajamento fazendo anúncios</Heading>
                                <Text color="gray.500">Posicionamos estrategicamente o seu negócio no digital para ter o maior alcance ao público alvo, aumentando suas vendas e engajamento para sua marca. Com maior visibilidade, atraia novos clientes e fortaleça o relacionamento com os seus clientes.</Text>
                                <MainButton>Ver Mais</MainButton>
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

                <Faq/>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Flex pos="relative" bg="#3F3F3F">
                            <Box pos="absolute" zIndex="1" w="100%" height="100%">
                                <BgCones/>
                            </Box>

                            <Stack justifyContent={"space-between"} spacing="16" w="100%" zIndex={2} bg="rgba(8,5,16,0.7)" h="275px" p="14" direction={["column", "column", "row", "row"]}>
                                <Stack maxW="430px" spacing="6" justifyContent={"center"}>
                                    <Heading color="white">É fácil começar agora</Heading>
                                    <Text>Que tal solicitar nossos serviços através de um briefing prático que pode nos contar exatamente o que você precisa?</Text>
                                </Stack>
                                <Stack justifyContent={"center"}>
                                    <Select name="demand" label="Selecione sua demanda">
                                        <option value="" style={{ background: '#0E1119' }}>Selecionar</option>
                                        <option value="Anúncios" style={{ background: '#0E1119' }}>Anúncios</option>
                                        <option value="Website" style={{ background: '#0E1119' }}>Website</option>
                                        <option value="Design de projeto" style={{ background: '#0E1119' }}>Design de projeto</option>
                                        <option value="E-commerce" style={{ background: '#0E1119' }}>E-commerce</option>
                                        <option value="Landing Page" style={{ background: '#0E1119' }}>Landing Page</option>
                                        <option value="Redesign" style={{ background: '#0E1119' }}>Redesign</option>
                                        <option value="Sistema" style={{ background: '#0E1119' }}>Sistema</option>
                                    </Select>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>

        {/* <Flex w="100%" maxW="1200px" m="0 auto" px="8" py="20" flexDirection="row" mb="14">
            <Heading color="white" fontSize="6xl" fontWeight={"regular"}>Desenvolvemos Sites, Aplicações e Design para o seu objetivo.</Heading>

        </Flex> */}
        <Footer />
        
    </Box>
  )
}
