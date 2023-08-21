import { AspectRatio, ChakraProps, Flex, HStack, Heading, Icon, Img, Link, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MainButton } from "../Buttons/MainButton";
import { OutlineButton } from "../Buttons/OutlineButton";
import { SolidButton } from "../Buttons/SolidButton";
import { ArrowUpRight } from "react-feather";

interface CardProps extends ChakraProps{
    title: string;
    text: string;
    hasButton?: Boolean;
    hrefArea?: Boolean;
    href?: string;
    imgUrl?: string;
    category?: string;
    description?: string;
}

export function Card({title, category, description, text, imgUrl, href, hasButton = true, hrefArea = false, ...rest} : CardProps){
    const { colorMode } = useColorMode();

    return (
        <Flex as="a" role="group" href={href} flexDir="column" overflow="hidden" justifyContent="space-between" transition="all ease 0.5s" {...rest}>

            <AspectRatio maxW='100%' ratio={4 / 3}>
                <Img src={imgUrl} alt={title} w="100%" borderRadius="0" objectFit='cover'/>
            </AspectRatio>

            {/* <Flex w="100%" alignItems="end">
                <Img src={imgUrl} alt={title} w="100%" borderRadius="6"/>
            </Flex> */}

              <Stack spacing="4" bg={colorMode === "dark" ? "rgba(255,255,255,0.05)" : "gray.100"} p="5" py="8">
                <Text fontWeight="light" fontSize="sm" color="gray.700" textTransform={"uppercase"}>{category}</Text>

                <Text fontSize="2xl" fontWeight={"medium"} lineHeight="1.2em" _groupHover={{textDecor: "underline"}} color={colorMode === "dark" ? "white" : "black"} transition="all ease 0.5s">{title}</Text>

                <Text fontSize="md" fontWeight={"light"} lineHeight="">{description}</Text>

                <Link href={href}>
                    <HStack>
                        <Text>Ver mais</Text>
                        <Icon as={ArrowUpRight} />
                    </HStack>
                </Link>
                
                {/* <OutlineButton size="md" fontWeight={"regular"} onClick={() => {href && router.push(href)}}>
                    Ver mais
                </OutlineButton> */}
              </Stack>

        </Flex>
    )
}