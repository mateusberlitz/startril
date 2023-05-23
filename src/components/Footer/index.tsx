import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";

import LogoWhite from '../../../public/logo_white.svg';
import StartrilIcon from '../../../public/icone_startril.svg';
import Link from "next/link";

export function Footer(){
    return(
        <Flex w="100%" bg="#080510">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="10">
                <Stack spacing="12">
                    <Heading color="white">Eleve o seu nível conosco!</Heading>

                    <HStack spacing="20">
                        <Stack>
                            <Text fontSize={"14px"} color="gray.700">Email</Text>
                            <Link href={"https://www.instagram.com/startril.web/"}>
                                <Text w="fit-content" color="white" _hover={{color:"white", _before: { bg: "white", transition:"all ease 0.3s"}}} transition={"all ease 0.3s"} pos="relative" _before={{content: '""', pos:"absolute", width: "100%", bottom: "-1", h: "1px", bg: "gray.800", transition:"all ease 0.3s"}}>
                                    contato@startril.com.br
                                </Text>
                            </Link>
                        </Stack>

                        <Stack>
                            <Text fontSize={"14px"} color="gray.700">Whatsapp</Text>
                            <Link href={"https://www.instagram.com/startril.web/"}>
                                <Text w="fit-content" color="white" _hover={{color:"white", _before: { bg: "white", transition:"all ease 0.3s"}}} transition={"all ease 0.3s"} pos="relative" _before={{content: '""', pos:"absolute", width: "100%", bottom: "-1", h: "1px", bg: "gray.800", transition:"all ease 0.3s"}}>
                                    (51) 99109-0700
                                </Text>
                            </Link>
                        </Stack>
                    </HStack>

                    <StartrilIcon/>
                </Stack>
                <HStack borderTop="1px solid" borderColor="gray.900" pt="10" justifyContent={"space-between"}>
                    <HStack>
                        <LogoWhite/>
                        <Text fontSize={"12px"}>Startril © Made with zeal!</Text>
                    </HStack>

                    <HStack fontSize={"sm"} spacing="5">
                        <Link href={"https://www.instagram.com/startril.web/"}>
                            <Text textTransform={"uppercase"} letterSpacing={"0.1em"} _hover={{color:"white"}} transition={"all ease 0.3s"}>Instagram</Text>
                        </Link>
                        <Link href={"https://www.linkedin.com/company/startril/"}>
                            <Text textTransform={"uppercase"} letterSpacing={"0.1em"} _hover={{color:"white"}} transition={"all ease 0.3s"}>Linkedin</Text>
                        </Link>
                    </HStack>
                </HStack>
            </Stack>
        </Flex>
    )
}