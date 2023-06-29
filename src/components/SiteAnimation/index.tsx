import { useEffect } from 'react';
import SiteSketch from '../../../public/site_animation.svg';
import { gsap } from 'gsap';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { ArrowUp, BarChart, Heart } from 'react-feather';

export function SiteAnimation(){
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.config({
                nullTargetWarn: false,
            });

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

            gsap.to(".site_animation_svg__loader", { 
                repeat: -1,
                rotate: 360,
                transformOrigin: "center center",
                delay: 1.2,
                ease: "none"
              });
              
              const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 1,
                onUpdate: updateProgressBar
              });

              const loadBar = document.querySelector('.site_animation_svg__load_bar');
                
              function updateProgressBar(){
                if(loadBar){
                    gsap.set(".site_animation_svg__load_bar", {scaleX:timeline.progress(), transformOrigin:"0px 0px"});
                }
              }
              
              timeline
              .set(".site_animation_svg__trace", { 
                y: 500
              })
              .fromTo(".site_animation_svg__site_sketch", { 
                y: 500
              }, {
                y: 0,
                duration: 1.2
              })
              .fromTo(".site_animation_svg__load_bar_black", { 
                y: 500
              }, {
                y: 0,
                duration: 1.2
              }, "<")
              .fromTo(".site_animation_svg__logo", { 
                autoAlpha: 0
              }, {
                autoAlpha: 1
              })
              .fromTo(".site_animation_svg__loader", { 
                autoAlpha: 0
              }, {
                autoAlpha: 1
              })
              .fromTo("#access", { 
                autoAlpha: 0
              }, {
                autoAlpha: 1
              })
              .counter("#access_value", {end:112898, increment:10, duration: 2})
              .fromTo("#leads", { 
                autoAlpha: 0
              }, {
                autoAlpha: 1
              })
              .counter("#leads_value", {end:17343, increment:10, duration: 2})
              .fromTo("#sales", { 
                autoAlpha: 0
              }, {
                autoAlpha: 1
              })
              .counter("#sales_value", {end:3232, increment:10, duration: 2})
        });
          
        return () => ctx.revert();
    }, [])

    function numberWithPoint(x:number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
        <Stack pos="relative" w="100%">
            <SiteSketch />
            <Stack pos="absolute" top="36%" left="80px">
                <HStack id="access">
                    <ArrowUp width="16px"/>
                    <Text fontSize={"11px"} opacity={0.5}>Acessos</Text>
                    <Text id="access_value">112898</Text>
                </HStack>

                <HStack id="leads">
                    <Heart width="16px"/>
                    <Text fontSize={"11px"} opacity={0.5}>Leads</Text>
                    <Text id="leads_value">17.343</Text>
                </HStack>

                <HStack id="sales">
                    <BarChart width="16px"/>
                    <Text fontSize={"11px"} opacity={0.5}>Vendas</Text>
                    <Text id="sales_value">3.232</Text>
                </HStack>
            </Stack>
            {/* <Text fontSize={"sm"} color="gray.700" fontStyle={"italic"}>Exemplo de aplicação</Text> */}
        </Stack>
    )
}