import { Box, Flex, Heading, Img, Stack, Text, transition, useBreakpointValue } from "@chakra-ui/react";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";

import LineAnimation from '../../public/line.svg';
import { ColoredTag } from "../components/ColoredTag";
import Image from "next/image";

export function Customers(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>

                    <Stack alignItems={"center"} w={"100%"} direction={["column"]} spacing="5">

                        <Heading marginBottom={"50px"} fontSize={"36px"} color={"#ffffff"} fontWeight={"bold"}>Expertise em Diversos Setores do Mercado</Heading>

                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c1.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c2.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c3.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c4.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c5.png" />
                            </Flex>
                        </Stack>

                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c6.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c7.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c8.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c9.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c10.png" />
                            </Flex>
                            
                        </Stack>

                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c11.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c12.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c13.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c14.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c15.png" />
                            </Flex>
                            
                        </Stack>

                        <Stack direction={["column", "column", "row", "row"]} spacing="5">
                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c16.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c17.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c18.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c19.png" />
                            </Flex>

                            <Flex _hover={{backgroundColor: "#141F32", transition:"all ease 0.5s"}} bg="rgba(255,255,255,0.05)" p="1" h="100px" w="200px" justifyContent={"center"} backdropFilter={"blur(10px)"}>  
                                <Img src="/costumers/c20.png" />
                            </Flex>
                            
                        </Stack>


                    </Stack>

                </Stack>
            </Stack>
        </Flex>
    )
}