import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Icon, Img, Stack, Switch, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import gsap from "gsap";
import Link from "next/link";
import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from "react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { OutlineButton } from "../Buttons/OutlineButton";
import { ChevronDown, Menu } from "react-feather";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);

export function Header(){
    const navRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const attach = gsap.fromTo(navRef.current, { 
            backgroundColor: "transparent" ,
            position: "relative",
            duration: 0.5,
            top: "0"
        },{ 
            position: "fixed",
            top: "10px",
            duration: 0.5,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(30px)"
        });

        const ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: "body",
                start: "120px 100px",
                end: "top 0",
                scrub: true,
                animation: attach
            });
        });
          
        return () => ctx.revert();
    }, [])

    const [isPortugueseLanguage, setIsPortugueseLanguage] = useState(true);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    
    return(
        <Stack as="nav" alignItems="center" pos="relative" top="0" w="100%" left="0" h="140px" transition="0.4s" justifyContent={"center"}>
             {/* bg="rgb(8,5,16,0.7)" backdropFilter="blur(40px)" */}
            <HStack ref={navRef} zIndex={99999} w="100%" m="0 auto" maxW="1200px" py="2" px="6" justify="space-between" h="80px" borderRadius="3">
            {/* pos="fixed" top="12px" bg="rgba(0,0,0,0.4)" backdropFilter={"blur(40px)"} */}
                <Link href="/"><Img src="startril.svg" maxW="150px"/></Link>

                {
                    isWideVersion ? (
                        <HStack spacing="7">
                            <Link href="/"><Text _hover={{color: "white"}} transition="all ease 0.5s">Home</Text></Link>
                            <Link href="/sobre"><Text _hover={{color: "white"}} transition="all ease 0.5s">Sobre nós</Text></Link>

                            {/* <Text fontWeight={"regular"} color="gray.600">|</Text>
                            <HStack>
                                <Text onClick={() => setIsPortugueseLanguage(true)} cursor="pointer" color={isPortugueseLanguage ? "white" : ""}>PT</Text>
                                <Switch isChecked={!isPortugueseLanguage} onChange={(event: ChangeEvent<HTMLInputElement>) => setIsPortugueseLanguage(!event.target?.checked)}/>
                                <Text onClick={() => setIsPortugueseLanguage(false)} cursor="pointer" color={!isPortugueseLanguage ? "white" : ""}>EN</Text>
                            </HStack> */}
                            
                            <OutlineButton onClick={() => router.push("/contato")} size="lg" hasAnimation={true}>Iniciar Projeto</OutlineButton>
                        </HStack>
                    ) : (
                        <>
                            <Button bg="transparent" onClick={onOpen} px="2" _focus={{bg:"transparent"}}>
                                <Text mr="3" color={"#fff"}>Menu</Text>
                                <Icon as={Menu} w="26px" h="26px" stroke={"#fff"} fill="none"/>
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                //finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent px="7" pr="16" bg="rgba(8, 5, 16, 0.7)" backdropFilter="blur(15px)" color="white">
                                    <DrawerCloseButton fontSize="16px" top="3" right="4"/>
                                    <Stack spacing="10" pt="12">
                                        {/* <HStack>
                                            <Text onClick={() => setIsPortugueseLanguage(true)} cursor="pointer" color={isPortugueseLanguage ? "white" : ""}>PT</Text>
                                            <Switch isChecked={!isPortugueseLanguage} onChange={(event: ChangeEvent<HTMLInputElement>) => setIsPortugueseLanguage(!event.target?.checked)}/>
                                            <Text onClick={() => setIsPortugueseLanguage(false)} cursor="pointer" color={!isPortugueseLanguage ? "white" : ""}>EN</Text>
                                        </HStack> */}
                                        <Link href="/"><Text _hover={{color: "white"}} transition="all ease 0.5s">Home</Text></Link>
                                        <Link href="/sobre"><Text _hover={{color: "white"}} transition="all ease 0.5s">Sobre nós</Text></Link>
                                        <OutlineButton onClick={() => router.push("/contato")} size="lg" hasAnimation={true}>Iniciar Projeto</OutlineButton>
                                    </Stack>
                                </DrawerContent>
                            </Drawer>
                        </>
                    )
                }

                {/* <HStack spacing="7">
                    <Link href="/"><Text _hover={{color: "white"}} transition="all ease 0.5s">Home</Text></Link>
                    <Link href="/sobre"><Text _hover={{color: "white"}} transition="all ease 0.5s">Sobre nós</Text></Link>
                    <Text fontWeight={"regular"} color="gray.600">|</Text>
                    
                    <HStack>
                        <Text onClick={() => setIsPortugueseLanguage(true)} cursor="pointer" color={isPortugueseLanguage ? "white" : ""}>PT</Text>
                        <Switch isChecked={!isPortugueseLanguage} onChange={(event: ChangeEvent<HTMLInputElement>) => setIsPortugueseLanguage(!event.target?.checked)}/>
                        <Text onClick={() => setIsPortugueseLanguage(false)} cursor="pointer" color={!isPortugueseLanguage ? "white" : ""}>EN</Text>
                    </HStack>
                    
                    <OutlineButton onClick={() => router.push("/contato")} size="lg" hasAnimation={true}>Iniciar Projeto</OutlineButton>
                </HStack> */}
            </HStack>
        </Stack>
    )
}