import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
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
import { Edit, PlayCircle } from 'react-feather';
import { WaveEffect } from '../components/WaveEffect';
import Wave from 'react-wavify';
import { WaveCard } from '../components/WaveCard';
import { useState } from 'react';


import DevIcon from '../../public/dev.svg';
import BgCones from '../../public/bg_star_cones.svg';
import AdsIcon from '../../public/ads.svg';
import Funil from '../../public/funil.svg';
import { DnaAnimation } from '../components/DnaAnimation';
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

export default function Home() {
    const router = useRouter();
    const [activeBox, setActiveBox] = useState(1);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const handleActiveBox = (number: number) => {
        setActiveBox(number);
    }

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
                            <Stack w={["100%", "100%", "45%", "45%"]}>
                                <PeopleIcon />
                            </Stack>
                        </Stack>

                        <Flex>
                            <HStack>

                            </HStack>
                        </Flex>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510" overflow="hidden">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Services/>

                        <Stack pt="48" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Aonde Atuamos</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>A etapa inicial das suas vendas pela internet</Heading>
                                <Text color="gray.500">Construa ou aprimore seu processo de captação e vendas pela internet através de tráfego e aplicações.</Text>

                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                                <Box id="moon" zIndex={-1} w="60" h="60" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(100px)"/>
                                <HStack spacing="0" w="100%">
                                    <Flex w="100%">
                                        {/* <Funil/> */}
                                        <FunilAnimation/>
                                    </Flex>
                                    {/* <Stack spacing="4">
                                        <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"}>PERCEPÇÃO</Text>
                                        <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                                        <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                                        <Text h="50px" bg="linear-gradient(360deg, #3BA1F0 0%, #7260DF 0%, rgba(114, 96, 223, 0) 151.68%);" textTransform={"uppercase"} >texto</Text>
                                    </Stack> */}
                                </HStack>
                            </Stack>
                        </Stack>

                        <Customers/>

                        <Stack pt="48" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>

                            <Stack w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                                <Box id="moon" w="60" h="60" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(100px)"/>
                                <DnaAnimation/>
                            </Stack>

                            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                                <Stack spacing="6">
                                    <TextTag>O propósito é</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>Fazer a renovação digital da sua empresa</Heading>
                                <Text color="gray.500">Não deixe os seus resultados serem prejudicados por não estar atualizado! Transferimos a sua empresa para o digital!</Text>

                            </Stack>
                        </Stack>

                        <Stack pt="48" pb="32" spacing="20">
                            <Stack w="100%" maxW="600px" spacing="12">
                                <Stack spacing="6">
                                    <HStack>
                                        <TextTag>Metodologia</TextTag>
                                        {/* <LogoWhite/> */}
                                    </HStack>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Ágil e confiável pra criar seus projetos.</Heading>
                                <Text color="gray.500">Nossa metodologia permite uma conexão assertiva das ideias e a criação dos projetos mais incríveis que atinjam seus objetivos e sejam a base para alcançar grandes resultados.</Text>

                            </Stack>

                            <Stack w="100%%" spacing="0" alignItems={"baseline"} height="100%" direction={["column", "column", "row", "row"]}>
                                {/* <Stack maxW="70%" pos="relative" overflow="hidden" spacing="0">
                                    <Box pos="absolute" top="-7px" left="0" right="0" zIndex={1}>
                                        <BackgroundStarLight/>
                                    </Box>

                                    <Box pos="absolute" bottom="-7px" left="0" right="0" zIndex={1}>
                                        <Wave fill='url(#startril_gradient)'
                                                paused={false}
                                                options={{
                                                    height: 10,
                                                    amplitude: 50,
                                                    speed: 0.2,
                                                    points: 2
                                                }}
                                        >
                                            <defs>
                                                <linearGradient id="startril_gradient" x1="-19.0615" y1="90.8762" x2="481.893" y2="255.981" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#3BA1F0"/>
                                                    <stop offset="1" stop-color="#7260DF"/>
                                                </linearGradient>
                                            </defs>
                                        </Wave>
                                    </Box>
                                    <Stack bg="rgba(0,0,0,0.7)" zIndex={2} backdropFilter="blur(30px)">
                                        <HStack spacing="0" borderBottom="1px solid" borderColor="gray.800">
                                            <Flex w="100px" h="100px" alignItems={"center"} justifyContent="center" borderRight="1px solid" borderColor="gray.800">
                                                <Text fontWeight={"regular"} fontSize="7xl">1</Text>
                                            </Flex>
                                            <Flex h="100px" alignItems={"center"} justifyContent="center" px="5">
                                                <Text fontWeight={"semibold"} fontSize="2xl">Preenchimento de Briefing</Text>
                                            </Flex>
                                        </HStack>
                                        <Stack p="12" spacing="10">
                                            <Text>O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora.</Text>
                                            <OutlineButton icon={Edit} w="100%" fontSize={"md"} h="55px">Briefing Guiado</OutlineButton>
                                        </Stack>
                                    </Stack>

                                </Stack> */}
                                {
                                    isWideVersion ? (
                                        <>
                                            <WaveCard active={activeBox == 1} number={1} onMouseEnter={handleActiveBox} title="Briefing" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCard active={activeBox == 2} number={2} onMouseEnter={handleActiveBox} title="Conversa" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCard active={activeBox == 3} number={3} onMouseEnter={handleActiveBox} title="Proposta" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCard active={activeBox == 4} number={4} onMouseEnter={handleActiveBox} title="Produção" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCard active={activeBox == 5} number={5} onMouseEnter={handleActiveBox} title="Aprovação" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                        </>
                                    ) : (
                                        <>
                                            <WaveCardMobile active={activeBox == 1} number={1} onMouseEnter={handleActiveBox} title="Briefing" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCardMobile active={activeBox == 2} number={2} onMouseEnter={handleActiveBox} title="Conversa" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCardMobile active={activeBox == 3} number={3} onMouseEnter={handleActiveBox} title="Proposta" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCardMobile active={activeBox == 4} number={4} onMouseEnter={handleActiveBox} title="Produção" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                            <WaveCardMobile active={activeBox == 5} number={5} onMouseEnter={handleActiveBox} title="Aprovação" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                        </>
                                    )
                                }
                            </Stack>
                        </Stack>

                    </Stack>
                </Flex>

                <Flex borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={"center right"}>
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
                                        <option value="Criar website" style={{ background: '#0E1119' }}>Criar website</option>
                                        <option value="Criar telas" style={{ background: '#0E1119' }}>Criar telas</option>
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
