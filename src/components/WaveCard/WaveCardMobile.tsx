import { Box, ChakraProps, Flex, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Edit } from "react-feather";
import { OutlineButton } from "../Buttons/OutlineButton";
import Wave from 'react-wavify';
import BackgroundStarLight from '../../../public/bg_star_light.svg';
import styles from './waveCard.module.css'
import gsap from "gsap";


interface WaveCardProps extends ChakraProps{
    active?:boolean;
    number: number;
    title: string;
    description: string;
    button?: ReactNode;
    onMouseEnter: (number: number) => void;
}

export function WaveCardMobile({active, number, title, description, button, onMouseEnter, ...rest}: WaveCardProps){
    const [isActive, setIsActive] = useState(active ?? false);
    const CardRef = useRef(null);
    const ShowCaseRef = useRef(null);
    const HallRef = useRef(null);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const handleMouseEnter = () => {
        onMouseEnter(number);
    }

    const expandAnimation = () => {
        gsap.to(CardRef.current, {
            height: "auto",
        });

        // gsap.to(ShowCaseRef.current, {
        //     marginLeft: -100,
        // });
    }

    const retractAnimation = () => {
        gsap.to(CardRef.current, {
            height: "100px",
        });

        gsap.to(ShowCaseRef.current, {
            marginLeft: 0,
        });

        // gsap.to(HallRef.current, {
        //     x: 0,
        // });
    }

    useEffect(() => {
        setIsActive(active ?? false);

        if(!active){
            retractAnimation();
        }
    }, [active]);

    // useLayoutEffect(() => {
    //     console.log(active);
    //     gsap.from(CardRef, {
    //         width: "100px"
    //     })
    // }, [active])

    return(
        <Stack direction={isWideVersion ? "row" : "column"} w="100%" ref={CardRef} cursor="pointer" pos="relative" overflow="hidden" spacing="0" {...rest} className={styles.waveCard} h={isActive ? "auto" : "100px"} border={isActive ? "" : "1px solid"} borderColor={isActive ? "gray.800" : "gray.700"} onClick={isActive ? () => {} : () => {handleMouseEnter(); expandAnimation()}}>
            {/* <Stack ref={ShowCaseRef} h={isWideVersion ? "100%" : "auto"} bg="rgba(0,0,0,0.7)" w="100%" spacing="0" direction={isWideVersion ? "column" : "row"}>
                <HStack spacing="0" borderTop="1px solid" borderColor="gray.800" h="100px">
                    <Flex alignItems={"center"} justifyContent="center" w="100px" h="100px">
                        <Text fontWeight={"regular"} fontSize="7xl" lineHeight={"100px"} bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}}>{number}</Text>
                    </Flex>
                </HStack>
                <Stack borderTop="1px solid" borderColor="gray.800" spacing="10" h={isWideVersion ? "100%" : "auto"} w={isWideVersion ? "auto" : "100%"} alignItems={"center"} justifyContent="center">
                    <Text fontWeight={"semibold"} fontSize="3xl" w={"fit-content"} transformOrigin="center" transform={isWideVersion ? "rotate(90deg)" : "rotate(0deg)"}>{title}</Text>
                </Stack>
            </Stack> */}

            <Stack pos="relative" spacing="0" h="100%" ref={HallRef}>
                {
                    isActive && (
                        <>
                            <Box pos="absolute" left="0" right="0" zIndex={1}>
                                <BackgroundStarLight/>
                            </Box>

                            <Box pos="absolute" bottom="-7px" left="0" right="0" zIndex={1}>
                                <Wave fill='url(#startril_gradient)'
                                        paused={false}
                                        options={{
                                            height: 10,
                                            amplitude: 50,
                                            speed: 0.2,
                                            points: 2
                                        }}
                                >
                                    <defs>
                                        <linearGradient id="startril_gradient" x1="-19.0615" y1="90.8762" x2="481.893" y2="255.981" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#3BA1F0"/>
                                            <stop offset="1" stop-color="#7260DF"/>
                                        </linearGradient>
                                    </defs>
                                </Wave>
                            </Box>
                        </>
                    )
                }
                    
                <Stack bg="rgba(0,0,0,0.7)" zIndex={2} backdropFilter="blur(30px)" spacing="0" h="100%" maxW="fit-content">
                    <HStack spacing="0" borderBottom="1px solid" borderLeft="1px solid" h="100px" borderTop="1px solid" borderColor="gray.800">
                        <Flex w="100px" h="100px" alignItems={"center"} justifyContent="center" borderRight="1px solid" borderColor="gray.800">
                            <Text fontWeight={"regular"} fontSize="7xl" lineHeight={"100px"} color="white">{number}</Text>
                        </Flex>
                        <Flex h="100px" alignItems={"center"} justifyContent="center" px="5">
                            <Text fontWeight={"semibold"} fontSize="2xl" color="white">{title}</Text>
                        </Flex>
                    </HStack>
                    <Stack p="12" spacing="10" h="100%">
                        <Text opacity={isActive ? 1 : 0} transition={isActive ? "all .5s ease 0.9s" : "all .5s ease 0s"} transform={isActive ? "translateY(0px)" : "translateY(30px)"}>{description}</Text>
                        <OutlineButton opacity={isActive ? 1 : 0} icon={Edit} w="100%" fontSize={"md"} h="55px" transition={isActive ? "all .5s ease 0.9s" : "all .5s ease 0s"}>Briefing Guiado</OutlineButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
    // ): (
    //     <Stack bg="rgba(0,0,0,0.7)" zIndex={2} backdropFilter="blur(30px)" w="100px" spacing="0" h="100%" borderRight="1px solid" borderColor="gray.700" onMouseOver={handleMouseEnter}>
    //         <HStack spacing="0" borderBottom="1px solid" borderTop="1px solid" borderColor="gray.800" h="100px">
    //             <Flex alignItems={"center"} justifyContent="center" w="100%" h="100px">
    //                 <Text fontWeight={"regular"} fontSize="7xl" lineHeight={"100px"} bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}}>{number}</Text>
    //             </Flex>
    //         </HStack>
    //         <Stack spacing="10" h="100%" alignItems={"center"} justifyContent="center">
    //             <Text fontWeight={"semibold"} fontSize="3xl" w="fit-content" transformOrigin="center" transform={"rotate(90deg)"}>{title}</Text>
    //         </Stack>
    //     </Stack>
    // )
}