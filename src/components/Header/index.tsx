import { Button, HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { OutlineButton } from "../Buttons/OutlineButton";
import { ChevronDown } from "react-feather";
gsap.registerPlugin(ScrollTrigger);

export function Header(){
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // gsap.to(navRef.current, { 
            //     position: "relative",
            //     top: 0,
            //     duration: 0.5,
            //     scrollTrigger: {
            //         trigger: 'body',
            //         start: "top 0%",
            //         //end: "+",
            //         markers: true
            //     }
            // });

            gsap.to(navRef.current, { 
                position: "fixed",
                top: "10px",
                duration: 0.5,
                scrollTrigger: {
                    trigger: 'body',
                    start: 0,
                    end: "+=80px",
                    //markers: true
                }
            });
        });
          
        return () => ctx.revert();
    }, [])
    
    return(
        <Stack as="nav" alignItems="center" pos="relative" top="0" w="100%" left="0" h="140px" transition="0.4s" justifyContent={"center"}>
             {/* bg="rgb(8,5,16,0.7)" backdropFilter="blur(40px)" */}
            <HStack ref={navRef} zIndex={9} w="100%" m="0 auto" maxW="1200px" py="0" px="6" justify="space-between">
                <Link href="/"><Img src="startril.svg"/></Link>

                <HStack spacing="7">
                    <Link href="Home">Home</Link>
                    <Link href="Sobre Nós">Sobre nós</Link>
                    <Text fontWeight={"regular"} color="gray.600">|</Text>
                    <Button rightIcon={<Icon as={ChevronDown} />} fontWeight="regular" variant="ghost" color="gray.600" _hover={{bg: "transparent", color:"white"}}>Idioma: PT</Button>
                    <OutlineButton size="lg">Iniciar Projeto</OutlineButton>
                </HStack>
            </HStack>
        </Stack>
    )
}