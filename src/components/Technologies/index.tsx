import { HStack, Stack, Text } from "@chakra-ui/react";

import Laravel from '../../public/laravel.svg';
import Figma from '../../public/figma.svg';
import Next from '../../public/next.svg';
import React from '../../public/react.svg';

export function Technologies(){
    return(
        <Stack spacing="5">
            <Text color="gray.300">Tecnologias utilizadas:</Text>
            <HStack spacing="7" color="white">
                <HStack>
                    <Figma/>
                    <Text>Figma</Text>
                </HStack>

                <HStack>
                    <React/>
                    <Text>React</Text>
                </HStack>

                <HStack>
                    <Next />
                    <Text>Next.js</Text>
                </HStack>

                <HStack>
                    <Laravel />
                    <Text>Laravel</Text>
                </HStack>
            </HStack>
        </Stack>
    )
}