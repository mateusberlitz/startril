import { useEffect } from 'react';
import AdsSketch from '../../../public/ads_animation_mobile.svg';
import { gsap } from 'gsap';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { ArrowUp, BarChart, Heart } from 'react-feather';

export function AdsAnimationMobile(){
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerEffect({
                name:"counter",
                extendTimeline:true,
                defaults:{
                  end:0,
                  duration:0.5,
                  ease:"power1",
                  increment:1,
                },
                effect: (targets: any, config: any) => {
                let tl = gsap.timeline()
                let num = targets[0].innerText.replace(/\,/g,'')
                targets[0].innerText = num
                
                tl.to(targets, {duration:config.duration, 
                           innerText:config.end, 
                           //snap:{innerText:config.increment},
                           modifiers:{
                             innerText:function(innerText){
                               return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                             }
                           },
                           ease:config.ease}, 0)
                
                return tl
              }
              })

              gsap.registerEffect({
                name:"counterMoney",
                extendTimeline:true,
                defaults:{
                  end:0,
                  duration:0.5,
                  ease:"power1",
                  increment:1,
                },
                effect: (targets: any, config: any) => {
                let tl = gsap.timeline()
                let num = targets[0].innerText.replace(/\,/g,'')
                targets[0].innerText = num
                
                tl.to(targets, {duration:config.duration, 
                           innerText:config.end, 
                           //snap:{innerText:config.increment},
                           modifiers:{
                             innerText:function(innerText){
                               //return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                               return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',}).format(gsap.utils.snap(config.increment, innerText));
                             }
                           },
                           ease:config.ease}, 0)
                
                return tl
              }
              })

            gsap.to(".ads_animation_mobile_svg__loader", { 
                repeat: -1,
                rotate: 360,
                transformOrigin: "center center",
                delay: 1.2,
                ease: "none"
              });

                const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 2,
                });

                timeline
                .fromTo(".ads_animation_mobile_svg__line_chart", { 
                    //drawSVG: '0%'
                    strokeDasharray: 500,
                    strokeDashoffset: 500
                }, {    
                    //drawSVG: '100%',
                    strokeDashoffset: 0,
                    duration: 4
                })
                .fromTo("#invest", { 
                    autoAlpha: 0
                  }, {
                    autoAlpha: 1
                }, "<")
                .counterMoney("#invest_value", {end:65000, increment:10, duration: 4}, "<")
                .fromTo("#reach", { 
                    autoAlpha: 0
                  }, {
                    autoAlpha: 1
                }, "<")
                .counter("#reach_value", {end:1316898, increment:10, duration: 4}, "<")
                .fromTo("#sales2", { 
                    autoAlpha: 0
                  }, {
                    autoAlpha: 1
                }, "<")
                .counterMoney("#sales2_value", {end:329523, increment:10, duration: 4}, "<")
                .fromTo("#clicks", { 
                    autoAlpha: 0
                  }, {
                    autoAlpha: 1
                }, "<")
                .counter("#clicks_value", {end:72345, increment:10, duration: 4}, "<")
        });
          
        return () => ctx.revert();
    }, [])

    function numberWithPoint(x:number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
        <Stack pos="relative">
            <AdsSketch/>

            <HStack pos="absolute" top="20%" left="60px" spacing="8">
                <Stack spacing="5">
                    <Stack id="invest" spacing="1">
                        <Text fontSize={"11px"} opacity={0.5}>Investimento</Text>
                        <Text id="invest_value" color="#3BA1F0">R$65.000,00</Text>
                    </Stack>

                    <Stack id="reach" spacing="1">
                        <Text fontSize={"11px"} opacity={0.5}>Alcance</Text>
                        <Text id="reach_value">1.316.898</Text>
                    </Stack>
                </Stack>

                <Stack spacing="5">
                    <Stack id="sales2" spacing="1">
                        <Text fontSize={"11px"} opacity={0.5}>Vendas</Text>
                        <Text id="sales2_value" color="#31D0AA">R$329.523,00</Text>
                    </Stack>

                    <Stack id="clicks" spacing="1">
                        <Text fontSize={"11px"} opacity={0.5}>Cliques</Text>
                        <Text id="clicks_value">72.345</Text>
                    </Stack>
                </Stack>
            </HStack>
            
            {/* <Text fontSize={"sm"} color="gray.700" fontStyle={"italic"}>Exemplo de aplicação</Text> */}
        </Stack>
    )
}