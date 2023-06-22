import { Box, Button, Flex, Heading, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import { MainButton } from '../components/Buttons/MainButton'
import { Header } from '../components/Header'

import { TextTag } from '../components/TextTag';
import { ColoredTag } from '../components/ColoredTag';
import { StarDivider } from '../components/StarDivider';

import PeopleIcon from '../../public/people_logo.svg';
import HomeBackground from '../../public/home.svg';
import React from '../../public/react.svg';
import { PlayCircle } from 'react-feather';


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
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Desenvolvemos o fundamental para aqueles que almejam destaque!</Heading>
                                <Text color="gray.300">Destaque-se na internet, demonstre a sua autoridade e crie conexão com os seus clientes.</Text>

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

                <Flex _hover={{cursor:"url(./play_cursor.png), auto"}} borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={"center right"}>
                    <Flex pos="absolute" top="0" left="0" bottom="0" right="0" bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 75.68%);">
                        {/* <Img src="./mateus_video.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/> */}
                    </Flex>

                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h={["80vh", "80vh", "80vh", "80vh", "95vh"]} maxH="940px" pos="relative" justifyContent={"center"}>
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
