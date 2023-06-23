import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Select } from "../components/Forms/Selects/Select";
import BgCones from '../../public/bg_star_cones.svg';
import { MainButton } from "../components/Buttons/MainButton";
import { useRouter } from "next/router";

export function StartNow(){
    const router = useRouter();

    return(
        <Flex w="100%" bg="#080510">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="32" spacing="0">
                <Flex pos="relative" bg="#3F3F3F" className="sectionFade">
                    <Box pos="absolute" zIndex="1" w="100%" height="100%">
                        <BgCones/>
                    </Box>

                    <Stack justifyContent={"space-between"} spacing="16" w="100%" zIndex={2} bg="rgba(8,5,16,0.7)" h="275px" p="14" direction={["column", "column", "row", "row"]}>
                        <Stack maxW="430px" spacing="6" justifyContent={"center"}>
                            <Heading color="white">É fácil começar agora</Heading>
                            <Text>Que tal solicitar nossos serviços através de um briefing prático que pode nos contar exatamente o que você precisa?</Text>
                        </Stack>
                        <Stack justifyContent={"center"}>
                            {/* <Select name="demand" label="Selecione sua demanda">
                                <option value="" style={{ background: '#0E1119' }}>Selecionar</option>
                                <option value="Anúncios" style={{ background: '#0E1119' }}>Anúncios</option>
                                <option value="Website" style={{ background: '#0E1119' }}>Website</option>
                                <option value="Design de projeto" style={{ background: '#0E1119' }}>Design de projeto</option>
                                <option value="E-commerce" style={{ background: '#0E1119' }}>E-commerce</option>
                                <option value="Landing Page" style={{ background: '#0E1119' }}>Landing Page</option>
                                <option value="Redesign" style={{ background: '#0E1119' }}>Redesign</option>
                                <option value="Sistema" style={{ background: '#0E1119' }}>Sistema</option>
                            </Select> */}
                            <MainButton onClick={() => router.push('/contato')}>Começar</MainButton>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Flex>
    )
}