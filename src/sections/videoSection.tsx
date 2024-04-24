import { AspectRatio, Button, Flex, Heading, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, UnorderedList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { PlayCircle } from "react-feather";
import { ColoredTag } from "../components/ColoredTag";

export function VideoSection(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width={"100%"} maxWidth={"1200px"} h="70%">
                    <ModalCloseButton />
                    <ModalBody width={"100%"} h="100%" p={2} bg="gray.900">
                        {/* <AspectRatio maxW='560px' ratio={1}> */}
                            <iframe width={"100%"} height={"100%"} src="https://www.youtube-nocookie.com/embed/kVJ-H7y1qvk?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        {/* </AspectRatio> */}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* <Flex onClick={onOpen} _hover={{cursor:"url(./play_cursor.png), auto"}} borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={isWideVersion ? "center right" : "-540px"}> */}
            <Flex borderTop="0px solid" pos="relative" borderColor="rgba(255,255,255,0.1)" bgImage={"./mateus_video.jpg"} bgSize={"cover"} bgPos={isWideVersion ? "center right" : "-540px"}>
                <Flex pos="absolute" top="0" left="0" bottom="0" right="0" bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 75.68%);">
                    {/* <Img src="./mateus_video.jpg" border={"2px solid"} borderColor="rgba(255,255,255,0.1)"/> */}
                </Flex>

                <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="0" spacing="14" h={["90vh", "90vh", "90vh", "100vh", "95vh"]} maxH="940px" pos="relative" justifyContent={"center"}>
                    <Stack spacing="14" className="sectionFade">
                        {/* <PlayCircle/> */}
                        <Stack maxW="500px" spacing="10">
                            {/* <ColoredTag>Veja o vídeo e entenda</ColoredTag> */}
                            <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"}>Transparência no Processo</Heading>
                        </Stack>

                        <Stack spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
                            <Stack w={["100%", "100%", "50%", "50%"]}>
                                
                            <UnorderedList>
                                <ListItem _hover={{textDecor: "underline #85C7FB"}} transition="all ease 0.5s" color={"#ffffff"} fontSize={"26px"}>Escalabilidade no negócio;</ListItem>
                                <ListItem _hover={{textDecor: "underline #85C7FB"}} transition="all ease 0.5s" color={"#ffffff"} fontSize={"26px"}>Relatórios de vendas e investimento em tempo real;</ListItem>
                                <ListItem _hover={{textDecor: "underline #85C7FB"}} transition="all ease 0.5s" color={"#ffffff"} fontSize={"26px"}>Projeção das suas vendas;</ListItem>
                                <ListItem _hover={{textDecor: "underline #85C7FB"}} transition="all ease 0.5s" color={"#ffffff"} fontSize={"26px"}>Equipe focada em resultados.</ListItem>
                            </UnorderedList>

                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}