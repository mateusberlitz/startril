import { HStack, Img, Stack } from "@chakra-ui/react";
import Link from "next/link";

export function Header(){
    return(
        <Stack as="nav" pos="fixed" top="0" w="100%" left="0" h="100px" transition="0.4s" bg="rgb(8,5,16,0.7)" justifyContent={"center"}>
            <HStack w="100%" m="0 auto" maxW="1200px" py="0" px="6" justify="space-between">
                <Link href="/"><Img src="startril.svg"/></Link>
            </HStack>
        </Stack>
    )
}