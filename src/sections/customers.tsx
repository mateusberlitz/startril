import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";

import Lance from '../../public/lance.svg';
import Queroluz from '../../public/queroluz.svg';
import Ane from '../../public/ane.svg';
import Gatech from '../../public/gatech.svg';
import SS from '../../public/ss.svg';

import LineAnimation from '../../public/line.svg';
import { ColoredTag } from "../components/ColoredTag";

export function Customers(){
    return(
        <Stack pt="48" spacing="20" pos="relative" direction={["column", "column", "row", "row"]}>
            <Stack w={["100%", "100%", "50%", "50%"]} spacing="12">
                <Stack spacing="6">
                    {/* <ColoredTag>Quem já se transformou</ColoredTag> */}
                    <TextTag>Quem já se transformou</TextTag>
                    <StarDivider maxW="120px"/>
                </Stack>
                <Heading color="white" fontSize="6xl" fontWeight={"semibold"}>São parceiros incríveis</Heading>
                <Text color="gray.500">Diferentes ramos, e resultados incríveis, trabalhos impressionantes. Engaje no seu objetivo como estas empresas.</Text>

            </Stack>

            <Stack w={["100%", "100%", "50%", "50%"]} zIndex={2} alignItems={"center"} justifyContent={"center"}>
                <Flex pos="absolute" zIndex={-1}>
                    <LineAnimation/>
                </Flex>
                <Stack direction={["column", "column", "row", "row"]} spacing="5" zIndex={2}>
                    <Stack spacing="5">
                        <Flex bg="rgba(255,255,255,0.05)" p="6" h="100px" justifyContent={"center"} backdropFilter={"blur(10px)"}>
                            <Flex maxW="140px"><Queroluz/></Flex>
                        </Flex>
                        <Flex bg="rgba(255,255,255,0.05)" p="6" h="100px" justifyContent={"center"} backdropFilter={"blur(10px)"}>
                            <Flex maxW="120px"><Lance/></Flex>
                        </Flex>
                        <Flex bg="rgba(255,255,255,0.05)" p="6" h="100px" justifyContent={"center"} backdropFilter={"blur(10px)"}>
                            <Flex maxW="140px"><Ane/></Flex>
                        </Flex>
                    </Stack>
                    <Stack spacing="5">
                        <Flex bg="rgba(255,255,255,0.05)" p="6" h="100px" justifyContent={"center"} backdropFilter={"blur(10px)"}>
                            <Flex maxW="140px"><SS/></Flex>
                        </Flex>
                        <Flex bg="rgba(255,255,255,0.05)" p="6" h="100px" justifyContent={"center"} backdropFilter={"blur(10px)"}>
                            <Flex maxW="140px"><Gatech/></Flex>
                        </Flex>
                        <Flex bg="rgba(255,255,255,0.05)" cursor={"pointer"} p="6" h="100px" alignItems={"center"} justifyContent={"center"} backdropFilter={"blur(10px)"} border="1px dashed" borderColor="rgba(255,255,255,0.1)" transition="all ease .5s" _hover={{bg: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-10px)"}}>
                            <Stack textAlign={"center"} spacing="1">
                                <Text fontSize={"11px"}>Espaço reservado para:</Text>
                                <Text color="white">Sua empresa</Text>
                            </Stack>
                        </Flex>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}