import { Stack } from "@chakra-ui/react"
import Funil from '../../../public/funil.svg';
import { useEffect } from "react";
import { gsap } from "gsap";

export function FunilAnimation(){
    // useEffect(() => {   
    //     const steps = document.querySelector(".funil_svg__step");
    //     if(steps){
    //         steps.addEventListener("mouseenter", () => animation.play());

    //         const ctx = gsap.context(() => {
    //             gsap.to()
    //         });
            
    //         return () => ctx.revert();
    //     }
    // }, [gsap])
    
    return(
        <Funil/>
    )
}