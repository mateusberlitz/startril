import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
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
import Laravel from '../../public/laravel.svg';
import Figma from '../../public/figma.svg';
import Next from '../../public/next.svg';
import UiEUx from '../../public/uieux.svg';
import LogoWhite from '../../public/logo_tin_white.svg';
import { Edit } from 'react-feather';
import { WaveEffect } from '../components/WaveEffect';
import Wave from 'react-wavify';
import { WaveCard } from '../components/WaveCard';
import { useState } from 'react';


export default function Home() {
    const [activeBox, setActiveBox] = useState(1);

    const handleActiveBox = (number: number) => {
        setActiveBox(number);
    }

  return (
    <Box pos="relative" className='main'>
        <Head>
            <title>Startril</title>
            <meta name="description" content="Criamos Sites, Aplicações e Design para o seu objetivo." />
            <link rel="icon" href="/icone_startril.svg" />
        </Head>

        <Flex className="intro" zIndex={99} w="100vw" h="100vh" position={"fixed"} bg="black" justifyContent={"center"} alignItems="center">
            <StartrilIcon/>
        </Flex>

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column" backgroundSize="100%" backgroundRepeat={"no-repeat"} backgroundPosition="0 -90px">
                <Header/>

                <Flex pos="absolute" zIndex={-1} w='100%'>
                    <HomeBackground/>
                </Flex>

                <Flex w="100%">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">

                        <HStack alignItems={"flex-start"}>
                            <Stack w="55%" spacing="12">
                                <Heading color="white" fontSize="6xl" fontWeight={"regular"}>Criamos Sites, Aplicações e Design para o seu objetivo.</Heading>
                                <Text color="gray.300">Quer desenvolver uma aplicação de ponta, com telas que se diferencie no visual e no funcional?</Text>

                                <HStack spacing="8">
                                    <MainButton>Contratar</MainButton>
                                    <Button variant='link' color="white">Ver serviços</Button>
                                </HStack>
                            </Stack>
                            <Stack w="45%">
                                {/* <Img src="./people.png"/> */}
                                <PeopleIcon/>
                            </Stack>
                        </HStack>

                        <Stack spacing="5">
                            <Text color="gray.300">Tecnologias utilizadas:</Text>
                            <HStack spacing="7" color="white">
                                <HStack>
                                    <Figma/>
                                    <Text>Figma</Text>
                                </HStack>

                                <HStack>
                                    <React/>
                                    <Text>React</Text>
                                </HStack>

                                <HStack>
                                    <Next />
                                    <Text>Next.js</Text>
                                </HStack>

                                <HStack>
                                    <Laravel />
                                    <Text>Laravel</Text>
                                </HStack>
                            </HStack>
                        </Stack>

                        <Stack pt="48" spacing="20">
                            <Stack>
                                <ColoredTag textAlign="center">O trabalho</ColoredTag>
                                <Heading color="white" fontSize="6xl" fontWeight={"light"} textAlign="center">Foco em transformar</Heading>
                            </Stack>

                            <HStack>
                                <Stack spacing="8" bg="linear-gradient(90deg, rgba(59, 161, 240, 0.25) -1.31%, rgba(114, 96, 223, 0.25) 91.65%);" maxW="33%" p="10" border="1px solid" borderColor="gray.800">
                                {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                                    <HStack spacing="6">
                                        <UiEUx/>
                                        <Text color="gray.600">UI & UX</Text>
                                    </HStack>
                                    <Text fontSize={"2xl"} fontWeight="semibold">Design de Interfaces</Text>
                                    <Text color="gray.500">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>
                                    <OutlineButton>Ver detalhes</OutlineButton>
                                </Stack>
                            </HStack>
                        </Stack>

                        <HStack pt="48" spacing="20">
                            <Stack>
                                <Img src="./working.png"/>
                            </Stack>

                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>O propósito</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="6xl" fontWeight={"light"}>Faça a renovação digital da sua empresa</Heading>
                                <Text color="gray.500">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>

                            </Stack>
                        </HStack>

                        <Stack pt="48" spacing="20">
                            <Stack w="75%" spacing="12">
                                <Stack spacing="6">
                                    <HStack>
                                        <TextTag>Metodologia</TextTag>
                                        <LogoWhite/>
                                    </HStack>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Crie seus projetos conectado inteiramente conosco.</Heading>
                                <Text color="gray.500">Nossa metodologia permite uma conexão assertiva das ideias e a criação dos projetos mais incríveis e diferenciados.</Text>

                            </Stack>

                            <HStack w="100%%" spacing="0" alignItems={"baseline"} height="100%">
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
                                <WaveCard active={activeBox == 1} number={1} onMouseEnter={handleActiveBox} title="Briefing" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                <WaveCard active={activeBox == 2} number={2} onMouseEnter={handleActiveBox} title="Conversa" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                <WaveCard active={activeBox == 3} number={3} onMouseEnter={handleActiveBox} title="Proposta" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                <WaveCard active={activeBox == 4} number={4} onMouseEnter={handleActiveBox} title="Produção" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                                <WaveCard active={activeBox == 5} number={5} onMouseEnter={handleActiveBox} title="Aprovação" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                            
                            </HStack>
                        </Stack>

                        <HStack pt="48" spacing="20">
                            <HStack w="50%">

                            </HStack>

                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Cenário</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Desfrute da tecnologia ao seu favor</Heading>
                                <Text color="gray.500">O mercado está cada vez mais competitivo, não só na quantidade, mas na qualidade dos serviços e produtos que são entregues aos seus consumidores finais. Grandes empresas no mercado atual são admiradas e confiadas por bilhões de pessoas sabe qual é o diferencial delas? A maneira em que usam a tecnologia e internet ao seu favor para automizar e agilizar as suas entregas.</Text>
                            </Stack>
                        </HStack>

                        <HStack pt="48" spacing="20">
                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Product Design</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Crie seus projetos conectado inteiramente conosco.</Heading>
                                <Text color="gray.500">Nossa metodologia permite uma conexão assertiva das ideias e a criação dos projetos mais incríveis e diferenciados.</Text>

                            </Stack>

                            <HStack>
                                
                            </HStack>
                        </HStack>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>

        {/* <Flex w="100%" maxW="1200px" m="0 auto" px="8" py="20" flexDirection="row" mb="14">
            <Heading color="white" fontSize="6xl" fontWeight={"regular"}>Desenvolvemos Sites, Aplicações e Design para o seu objetivo.</Heading>

        </Flex> */}
        
    </Box>
  )
}
