import { Flex } from "@chakra-ui/react";
import StartrilIcon from '../../../public/icone_startril.svg';
import { useEffect } from "react";

export function Loader(){

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('@startril/load', 'true');
        }, 7000);
    }, [])

    return(
        <Flex className="intro" zIndex={99} w="100vw" h="100vh" position={"fixed"} bg="black" justifyContent={"center"} alignItems="center">
            <StartrilIcon/>
        </Flex>
    )
}