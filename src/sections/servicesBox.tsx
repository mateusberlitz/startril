import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { OutlineButton } from "../components/Buttons/OutlineButton";
import { useRouter } from "next/router";

import DevIcon from '../../public/dev.svg';
import AdsIcon from '../../public/ads.svg';
import Ui from '../../public/ui.svg';
import { useEffect } from "react";
import { gsap } from "gsap";

export function ServicesBox(){
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 2,
                yoyo:true
            });

            timeline
            .to("#light1", {
                delay: 0.5,
                duration: 2,
                xPercent: 200,
                yPercent: 800,
            })
            .to("#light1", {
                delay: 0.5,
                duration: 2,
                xPercent: 750,
                yPercent: 500,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.5,
                xPercent: 1250,
                yPercent: 350,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.5,
                xPercent: 1750,
                yPercent: 900,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.4,
                xPercent: 2750,
                yPercent: 300,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.4,
                xPercent: 2750,
                yPercent: 700,
            })
        });
    }, []);

    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="22" spacing="20">
                    <Stack spacing="6">
                        <ColoredTag textAlign="center">O que fazemos?</ColoredTag>
                        <Heading color="white" fontSize="6xl" fontWeight={"semibold"} textAlign="center">Os três pilares do <br/>negócio digital</Heading>
                    </Stack>

                    <Stack spacing="7" direction={["column", "column", "row", "row"]} pos="relative">
                        <Box id="light1" top="0" left="0" zIndex={2} width="12" height="12" bg="gradient" pos="absolute" borderRadius="full" filter="blur(8px)"/>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><Ui/></Flex>
                                <Text color="gray.600">UI & UX</Text>
                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Design de Interfaces</Text>
                            <Text color="gray.500">Desenvolvemos as telas mais coerentes possíveis para a experiência do seu usuário, transmitindo as sensações corretas da sua marca.</Text>
                            {/* <OutlineButton onClick={() => router.push('/design')}>Acessar página</OutlineButton> */}
                        </Stack>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><DevIcon/></Flex>
                                <Text color="gray.600">Sites e Sistemas</Text>
                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Desenvolvimento</Text>
                            <Text color="gray.500">Programamos a sua plataforma digital com todas as interações e transações necessárias entre a sua equipe e seu consumidor final, com alta performance e segurança.</Text>
                            {/* <OutlineButton onClick={() => router.push('/dev')}>Acessar página</OutlineButton> */}
                        </Stack>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><AdsIcon/></Flex>
                                <Text color="gray.600">Tráfego Pago</Text>
                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Anúncios e Impulsão</Text>
                            <Text color="gray.500">Posicionamos e direcionamos a sua empresa ao público certo, impulsionando a sua visibilidade e ampliando o retorno sobre o investimento.</Text>
                            {/* <OutlineButton onClick={() => router.push('/ads')}>Acessar página</OutlineButton> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}