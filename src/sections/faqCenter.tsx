import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";

export function FaqCenter(){
    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" pb="56" spacing="0">
                <Stack pt="22" spacing="20" direction={["column", "column", "column", "column"]} alignItems={"center"} zIndex={2}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                        <Stack spacing="6" className="sectionFade">
                            <ColoredTag textAlign="center">FAQ</ColoredTag>
                            <Heading color="white" fontSize="6xl" fontWeight={"semibold"} textAlign="center">Ficou com alguma dúvida?</Heading>
                        </Stack>
                    </Stack>

                    <Tabs variant="startril" maxW="700px" className="sectionFade">
                        <Box id="moon" zIndex={-1} w="400px" h="400px" left={"0"} right="0" m="0 auto" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(200px)"/>
                        
                        <TabList>
                            <Tab>Desenvolvimento</Tab>
                            <Tab>Anúncios</Tab>
                            <Tab>Design</Tab>
                        </TabList>

                        <TabPanels>

                            <TabPanel>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês desenvolvem sites e sistemas personalizados ou utilizam templates predefinidos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quanto tempo leva para completar um projeto?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem suporte contínuo após a entrega do projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quais linguagens de programação vocês utilizam
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem serviços de programação frontend e backend
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Posso colocar meu funcionário de design ou programação para ajudar no projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>

                            <TabPanel>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem suporte contínuo após a entrega do projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quais linguagens de programação vocês utilizam
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>

                            <TabPanel>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem serviços de programação frontend e backend
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Posso colocar meu funcionário de design ou programação para ajudar no projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                    {/* <Stack spacing="10">
                        <Stack border="1px solid" borderColor="rgba(255,255,255,0.1)" p="5" borderRadius="3" spacing="">
                            <Heading fontSize={"xl"} color="white">Lorem ipsum dolor sit amet consectetur.</Heading>
                            <Text>Confira nossas perguntas frequentes abaixo.</Text>
                        </Stack>
                    </Stack> */}
                </Stack>    
            </Stack>
        </Flex>
    )
}