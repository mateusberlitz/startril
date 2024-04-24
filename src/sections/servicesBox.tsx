import { Box, Flex, HStack, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { OutlineButton } from "../components/Buttons/OutlineButton";
import { useRouter } from "next/router";

import DevIcon from '../../public/job2.svg';
import AdsIcon from '../../public/job3.svg';
import Ui from '../../public/job1.svg';
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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
                xPercent: 100,
                yPercent: 800,
            })
            .to("#light1", {
                delay: 0.5,
                duration: 2,
                xPercent: 150,
                yPercent: 500,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.5,
                xPercent: 80,
                yPercent: 800,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.5,
                xPercent: 110,
                yPercent: 900,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.4,
                xPercent: 150,
                yPercent: 1200,
            })
            .to("#light1", {
                duration: 2,
                delay: 0.4,
                xPercent: 190,
                yPercent: 1700,
            })
        });

        const sections = document.querySelectorAll(".sectionFade");

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.1 && e.classList.add("active")
            })
        }

        scrollAnimate()
        window.addEventListener("scroll", scrollAnimate);
    }, []);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack id="services" px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="22" spacing="20">
                    <Stack spacing="6" className="sectionFade">
                        <ColoredTag textAlign="center">O que fazemos?</ColoredTag>
                        <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"} textAlign="center">Os três pilares do <br/>negócio digital</Heading>
                    </Stack>

                    <Stack spacing="7" direction={["column", "column", "row", "row"]} pos="relative" className="sectionFade">
                        <Box id="light1" top="0" left="0" zIndex={2} width="12" height="12" bg="gradient" pos="absolute" borderRadius="full" filter="blur(8px)"/>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><Ui/></Flex>
                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Agilidade na Execução</Text>
                            <Text color="gray.500">Priorizamos pela execução ágil, não brincamos com o dinheiro do cliente ou deixamos dinheiro onde não da resultado.</Text>
                            {/* <Link href="/design">
                                <OutlineButton>Acessar página</OutlineButton>
                            </Link> */}
                        </Stack>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><DevIcon/></Flex>

                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Resultados Visiveis</Text>
                            <Text color="gray.500">Buscamos gerar bons resultados e principalmente que pagem o investimento e gerem resultados superiores ao esperado.</Text>
                            
                            {/* <Link href="/desenvolvimento">
                                <OutlineButton>Acessar página</OutlineButton>
                            </Link> */}
                        </Stack>

                        <Stack zIndex={3} backdropFilter={"blur(15px)"} spacing="8" bg="rgba(255,255,255,0.03)" maxW={["100%","100%","33%","33%"]} p="10" border="0px solid" borderColor="gray.900" _hover={{boxShadow: "0px 0px 130px 0px rgba(123,69,173,0.1)"}} transition="all ease 0.5s">
                        {/* __css={{borderImage:"linear-gradient(90deg, rgba(59, 161, 240, 1) -1.31%, rgba(114, 96, 223, 1) 91.65%)"}} */}
                            <HStack spacing="6">
                                <Flex maxW="50px"><AdsIcon/></Flex>
                
                            </HStack>
                            <Text fontSize={"2xl"} fontWeight="regular" color="white">Ajustes diários</Text>
                            <Text color="gray.500">Temos uma rotina diária de acompanhamento do seu negócio, analisando a performance e como podemos manter e melhorar o fluxo de recebimento de clientes.</Text>
                            
                            {/* <Link href="/trafego">
                                <OutlineButton>Acessar página</OutlineButton>
                            </Link> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}