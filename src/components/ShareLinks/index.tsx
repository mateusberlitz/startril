import { HStack, Icon, Link, Stack, Text, useColorMode } from "@chakra-ui/react";

import { Facebook, Instagram, Mail, Twitter } from 'react-feather';
import Whatsapp from '../../../public/whatsapp.svg';
import { socialShareLink } from "../../utils/SocialShareLinks";

interface ShareLinkProps{
    url: string;
}

export function ShareLinks({url}: ShareLinkProps){
    const { colorMode } = useColorMode();

    return (
        <Stack px="0" py="1" spacing="4">
            <Text color="blue.primary">Compartilhe:</Text>

            <HStack spacing="5">
                <Link target="_blank" href={`${socialShareLink.whatsapp.shareUrl}${url}`}>
                    <Icon as={Whatsapp} fill={colorMode === "dark" ? "gray.text" : "#000"} w="23px" h="23px" strokeWidth="2"/>
                </Link>

                <Link target="_blank" href={`${socialShareLink.facebook.shareUrl}${url}`}>
                    <Icon as={Facebook} stroke={colorMode === "dark" ? "gray.text" : "#000"} fill="none" w="23px" h="23px" strokeWidth="2"/>
                </Link>

                {/* <Link target="_blank" href={`${socialShareLink.instagram.shareUrl}${url}`}>
                    <Icon as={Instagram} stroke="#D69766" fill="none" w="23px" h="23px" strokeWidth="2"/>
                </Link> */}

                {/* <Link target="_blank" href={`${socialShareLink.twitter.shareUrl}${url}`}>
                    <Icon as={Mail} stroke="#D69766" fill="none" w="23px" h="23px" strokeWidth="2"/>
                </Link> */}
            </HStack>
        </Stack>
    )
}