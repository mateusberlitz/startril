import '../styles/main.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, useBreakpointValue } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { useEffect } from 'react';

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
