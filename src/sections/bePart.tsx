import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { SolidButton } from "../components/Buttons/SolidButton";

import CustomersImage from '../../public/customers.svg';
import { useRouter } from "next/router";

export function BePArt(){
    const router = useRouter();

    return(
        <Flex id="" w="100%" bg="#080510" overflow="hidden" py="20" className="sectionFade" px="6">
            <Stack w="100%" maxW="1000px" bg="rgba(255,255,255,0.05)" border="1px solid" borderColor={"rgba(255,255,255,0.1)"} m="0 auto" spacing="6" justifyContent={"center"} textAlign={"center"} alignItems={"center"} p="14" px={["6","10","14"]}>
                <Stack direction={["column", "column", "row", "row"]}>
                    <Flex><CustomersImage/></Flex>
                    <Text textTransform={"uppercase"} textAlign={"left"}>faça parte do nosso time <br></br>de parceiros de sucesso</Text>
                </Stack>
                    
                <Heading bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}}>Dê o primeiro passo para o sucesso do seu negócio agora mesmo.</Heading>
            
                <Text>Entre em contato conosco e vamos tirar sua ideia do papel!</Text>

                <SolidButton onClick={() => router.push('/contato')}>Criar Briefing</SolidButton>
            </Stack>
        </Flex>
    )
}