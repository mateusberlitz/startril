import { Box, Checkbox, Divider, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";

import ContactAnimation from '../../public/contact_animation.svg';
import { Header } from "../components/Header";
import { Input } from "../components/Forms/Inputs/Input";

import AlignmentIcon from '../../public/alignment.svg';
import CronoIcon from '../../public/crono.svg';
import DeadlineIcon from '../../public/deadline.svg';
import SelfIcon from '../../public/self.svg';

import Ui from '../../public/ui_white.svg';
import Ads from '../../public/ads_white.svg';
import Dev from '../../public/dev_white.svg';
import { MainButton } from "../components/Buttons/MainButton";

export default function(){
    return(
        <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px" h="calc(100% + 215px)" overflow="hidden">
                    <ContactAnimation/>
                </Flex>

                <Box w="100%" bg="rgba(0,0,0,0.6)">
                    <Header/>

                    <Flex w="100%">
                        <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                            <HStack spacing="12" justifyContent={"space-between"}>
                                <Stack spacing="12" maxW="320px">
                                    <Stack spacing="1">
                                        <Text fontSize={"12px"}>É bom entender</Text>
                                        <Text color="white" fontSize={"xl"}>Como trabalhamos</Text>
                                    </Stack>

                                    <HStack alignItems={"flex-start"} spacing="4">
                                        <AlignmentIcon width="80px"/>
                                        <Stack>
                                            <Text color="white" fontSize={"md"}>O alinhamento é fundamental</Text>
                                            <Text fontSize={"12px"}>Por isso durante todo o processo nos colocamos à disposição para esclarecer suas dúvidas, receber sugestões e trocar ideias.</Text>
                                        </Stack>
                                    </HStack>

                                    <HStack alignItems={"flex-start"} spacing="4">
                                        <CronoIcon width="70px"/>
                                        <Stack>
                                            <Text color="white" fontSize={"md"}>Seguimos o cronograma</Text>
                                            <Text fontSize={"12px"}>De prazos de entrega de cada etapa e do projeto já estabelecidos na reunião de alinhamento.</Text>
                                        </Stack>
                                    </HStack>

                                    <HStack alignItems={"flex-start"} spacing="4">
                                        <DeadlineIcon width="80px"/>
                                        <Stack>
                                            <Text color="white" fontSize={"md"}>Respeite os prazos</Text>
                                            <Text fontSize={"12px"}>Pois as entregas precisam ser aprovadas para passarmos para a próxima etapa e não atrasarmos o projeto.</Text>
                                        </Stack>
                                    </HStack>

                                    <HStack alignItems={"flex-start"} spacing="4">
                                        <SelfIcon width="50px"/>
                                        <Stack>
                                            <Text color="white" fontSize={"md"}>A ideia é sua</Text>
                                            <Text fontSize={"12px"}>E ela estará segura conosco! Podemos realizar um acordo de confidencialidade (NDA). </Text>
                                        </Stack>
                                    </HStack>
                                </Stack>

                                <Flex h="100%" w="1px" bg="gradient" opacity={0.2}/>

                                <Stack spacing="14" maxW="620px" alignSelf={"flex-end"}>
                                    <Stack spacing="10">
                                        <Text>Briefing</Text>
                                        <Flex h="1px" w="100px" bg="gradient" opacity={1}/>
                                        <Heading color="white">
                                            Vamos transformar o seu negócio juntos?
                                        </Heading>
                                        <Text fontSize={"sm"} maxW="500px">Nos conte um pouco sobre o seu projeto ou sua empresa e como podemos te ajudar.</Text>
                                    </Stack>

                                    <Stack spacing="10">
                                        <Input name="name" type="text" placeholder="José da Silva" label="Seu Nome"/>
                                        <Input name="email" type="text" placeholder="José da Silva" label="Seu E-mail"/>

                                        <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                            <Input name="whatsapp" type="text" placeholder="José da Silva" label="Seu Whatsapp"/>
                                            <Input name="company" type="text" placeholder="José da Silva" label="Nome da empresa"/>
                                        </Stack>

                                        {/* <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                            <Input name="company" type="text" placeholder="José da Silva" label="Nome da empresa"/>
                                            <Input name="link" type="text" placeholder="José da Silva" label="Link do site"/>
                                        </Stack> */}

                                        <Stack spacing="4">
                                            <Text color="white">Como podemos ajudar?</Text>

                                            <Flex flexWrap={"wrap"} gap="6">
                                                <HStack role="group" border="1px solid" borderColor="rgba(255,255,255,0.2)" p="4" w="fit-content" borderRadius={"1px"}
                                                _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer">
                                                    <Checkbox visibility={"hidden"} pos="absolute" />
                                                    <Flex opacity="0.5" _groupHover={{opacity: 1}} transition="all ease 0.5s"><Ui width="30px"/></Flex>
                                                    <Text fontSize={"sm"}>Design</Text>
                                                </HStack>

                                                <HStack role="group" border="1px solid" borderColor="rgba(255,255,255,0.2)" p="4" w="fit-content" borderRadius={"1px"}
                                                _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer">
                                                    <Checkbox visibility={"hidden"} pos="absolute" />
                                                    <Flex opacity="0.5" _groupHover={{opacity: 1}} transition="all ease 0.5s"><Dev width="29px"/></Flex>
                                                    <Text fontSize={"sm"}>Desenvolvimento</Text>
                                                </HStack>

                                                <HStack role="group" border="1px solid" borderColor="rgba(255,255,255,0.2)" p="4" w="fit-content" borderRadius={"1px"}
                                                _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer">
                                                    <Checkbox visibility={"hidden"} pos="absolute" />
                                                    <Flex opacity="0.5" _groupHover={{opacity: 1}} transition="all ease 0.5s"><Ads width="30px"/></Flex>
                                                    <Text fontSize={"sm"}>Anúncios</Text>
                                                </HStack>
                                            </Flex>
                                        </Stack>

                                        <MainButton>Continuar</MainButton>
                                    </Stack>
                                </Stack>
                            </HStack>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}