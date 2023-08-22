import { Link, Flex, Img, Stack, Text, HStack, Box, useBreakpointValue, useColorMode, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ShareLinks } from "../components/ShareLinks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import DefaultErrorPage from 'next/error'
import { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { blog } from "../services/blogApi";
import { ColorModebutton } from "../components/ColorModeButton";

interface Post{
    slug: string;
    title: string;
    category: string;
    author: string;
    description: string;
    detach?: boolean;
    cover: string;
    content: string;
    updatedAt: string;
}

interface PostProps{
    post?: Post;
}

export default function Post({post} : PostProps){
    const isWideVersion = useBreakpointValue({base: false, lg: true,});
    const router = useRouter();
    //const postUrl = router.pathname;
    const [postUrl, setPostUrl] = useState('');
    const [topicsVisibility, setTopicsVisibility] = useState(false);

    useEffect(() => {
        if(colorMode === "dark"){
            toggleColorMode();
        }

        if(isWideVersion){
            setTopicsVisibility(true);
        }
        setPostUrl(window.location.href);
    }, []);

    const { toggleColorMode, colorMode } = useColorMode();

    return !post ? (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <DefaultErrorPage statusCode={404} />
        </>
    ) 
    : (
        <>
            <Head>
                <title>{post.title} - Startril</title>
            </Head>

            <Header />

            <ColorModebutton/>

            <Flex w="100%" maxW="900px" m="0 auto" px="8" py="32" flexDirection={["column","column"]} mb="8" pt="16" align="flex-start" justifyContent="space-between">
                <Stack spacing="12">
                    <HStack fontSize={"md"}>
                        <Link href="/"><Text _hover={{textDecor:"underline"}} color="gray.800">Blog</Text></Link>
                        <Text><ChevronRight color="rgba(67, 67, 67, 0.5)"/></Text>
                        <Text>{post.title}</Text>
                    </HStack>

                    <Flex overflow="hidden" mb="9" borderRadius="4px">
                        <Img src={post.cover} w="100%" h="fit-content" />
                    </Flex>

                    <Text textTransform={"uppercase"} color="blue.primary" borderBottom="1px solid" width="fit-content">{post.category}</Text>

                    <Heading fontSize={["4xl", "5xl","6xl"]} mb="6" fontWeight="medium" lineHeight={"1.1em"}>{post.title}</Heading>

                    <Box className="postContent" fontSize={"lg"} fontWeight={"light"} dangerouslySetInnerHTML={{__html: post.content}} />

                    <Text color="blue.primary" opacity="0.6">Publicado em {post.updatedAt}</Text>

                    <ShareLinks url={postUrl} />
                </Stack>
            </Flex>

            <Footer/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params }) => {
    if(params){
        const { slug } = params;

        try{
            const { data } = await blog.post('', JSON.stringify({
                query: `{
                    post(filter: { slug: { eq: "${slug}" } }) {
                        title
                        id
                        _createdAt
                        author {
                        name
                        }
                        category {
                        name
                        }
                        cover {
                        url
                        }
                        detach
                        content
                        description
                        publishDate
                    } 
                }`
              })
            )

            const { post } = data.data;

            if(post){
                const formattedPost = {
                    //slug: post.slug,
                    title: post.title,
                    cover: post.cover.url,
                    category: post.category.name,
                    autor: post.author.name,
                    description: post.description,
                    detach: post.detach,
                    content: post.content,
                    updatedAt: post.publishDate ?  new Date(post.publishDate).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    }): ''
                }
            
                return {
                    props: {
                        post: formattedPost
                    }
                }
            }
        }catch(error: unknown){
            console.log("erro:", error);
    
            return {
                props: {}
            }
        }
    }

    return {
        props: {}
    }
}