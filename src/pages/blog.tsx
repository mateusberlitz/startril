import { Box, Flex, Grid, Heading, HStack, Stack, Text, useColorMode } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { blog } from "../services/blogApi";
import { Input } from "../components/Forms/Inputs/Input";
import { MainButton } from "../components/Buttons/MainButton";
import { ColorModebutton } from "../components/ColorModeButton";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";

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
    const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        if(colorMode === "dark" && !firstLoad){
            toggleColorMode();
            setFirstLoad(true);
        }
    }, [colorMode, firstLoad, setFirstLoad]);
    
    return(
        <Box position="relative">
            <Head>
                <title>Blog - Startril</title>

                <meta name="description" content="Cresça no seu conhecimento de negócios na internet junto conosco."></meta>
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

                    <Newsletter/>

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