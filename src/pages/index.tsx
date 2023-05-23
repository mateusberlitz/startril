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
import UiEUx from '../../public/uieux.svg';
import LogoWhite from '../../public/logo_tin_white.svg';
import { Edit } from 'react-feather';
import { WaveEffect } from '../components/WaveEffect';
import Wave from 'react-wavify';
import { WaveCard } from '../components/WaveCard';
import { useState } from 'react';


import DevIcon from '../../public/dev.svg';
import BgCones from '../../public/bg_star_cones.svg';
import AdsIcon from '../../public/ads.svg';
import { DnaAnimation } from '../components/DnaAnimation';
import { ProductAnimation } from '../components/ProductAnimation';
import { SiteAnimation } from '../components/SiteAnimation';
import { AdsAnimation } from '../components/AdsAnimation';
import { Select } from '../components/Forms/Selects/Select';
import { Footer } from '../components/Footer';


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

        {/* <Flex className="intro" zIndex={99} w="100vw" h="100vh" position={"fixed"} bg="black" justifyContent={"center"} alignItems="center">
            <StartrilIcon/>
        </Flex> */}

        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                <Header/>

                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px">
                    <HomeBackground/>
                </Flex>

                <Flex w="100%">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">

                        <HStack alignItems={"flex-start"}>
                            <Stack w="55%" spacing="12">
                                <Heading color="white" fontSize="5xl" fontWeight={"regular"}>Criamos aplicações para quem quer se destacar!</Heading>
                                <Text color="gray.300">E estar na internet e demonstrar como é completo, diferente e se conecta com o cliente.</Text>

                                <HStack spacing="8">
                                    <MainButton>Contratar</MainButton>
                                    <Button variant='link' color="white" fontWeight={"normal"} transition="all ease 0.5s">Ver serviços</Button>
                                </HStack>
                            </Stack>
                            <Stack w="45%">
                                {/* <Img src="./people.png"/> */}
                                <PeopleIcon/>
                            </Stack>
                        </HStack>

                        <Flex>
                            <HStack>

                            </HStack>
                        </Flex>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Stack pt="32" spacing="20">
                            <Stack>
                                <ColoredTag textAlign="center">O trabalho</ColoredTag>
                                <Heading color="white" fontSize="6xl" fontWeight={"light"} textAlign="center">Foco em transformar</Heading>
                            </Stack>

                            <HStack spacing="7">
                                <Stack spacing="8" bg="rgba(255,255,255,0.03)" maxW="33%" p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                                {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                                    <HStack spacing="6">
                                        <UiEUx/>
                                        <Text color="gray.600">UI & UX</Text>
                                    </HStack>
                                    <Text fontSize={"2xl"} fontWeight="regular" color="white">Design de Interfaces</Text>
                                    <Text color="gray.500">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>
                                    <OutlineButton>Ver detalhes</OutlineButton>
                                </Stack>

                                <Stack spacing="8" bg="rgba(255,255,255,0.03)" maxW="33%" p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                                {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                                    <HStack spacing="6">
                                        <DevIcon/>
                                        <Text color="gray.600">Sites e Sistemas</Text>
                                    </HStack>
                                    <Text fontSize={"2xl"} fontWeight="regular" color="white">Desenvolvimento</Text>
                                    <Text color="gray.500">Programamos a sua plataforma digital com todas as interações e transações necessárias entre a sua equipe e seu consumidor final, com alta performance e segurança.</Text>
                                    <OutlineButton>Ver detalhes</OutlineButton>
                                </Stack>

                                <Stack spacing="8" bg="rgba(255,255,255,0.03)" maxW="33%" p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                                {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                                    <HStack spacing="6">
                                        <AdsIcon/>
                                        <Text color="gray.600">Tráfego Pago</Text>
                                    </HStack>
                                    <Text fontSize={"2xl"} fontWeight="regular" color="white">Anúncios e Impulsão</Text>
                                    <Text color="gray.500">Posicionamos e direcionamos a sua empresa ao público certo, impulsionando a sua visibilidade e ampliando o retorno sobre o investimento.</Text>
                                    <OutlineButton>Ver detalhes</OutlineButton>
                                </Stack>
                            </HStack>
                        </Stack>

                        <HStack pt="48" spacing="20">
                            <Stack w="50%">
                                <DnaAnimation/>
                                {/* <Img src="./working.png"/> */}
                            </Stack>

                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>O propósito é</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="6xl" fontWeight={"light"}>Fazer a renovação digital da sua empresa</Heading>
                                <Text color="gray.500">Não deixe os seus resultados serem prejudicados por não estar atualizado! Transferimos a sua empresa para o digital!</Text>

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
                                <Text color="gray.500">No mercado cada vez mais competitivo, destaque-se ao entregar serviços e produtos de qualidade aos consumidores finais. O diferencial das grandes empresas admiradas e confiáveis reside na utilização estratégica da tecnologia e internet para automatizar e agilizar suas operações.</Text>
                            </Stack>
                        </HStack>

                        <HStack pt="48" spacing="20">
                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Product Design</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Desenvolvemos o seu produto digital</Heading>
                                <Text color="gray.500">Construímos junto com você o seu negócio dentro do digital, como um e-commerce, SaaS, aplicativo, e entre outros.</Text>
                                <MainButton>Ver Mais</MainButton>
                            </Stack>

                            <HStack>
                                <ProductAnimation/>
                            </HStack>
                        </HStack>

                        <HStack pt="48" spacing="20">
                            <HStack>
                                <SiteAnimation/>
                            </HStack>

                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Sites Incríveis</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Criamos sites como ninguém</Heading>
                                <Text color="gray.500">Podemos criar tudo aquilo que for necessário para engajar o usuário dentro do seu site, entendemos ele como ninguém e entregamos as melhores funcionalidades. Sites desenvolvidos por nós só conhecem alta velocidade e performance.</Text>
                                <MainButton>Ver Mais</MainButton>
                            </Stack>
                        </HStack>

                        <HStack pt="48" spacing="20">
                            <Stack w="50%" spacing="12">
                                <Stack spacing="6">
                                    <TextTag>Tráfego Pago</TextTag>
                                    <StarDivider maxW="120px"/>
                                </Stack>
                                <Heading color="white" fontSize="5xl" fontWeight={"light"}>Aumente suas vendas e engajamento fazendo anúncios</Heading>
                                <Text color="gray.500">Posicionamos estrategicamente o seu negócio no digital para ter o maior alcance ao público alvo, aumentando suas vendas e engajamento para sua marca. Com maior visibilidade, atraia novos clientes e fortaleça o relacionamento com os seus clientes.</Text>
                                <MainButton>Ver Mais</MainButton>
                            </Stack>

                            <HStack>
                                <AdsAnimation/>
                            </HStack>
                        </HStack>
                    </Stack>
                </Flex>

                <Flex w="100%" bg="#080510">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                        <Flex pos="relative" bg="#3F3F3F">
                            <Box pos="absolute" zIndex="1" w="100%">
                                <BgCones/>
                            </Box>

                            <HStack justifyContent={"space-between"} w="100%" zIndex={2} bg="rgba(8,5,16,0.7)" h="275px" p="14">
                                <Stack maxW="430px" spacing="6">
                                    <Heading color="white">Comece agora</Heading>
                                    <Text>Que tal solicitar nossos serviços através de um briefing prático que pode nos contar exatamente o que você precisa?</Text>
                                </Stack>
                                <Stack>
                                    <Select name="demand" label="Selecione sua demanda">
                                        <option value="" style={{ background: '#0E1119' }}>Selecionar</option>
                                        <option value="Criar website" style={{ background: '#0E1119' }}>Criar website</option>
                                        <option value="Criar telas" style={{ background: '#0E1119' }}>Criar telas</option>
                                    </Select>
                                </Stack>
                            </HStack>
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
