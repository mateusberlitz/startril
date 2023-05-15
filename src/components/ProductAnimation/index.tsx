import { useEffect } from 'react';
import ProductSketch from '../../../public/product_animation.svg';
import { gsap } from 'gsap';
import { Stack, Text } from '@chakra-ui/react';

export function ProductAnimation(){
    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 1
            });

            timeline.set(".product_animation_svg__sketch_square", { 
                scale: 0,
              })
              .to(".product_animation_svg__sketch_square", { 
                scale: 1,
                duration: 1.2
              })
              .set(".product_animation_svg__pen", { 
                x: -600,
                y: -400
              }, "<")
              .to(".product_animation_svg__pen", { 
                x: 0,
                y: 0,
                duration: 1.2
              }, "<")
              .set(".product_animation_svg__login_box", { 
                opacity:0,
                scaleX:0,
                transformOrigin: "center center"
              }, 0)
              .to(".product_animation_svg__login_box", { 
                opacity:1,
                scaleX:1,
                transformOrigin: "center center",
                duration: 0.5,
              })
              .set(".product_animation_svg__floatElement", { 
                y: 600,
              }, 0)
              .to(".product_animation_svg__floatElement", { 
                y: 0,
                duration: 1
              })
              .to(".product_animation_svg__cursor", { 
                y: 95,
                x: -350,
                duration: 1
              })
              .to(".product_animation_svg__floatElement", { 
                x: -800,
                duration: 1.5
              }, "+=0.3")
              .to(".product_animation_svg__login_box", { 
                x: -800,
                duration: 1.5
              }, "<")
              .to(".product_animation_svg__cursor", { 
                y: 60,
                x: -200,
                duration: 1
              }, "<")
              .to(".product_animation_svg__secondStepElement", { 
                x: -530,
                duration: 1.5
              }, "<")
              .to(".product_animation_svg__fixedSecondStepElement", { 
                x: -530,
                duration: 1.5
              }, "<")
              .to(".product_animation_svg__finalCheck", { 
                x: -530,
                duration: 1.5
              }, "<")
              .to(".product_animation_svg__cursor", { 
                y: 95,
                x: -325,
                duration: 1.5
              }, "+=0.3")
              .to(".product_animation_svg__secondStepElement", { 
                x: -1300,
                duration: 1.5,
              }, "+=0.3")
              .to(".product_animation_svg__finalCheck", { 
                x: -580,
                y: -50,
                duration: 0.5,
                scale: 2
              }, "<")
        });
          
        return () => ctx.revert();
    }, [])

    return(
        <Stack>
            <ProductSketch/>
            <Text fontSize={"sm"} color="gray.700" fontStyle={"italic"}>Exemplo de aplicação</Text>
        </Stack>
    )
}