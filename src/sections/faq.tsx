import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";

export function Faq(){
    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="22" spacing="20" direction={["column", "column", "column", "column"]}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                        <Stack spacing="6">
                            <TextTag>Faq</TextTag>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Ficou com alguma dúvida?</Heading>
                        <Text color="gray.500">Confira nossas perguntas frequentes abaixo.</Text>
                    </Stack>

                    <Tabs variant="startril" maxW="700px">
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
                                                Section 1 title
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
                                                Section 1 title
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
                                                Section 1 title
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
                                                Section 1 title
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
                                                Section 1 title
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
                                                Section 1 title
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