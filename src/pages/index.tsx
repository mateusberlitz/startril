import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { MainButton } from '../components/Buttons/MainButton'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Box pos="relative">
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex flexDir="column" w="100%" bg="#2D2E36">
            <Flex bg="url(./background_fade.png)" backgroundSize="cover" backgroundPosition="0 -90px">
                <Header/>

                <Flex bg="rgb(8,5,16,0.7)" w="100%">
                    <Stack px="6" w="100%" maxW="1200px" m="0 auto">
                        <HStack py="10" pt="36">
                            <Stack w="55%" spacing="12">
                                <Heading color="white" fontSize="5xl">Desenvolvemos Sites, Aplicações e Design para o seu objetivo.</Heading>
                                <Text color="gray.300">Quer desenvolver uma aplicação de ponta, com telas que se diferencie no visual e no funcional?</Text>

                                <HStack spacing="8">
                                    <MainButton>Contratar</MainButton>
                                    <Button variant='link' color="white">Ver serviços</Button>
                                </HStack>
                            </Stack>
                            <Stack>
                                <Img src="./people.png"/>
                            </Stack>
                        </HStack>

                        <Stack>
                            <Text color="gray.300">Tecnologias utilizadas:</Text>
                            <HStack>
                                <HStack>
                                    <Text>Figma</Text>
                                </HStack>

                                <HStack>
                                    <Text>React</Text>
                                </HStack>

                                <HStack>
                                    <Text>Next</Text>
                                </HStack>

                                <HStack>
                                    <Text>Laravel</Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
        
    </Box>
  )
}
