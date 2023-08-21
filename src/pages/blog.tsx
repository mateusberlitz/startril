import { Box, Flex, Grid, Heading, HStack, Icon, Img, Stack, Text, useColorMode } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { TextTag } from "../components/TextTag";
import Head from "next/head";
import { gql } from '@apollo/client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Moon, Sun } from "react-feather";
import client from "../services/apollo";
import { blog } from "../services/blogApi";
import { Input } from "../components/Forms/Inputs/Input";
import { MainButton } from "../components/Buttons/MainButton";
import { ColorModebutton } from "../components/ColorModeButton";
import { Footer } from "../components/Footer";

interface Post{
    slug: string;
    title: string;
    category: string;
    description: string;
    detach?: boolean;
    cover: string;
    updatedAt: string;
}

interface BlogProps{
    posts: Post[];
}

export default function Blog({posts}: BlogProps){
    const { toggleColorMode, colorMode } = useColorMode();

    useEffect(() => {
        if(colorMode === "dark"){
            toggleColorMode();
        }
    }, [colorMode]);

    useEffect(() => {
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
    
    return(
        <Box position="relative">
            <Head>
                <title>Blog - S&S Investimentos</title>

                <meta name="description" content="Cresça no seu conhecimento financeiro junto conosco."></meta>
            </Head>

            <Header/>

            <ColorModebutton/>

            <Flex flexDir="column" w="100%" px="6">
                <Stack flexDir="column" w="100%" maxW="1200px" m="0 auto" py="36" pt="16" spacing="20" justifyContent="space-between">
                    <Stack spacing="5">
                        <HStack fontSize={"md"}>
                            <Link href="/"><Text _hover={{textDecor:"underline"}} color="gray.800">Home</Text></Link>
                            <Text><ChevronRight color="rgba(67, 67, 67, 0.5)"/></Text>
                            <Text>Blog</Text>
                        </HStack>
                    </Stack>

                    <Flex id="" w="100%" bg={colorMode === "dark" ? "#080510" : "white"} overflow="hidden" py="0" className="sectionFade" px="0">
                        <Stack w="100%" maxW="1200px" bg={colorMode === "dark" ? "rgba(255,255,255,0.05)" : "gray.100"} border="1px solid" borderColor={colorMode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} m="0 auto" spacing="6" justifyContent={"center"} textAlign={"center"} alignItems={"center"} p="14" px={["6","10","14"]}>
                            <Heading fontSize={"3xl"} color={colorMode === "dark" ? "white" : "black"} fontWeight={"semibold"}>Conteúdos para elevar seu nível</Heading>
                            <Text>Inscreva-se para receber dicas, novidades e ofertas exclusivas!</Text>
                            <HStack alignItems={"flex-end"}>
                                <Input name="email" type="text" placeholder="joao@email.com" label="Seu e-mail"/>
                                <MainButton>Cadastrar</MainButton>
                            </HStack>
                        </Stack>
                    </Flex>

                    <Grid templateColumns="repeat(3, 1fr)" gap={12}>

                        {
                            posts.map(post => (
                                // <Post key={post.slug} slug={post.slug} image={post.image} title={post.title} date={post.updatedAt} time={post.time}/>
                                <Card key={post.slug} hasButton={false} gridColumn={["span 3", "span 3", `span 1`]}  title={post.title} category={post.category} description={post.description} text="" imgUrl={post.cover} href={post.slug}/>
                            ))
                        }
                        
                        {/* <Card gridColumn={["span 3", "span 3", "span 1"]} bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/money.png" href="investimento"/>

                        <Card gridColumn={["span 3", "span 3", "span 1"]} bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/house.png" href="investimento"/>
                        
                        <Card gridColumn={["span 3", "span 3", "span 1"]} bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/money.png" href="investimento"/>

                        <Card gridColumn={["span 3", "span 3", "span 2"]} bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/car.png" href="investimento"/>

                        <Card gridColumn={["span 3", "span 3", "span 1"]} bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/moneyTest.png" href="investimento"/>
                    
                        <Card gridColumn={["span 3", "span 3", "span 2"]} flexDir="row" bg="white" title="Investimento" text="Adquira o seu plano para aquisição de imóvel, veículo ou investimento." imgUrl="/images/moneyTest.png" href="investimento"/>
                     */}
                    </Grid>
                </Stack>
            </Flex>

            <Footer/>
        </Box>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await blog.post('', JSON.stringify({
        query: `{
            allPosts{
                id
                title
                cover{
                    url
                }
                slug
                publishDate
                category{
                    name
                }
            }
          }`
      })
    )

    const posts = data.data.allPosts.map((post:any) => {
        return {
            id: post.id,
            slug: post.slug,
            title: post.title,
            cover: post.cover.url,
            category: post.category.name,
            //description: post.description,
            updatedAt: post.publishDate,
            //detach: post.detach,
            // updatedAt: post.publishDate ?  new Date(post.publishDate).toLocaleDateString('pt-BR', {
            //     day: '2-digit',
            //     month: 'long',
            //     year: 'numeric'
            // }): ''
        }
    });
    //const { posts } = data;

    return {
        props: {
            posts
        },
    }
}