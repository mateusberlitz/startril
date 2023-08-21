import { Box, Checkbox, Divider, Flex, FormControl, FormErrorMessage, HStack, Heading, Icon, IconButton, Radio, RadioGroup, Spinner, Stack, Text, useBreakpointValue, useColorMode, useToast } from "@chakra-ui/react";

import ContactAnimation from '../../public/contact_animation.svg';
import { Header } from "../components/Header";
import { Input } from "../components/Forms/Inputs/Input";

import AlignmentIcon from '../../public/alignment.svg';
import CronoIcon from '../../public/crono.svg';
import DeadlineIcon from '../../public/deadline.svg';
import SelfIcon from '../../public/self.svg';

import Ui from '../../public/ui_white.svg';
import Ads from '../../public/ads_white.svg';
import Dev from '../../public/dev_white.svg';
import { MainButton } from "../components/Buttons/MainButton";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from "../components/Forms/Inputs/ControlledInput";
import { showErrors } from "../hooks/useErrors";
import { serverApi } from "../services/api";
import { OutlineButton } from "../components/Buttons/OutlineButton";
import { Check, Plus, X } from "react-feather";
import { Checkbox as MainCheckbox } from "../components/Forms/Checkbox/";
import { DraggableFileInput } from "../components/Forms/DraggableFileInput";
import { Footer } from "../components/Footer";
import axios, { AxiosError } from "axios";
import { ColoredTag } from "../components/ColoredTag";
import Head from "next/head";

import * as gtag from '../services/gtag';

interface BriefingLeadData{
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    demand?: string;
}

interface BriefingData{
    business_description: string;
    goals: string[];
    metier: string;
    personalities: string[];
    expected_time: string;
    budget: string;
    has_brand: string;
    public: string;
}

interface Concurrent{
    company_name: string;
    link: string;
}

const BriefingLeadFormSchema = yup.object().shape({
    name: yup.string().required('Qual o seu nome?'),
    email: yup.string().email("Informe um e-mail válido").required('Preencha o e-mail'),
    phone: yup.string().required('Informe seu telefone'),
    company: yup.string().required('Informe a sua empresa'),
    //demand: yup.array().min(1).of(yup.string().required()).required('Selecione uma opção'),
});

const BriefingFormSchema = yup.object().shape({
    business_description: yup.string().min(20, "Descreva sua empresa em mais de 20 caracteres").required('Explique o seu negócio'),
    goals: yup.array().min(1, "Selecione pelo menos uma demanda").of(yup.string().required()).required(),
    metier: yup.string().min(3, "O ramo precisa ter pelo menos 3 caracteres").required('Qual o ramo da empresa?'),
    personalities: yup.array(yup.string()).min(1, "Selecione pelo menos uma personalidade").of(yup.string().required()).required(),
    //concurrent: yup.array().of(yup.object().shape({company_name: yup.string().required(),link: yup.string().required()})),
    expected_time: yup.string().required('Qual o prazo de entrega esperado?'),
    budget: yup.string().required('Selecione o orçamento disponível'),
    has_brand: yup.string().transform((v, o) => o === null ? '' : v).required('Selecione se sua empresa possui uma marca'),
    public: yup.string().min(8, "Descreva seu público em mais de 8 caracteres").required('Descreva seu público caso houver'),
});

const ConcurrentFormSchema = yup.object().shape({
    company_name: yup.string().required('Qual o nome do concorrente?'),
    link: yup.string().required('Informe o site'),
});

export default function Contato(){
    const {toggleColorMode, colorMode } = useColorMode();
    const [step, setStep] = useState(1);

    const toast = useToast();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [briefingLeadData, setBriefingLeadData] = useState<BriefingLeadData>({
        id: 0,
        name: "",
        email: "",
        company: "",
        phone: "",
    })

    useEffect(() => {
        if(colorMode === "light"){
            toggleColorMode();
        }

        const storedBriefingLead = localStorage.getItem('@startril/lead');

        if(storedBriefingLead && storedBriefingLead != undefined){
            setBriefingLeadData(JSON.parse(storedBriefingLead));
            setStep(2);
        }
    }, []);

    const briefingLeadForm = useForm<BriefingLeadData>({
        resolver: yupResolver(BriefingLeadFormSchema),
        defaultValues:{
          name: "",
          email: "",
          company: "",
          phone: "",
        }
    });

    const briefingForm = useForm<BriefingData>({
        resolver: yupResolver(BriefingFormSchema),
        defaultValues:{
            business_description: "",
            goals: [""],
            public: "",
            metier: "",
            personalities: [""],
            expected_time: "",
            budget: ""
        }
    });

    const concurrentForm = useForm<Concurrent>({
        resolver: yupResolver(ConcurrentFormSchema),
        defaultValues:{
            company_name: "",
            link: "",
        }
    });

    const [design, setDesign] = useState(false);
    const [dev, setDev] = useState(false);
    const [ads, setAds] = useState(false);
    const [nothing, setNothing] = useState(false);

    const handleSaveFirstPart = async (lead: BriefingLeadData) => {
        console.log(lead);
        setIsSubmitting(true);

        gsap.context(() => {
            AnimationSendFirstPart();
        });

        try{
            const demandText = lead.demand ? lead.demand  : `${design ? 'Design, ' : ''} ${ads ? 'Anúncios, ' : ''} ${dev ? 'Desenvolvimento' : ''}`;

            const result = await serverApi.post('public/leads', {...lead, demand: demandText, send_mail: "true"}).then(response => response.data);

            setStep(2);
            setIsSubmitting(false);
            localStorage.setItem('@startril/lead', JSON.stringify(result.data));
            gtag.track('conversion', { sendTo: 'AW-11246386468/n7OVCLnflbsYEKT62PIp', value: 0, currency: 'BRL'});
            setBriefingLeadData(result.data);
            AnimationStartSecondPart();
        }catch(error: unknown){ //AxiosError
            if(!axios.isAxiosError(error)){
                showErrors(error, toast);
            }else{
                showErrors(error, toast);
            }

            AnimationReturnToFirstPart();
            setIsSubmitting(false);
            console.log(error)
        }
    }

    const AnimationSendFirstPart = () => {
        const firstSendTimeline = gsap.timeline();

        firstSendTimeline.to("#firstPartForm", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        })
        .to("#firstButton", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        }, "<")
        .to("#loading", {
            autoAlpha: 1,
            y: -100,
            display: 'flex'
        });
    }

    const AnimationReturnToFirstPart = () => {
        const firstSendTimeline = gsap.timeline();

        firstSendTimeline
        .to("#loading", {
            autoAlpha: 0,
            y: 0,
            display: 'none'
        })
        .to("#firstPartForm", {
            autoAlpha: 1,
            y: 0,
            display: 'flex'
        })
        .to("#firstButton", {
            autoAlpha: 1,
            y: 0,
            display: 'flex'
        }, "<")
    }

    const AnimationStartSecondPart = () => {
        const secondPartTimeline = gsap.timeline();

        secondPartTimeline
        .to("#loading", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        })
        .to("#secondPartForm", {
            autoAlpha: 1,
            y: -100,
            display: 'flex'
        })
        .fromTo("#secondButton", {
            y: -100,
        }, {
            autoAlpha: 1,
            y: 0,
            display: 'flex'
        }, "<")
        .to(secondPartRef, {
            scrollTo: 0
        })
    }

    const [personalities, setPersonalities] = useState<string[]>([]);
    const [demands, setDemands] = useState<string[]>([]);
    const [competitors, setCompetitors] = useState<Concurrent[]>([]);

    const handleSaveSecondPart = async (briefing: BriefingData) => {
        AnimationSendBriefing();
        setIsSubmitting(true);

        // setTimeout(() => {
        //     AnimationFinish();
        // }, 6000)

        //console.log(competitors);

        try{
            const competitorsText = competitors.map(competitor => {
                return `${competitor.company_name}: ${competitor.link}`
            });

            const goals = briefing.goals.join(',');
            const personalities = briefing.personalities.join(',');
            const concurrent = competitorsText.join(',');

            console.log(concurrent);

            const result = await serverApi.post('public/briefings', 
            {...briefing, goals, personalities, concurrent, demand: briefingLeadData.demand, lead_id: briefingLeadData.id, files: fileList.files, send_mail: "true"}, 
            {headers: {'Content-Type': "multipart/form-data; charset=utf-8"}}).then(response => response.data);

            setStep(3);
            setIsSubmitting(false);
            localStorage.setItem('@startril/briefing', JSON.stringify(result.data));
            //gtag.track('conversion', { sendTo: 'AW-11246386468/n7OVCLnflbsYEKT62PIp', value: 0, currency: 'BRL'});
            AnimationFinish();
        }catch(error: unknown){ //AxiosError
            if(!axios.isAxiosError(error)){
                showErrors(error, toast);
            }else{
                showErrors(error, toast);
            }

            AnimationReturnToSecondPart();
            setIsSubmitting(false);
            console.log(error)
        }
    }

    // const AnimationSendBriefing = () => {
    //     const briefingTimeline = gsap.timeline();

    //     briefingTimeline
    //     .to("#secondPartForm", {
    //         autoAlpha: 0,
    //         y: -100,
    //         display: 'none'
    //     })
    // }

    const AnimationSendBriefing = () => {
        const briefingTimeline = gsap.timeline();

        briefingTimeline.to("#secondPartForm", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        })
        .to("#secondButton", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        }, "<")
        .to("#loading2", {
            autoAlpha: 1,
            y: -100,
            display: 'flex'
        });
    }

    const AnimationReturnToSecondPart = () => {
        const secondSendTimeline = gsap.timeline();

        secondSendTimeline
        .to("#loading2", {
            autoAlpha: 0,
            y: 0,
            display: 'none'
        })
        .to("#secondPartForm", {
            autoAlpha: 1,
            y: 0,
            display: 'flex'
        })
        .to("#secondButton", {
            autoAlpha: 1,
            y: 0,
            display: 'flex'
        }, "<")
    }

    const AnimationFinish = () => {
        const finishTimeline = gsap.timeline();

        finishTimeline.to("#loading2", {
            autoAlpha: 0,
            y: -100,
            display: 'none'
        })
        .to("#thanks", {
            autoAlpha: 1,
            y: -100,
            display: 'flex'
        });
    }


    useEffect(() => {
        //
    }, [])

    const [firstEdit, setFirstEdit] = useState(false);
    const [firstBriefingEdit, setFirstBriefingEdit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const secondPartRef = useRef(null);

    const [fileList, setFileList] = useState<{
        files: File[],
        count: number
    }>({
        files: [],
        count: 0
    });

    const handleAddConcurrent = async (concurrent: Concurrent) => {
        setCompetitors([...competitors, concurrent]);
    }

    const handleRemoveConcurrent = async (concurrentIndex: number) => {
        setCompetitors(competitors.filter((concurrent, index) => index !== concurrentIndex));
    }

    useEffect(() => {
        const sections = document.querySelectorAll(".sectionFade");

        console.log(sections);

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.1 && e.classList.add("active")
            })
        }

        scrollAnimate()
        window.addEventListener("scroll", scrollAnimate);
    }, []);

    console.log(fileList.files);

    return(
        <Flex flexDir="column" w="100%">
            <Head>
                <title>Startril - Briefing</title>
                <meta name="description" content="Transformamos seu negócio com sites, sistemas, anúncios e design" />
                <link rel="icon" href="/icone_startril.svg" />
            </Head>

            <Flex flexDir="column">
                <Flex pos="absolute" zIndex={-1} w='100%' top="-215px" h="calc(100% + 215px)" overflow="hidden">
                    <ContactAnimation/>
                </Flex>

                <Box w="100%" bg="rgba(0,0,0,0.6)">
                    <Header/>

                    <Flex w="100%">
                        <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" pb="32" spacing="0" minH="90vh">
                            <HStack spacing="12" justifyContent={"space-between"} className="sectionFade">
                                {
                                    isWideVersion && (
                                        <>
                                            <Stack spacing="12" maxW="300px" alignSelf={"flex-start"}>
                                                <Stack spacing="1">
                                                    <Text fontSize={"12px"}>É bom entender</Text>
                                                    <Text color="white" fontSize={"xl"}>Como trabalhamos</Text>
                                                </Stack>

                                                <HStack alignItems={"flex-start"} spacing="4">
                                                    <AlignmentIcon width="80px"/>
                                                    <Stack>
                                                        <Text color="white" fontSize={"md"}>O alinhamento é fundamental</Text>
                                                        <Text fontSize={"12px"}>Por isso durante todo o processo nos colocamos à disposição para esclarecer suas dúvidas, receber sugestões e trocar ideias.</Text>
                                                    </Stack>
                                                </HStack>

                                                <HStack alignItems={"flex-start"} spacing="4">
                                                    <CronoIcon width="70px"/>
                                                    <Stack>
                                                        <Text color="white" fontSize={"md"}>Seguimos o cronograma</Text>
                                                        <Text fontSize={"12px"}>De prazos de entrega de cada etapa e do projeto já estabelecidos na reunião de alinhamento.</Text>
                                                    </Stack>
                                                </HStack>

                                                <HStack alignItems={"flex-start"} spacing="4">
                                                    <DeadlineIcon width="80px"/>
                                                    <Stack>
                                                        <Text color="white" fontSize={"md"}>Respeite os prazos</Text>
                                                        <Text fontSize={"12px"}>Pois as entregas precisam ser aprovadas para passarmos para a próxima etapa e não atrasarmos o projeto.</Text>
                                                    </Stack>
                                                </HStack>

                                                <HStack alignItems={"flex-start"} spacing="4">
                                                    <SelfIcon width="50px"/>
                                                    <Stack>
                                                        <Text color="white" fontSize={"md"}>A ideia é sua</Text>
                                                        <Text fontSize={"12px"}>E ela estará segura conosco! Podemos realizar um acordo de confidencialidade (NDA). </Text>
                                                    </Stack>
                                                </HStack>
                                            </Stack>

                                            <Flex h="100%" w="1px" bg="gradient" opacity={0.2}/>
                                        </>
                                    )
                                }

                                <Stack spacing="0" w="100%" maxW="620px" alignSelf={"flex-end"}>
                                    <Stack id="loading" color="white" spacing="5" display="none">
                                        <Heading>Obrigado por estar conosco!</Heading>
                                        <Text>Preparando o seu briefing...</Text>
                                        <Spinner />
                                    </Stack>

                                    <Stack id="loading2" color="white" spacing="5" display="none">
                                        <Heading>Você logo estará em outro nível!</Heading>
                                        <Text>Enviando briefing...</Text>
                                        <Spinner />
                                    </Stack>

                                    <Stack id="thanks" color="white" spacing="5" display="none">
                                        <HStack>
                                            <Icon as={Check} fontSize={"40px"}/>
                                            <Heading>Enviado.</Heading>
                                        </HStack>
                                        <Text>Enquanto isso, vamos analisar e criar uma estratégia para você. Em breve entraremos em contato.</Text>
                                    </Stack>

                                    {
                                        step === 1 ? (
                                            <Stack spacing="14" as="form" id="firstPartForm" display=""
                                                onSubmit={briefingLeadForm.handleSubmit(handleSaveFirstPart)}>

                                                <Stack spacing="10">
                                                    <Text>Briefing</Text>
                                                    <Flex h="1px" w="100px" bg="gradient" opacity={1}/>
                                                    <Heading color="white" fontSize={"5xl"}>
                                                        Vamos transformar o seu negócio juntos?
                                                    </Heading>
                                                    <Text fontSize={"sm"} maxW="500px">Nos conte um pouco sobre o seu projeto ou sua empresa e como podemos te ajudar.</Text>
                                                </Stack>

                                                <Stack spacing="10">
                                                    <ControlledInput control={briefingLeadForm.control} name="name" type="text" placeholder="Seu nome completo" label="Seu Nome" isRequired error={briefingLeadForm.formState.errors.name}/>
                                                    <ControlledInput control={briefingLeadForm.control} name="email" type="email" placeholder="exemplo@email.com" label="Seu E-mail" isRequired error={briefingLeadForm.formState.errors.email}/>

                                                    <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                                        <ControlledInput control={briefingLeadForm.control} name="phone" type="tel" placeholder="(99) 99999-9999" label="Seu Whatsapp" isRequired mask="phone" error={briefingLeadForm.formState.errors.phone}/>
                                                        <ControlledInput control={briefingLeadForm.control} name="company" type="text" placeholder="Empresa" label="Nome da empresa" isRequired error={briefingLeadForm.formState.errors.company}/>
                                                    </Stack>

                                                    {/* <Stack spacing="6" direction={["column", "column", "row", "row"]}>
                                                        <Input name="company" type="text" placeholder="José da Silva" label="Nome da empresa"/>
                                                        <Input name="link" type="text" placeholder="José da Silva" label="Link do site"/>
                                                    </Stack> */}

                                                    <Stack spacing="4">
                                                        <Text color="white">Como podemos ajudar?</Text>

                                                        <Flex flexWrap={"wrap"} gap="6">
                                                            <HStack onClick={() => {setDesign(!design); setFirstEdit(true)}} bg={design ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0)"} role="group" border="1px solid" borderColor={design ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)"} p="4" w="fit-content" borderRadius={"1px"}
                                                            _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer" color={design ? "white" : "gray.text"}>
                                                                
                                                                {/* <Controller
                                                                    name={"demand"}
                                                                    control={briefingLeadForm.control}
                                                                    defaultValue={"Design"}
                                                                    render={({ field: {ref, ...field} }) => 
                                                                        <Checkbox ref={ref} visibility={"hidden"} pos="absolute" isChecked={design} {...field}/>
                                                                    }
                                                                /> */}
                                                                <Checkbox value="Design" name="demand" visibility={"hidden"} pos="absolute" isChecked={dev}/>
                                                                <Flex opacity={design ? "1" : "0.5"} _groupHover={{opacity: 1}} transition="all ease 0.5s"><Ui width="30px"/></Flex>
                                                                <Text fontSize={"sm"}>Design</Text>
                                                            </HStack>

                                                            <HStack onClick={() => {setDev(!dev); setFirstEdit(true)}} bg={dev ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0)"} role="group" border="1px solid" borderColor={dev ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)"} p="4" w="fit-content" borderRadius={"1px"}
                                                            _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer" color={dev ? "white" : "gray.text"}>
                                                                <Checkbox value="Desenvolvimento" name="demand" visibility={"hidden"} pos="absolute" isChecked={dev}/>
                                                                <Flex opacity={dev ? "1" : "0.5"} _groupHover={{opacity: 1}} transition="all ease 0.5s"><Dev width="29px"/></Flex>
                                                                <Text fontSize={"sm"}>Desenvolvimento</Text>
                                                            </HStack>

                                                            <HStack onClick={() => {setAds(!ads); setFirstEdit(true)}} bg={ads ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0)"} role="group" border="1px solid" borderColor={ads ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)"} p="4" w="fit-content" borderRadius={"1px"}
                                                            _hover={{borderColor: "white", color: "white"}} transition="all ease 0.5s" cursor="pointer" color={ads ? "white" : "gray.text"}>
                                                                <Checkbox value="Anúncios" name="demand" visibility={"hidden"} pos="absolute" isChecked={ads}/>
                                                                <Flex opacity={ads ? "1" : "0.5"} _groupHover={{opacity: 1}} transition="all ease 0.5s"><Ads width="30px"/></Flex>
                                                                <Text fontSize={"sm"}>Anúncios</Text>
                                                            </HStack>
                                                        </Flex>

                                                        <FormControl pos="relative" isInvalid={(!ads && !design && !dev)}>
                                                            { ((!ads && !design && !dev && !nothing) && firstEdit) && (
                                                                <FormErrorMessage fontSize="11px">
                                                                    Selecione uma opção
                                                                </FormErrorMessage>   
                                                            )}
                                                        </FormControl>

                                                        {/* <FormControl pos="relative" isInvalid={!!briefingLeadForm.formState.errors.demand}>
                                                            { !!briefingLeadForm.formState.errors.demand && (
                                                                <FormErrorMessage fontSize="11px">
                                                                    {briefingLeadForm.formState.errors.demand.message}
                                                                </FormErrorMessage>   
                                                            )}
                                                        </FormControl> */}

                                                        <Checkbox {...briefingLeadForm.register("demand")} value={"Não tenho certeza, quero descobrir"} onChange={() => {setNothing(!nothing); setFirstEdit(true)}}>Não tenho certeza, quero descobrir</Checkbox>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        ) : (
                                            <Stack spacing="0" id="secondPartForm" display={step === 1 ? "none" : "flex"} ref={secondPartRef} pos="relative">
                                                {/* <Box pos="absolute" top="0" bottom="0" left="0" right="0" bg="rgba(0,0,0,0.0)" zIndex={5} backdropFilter={"blur(10px)"} p="2"/> */}
                                                {/* onSubmit={briefingForm.handleSubmit(handleSaveSecondPart)}> */}

                                                <form id="briefingForm" onSubmit={briefingForm.handleSubmit(handleSaveSecondPart)}></form>

                                                <Stack spacing="6">
                                                    <Text>Briefing</Text>
                                                    <Flex h="1px" w="100px" bg="gradient" opacity={1}/>
                                                    <Stack spacing="6">
                                                        <ColoredTag>Olá, {briefingLeadData.name}</ColoredTag>
                                                        <Heading color="white" fontSize={"5xl"}>
                                                            Continue seu briefing
                                                        </Heading>
                                                        <Text fontSize={"sm"} maxW="500px" pb="12">Toda informação é essencial para entendermos o seu cenário e objetivo.</Text>
                                                    </Stack>
                                                </Stack>

                                                <Stack spacing="10">
                                                    <Text color="white">Seu objetivo</Text>

                                                    <FormControl pos="relative" isInvalid={!!briefingForm.formState.errors.goals}>
                                                        <Stack spacing={["8", "8", "32", "32"]} direction={["column", "column", "row", "row"]}>
                                                            <Stack spacing="3">
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Vender Mais"}>Vender Mais</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Aumentar visibilidade"}>Aumentar visibilidade</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Criar uma loja virtual"}>Criar uma loja virtual</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Página de vendas"}>Página de vendas</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Impactar meus clientes"}>Impactar meus clientes</Checkbox>
                                                            </Stack>
                                                            <Stack spacing="3">
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Gerar autoridade"}>Gerar autoridade</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Sistema"}>Criar um Sistema</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Website"}>Website</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Redesign"}>Redesign</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("goals")} value={"Consultoria"}>Consultoria</Checkbox>
                                                            </Stack>
                                                        </Stack>

                                                        { 
                                                            !!briefingForm.formState.errors.goals && (
                                                                <FormErrorMessage fontSize="11px">
                                                                    {briefingForm.formState.errors.goals.message}
                                                                </FormErrorMessage>   
                                                            )
                                                        }
                                                    </FormControl>


                                                    <Text color="white">Seu negócio</Text>

                                                    <ControlledInput form="briefingForm" as="textarea" resize={'unset'} height="120px" py="2" control={briefingForm.control} name="business_description" type="text" placeholder="Minha empresa hoje é..." label="Nos descreva o seu negócio e como ele se diferencia" isRequired error={briefingForm.formState.errors.business_description}/>
                                                    
                                                    <ControlledInput form="briefingForm" control={briefingForm.control} name="metier" type="text" placeholder="Exemplo: Imobiliária com o foco em casas de alto padrão." label="Ramo de atuação (seja específico)." isRequired error={briefingForm.formState.errors.metier}/>
                                                    <ControlledInput form="briefingForm" control={briefingForm.control} name="public" type="text" placeholder="Homens e mulheres de classe média e alta" label="Já tem o seu público alvo definido?" isRequired error={briefingForm.formState.errors.public}/>
                                                    
                                                    <Stack spacing="10">
                                                        <Text color="white">Quem são seus concorrentes?</Text>

                                                        <Stack spacing="8" border="0px solid" borderColor="rgba(255,255,255,0.2)" px="0" py="0">

                                                            {
                                                                competitors.length > 0 ? (
                                                                    competitors.map((competitor, index) => {
                                                                        return(
                                                                            <HStack borderBottom="1px solid" borderColor="rgba(255,255,255,0.1)" py="2" justifyContent={"space-between"}>
                                                                                <Stack spacing="0">
                                                                                    <Text fontSize={"sm"}>{competitor.link}</Text>
                                                                                    <Text fontSize={"md"} color="white">{competitor.company_name}</Text>
                                                                                </Stack>
                                                                                <IconButton onClick={() => handleRemoveConcurrent(index)} h="24px" w="20px" minW="25px" p="0" float="right" aria-label="Remover arquivo" icon={ <Icon as={X} width="20px" stroke="#C30052" fill="none"/>} border="1px solid" borderColor="rgba(255,255,255,0.2)" _hover={{bg: "transparent", borderColor: "white"}} variant="outline"/>
                                                                            </HStack>
                                                                        )
                                                                    })
                                                                ) : (
                                                                    <Text>Nenhum concorrente informado</Text>
                                                                )
                                                            }

                                                            <Stack spacing="4" id="concurrentForm" as="form" onSubmit={concurrentForm.handleSubmit(handleAddConcurrent)}>
                                                                <HStack>
                                                                    <ControlledInput form="concurrentForm" control={concurrentForm.control} name="company_name" type="text" placeholder="Concorrente X" label="Empresa" isRequired error={concurrentForm.formState.errors.company_name}/>
                                                                    <ControlledInput form="concurrentForm" control={concurrentForm.control} name="link" type="text" placeholder="www.concorrente.com.br" label="Link do site" isRequired error={concurrentForm.formState.errors.link}/>
                                                                    {/* <IconButton alignSelf={"end"} form="concurrentForm" type="submit" h="50px"
                                                                    icon={<Icon as={Plus}/>} aria-label="Adicionar um concorrente" bg="Transparent" borderRadius={"0"} border="1px solid" borderColor="rgba(255,255,255,0.2)" _hover={{bg: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,1)"} }/> */}
                                                                </HStack>
                                                                <OutlineButton form="concurrentForm" type="submit" leftIcon={<Icon as={Plus}/>}>Salvar</OutlineButton>

                                                                <FormControl pos="relative" isInvalid={competitors.length < 1}>
                                                                    { (competitors.length < 1 && firstBriefingEdit) && (
                                                                        <FormErrorMessage fontSize="11px">
                                                                            Informe pelo menos um concorrente
                                                                        </FormErrorMessage>   
                                                                    )}
                                                                </FormControl>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                    <Text color="white">Selecione as personalidades do seu negócio.</Text>

                                                    <FormControl pos="relative" isInvalid={!!briefingForm.formState.errors.personalities}>
                                                        <Stack spacing={["8", "8", "32", "32"]} direction={["column", "column", "row", "row"]}>
                                                            <Stack spacing="3">
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Formal"}>Formal</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Informal"}>Informal</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Divertido"}>Divertido</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Sério"}>Sério</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Amigável"}>Amigável</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Moderno"}>Moderno</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Antigo"}>Antigo</Checkbox>
                                                            </Stack>
                                                            <Stack spacing="3">
                                                            <Checkbox {...briefingForm.register("personalities")} value={"Robusto"}>Robusto</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Delicado e Sutil"}>Delicado e Sutil</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Tecnológico"}>Tecnológico</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Humano"}>Humano</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Sofisticado e Exclusivo"}>Sofisticado e Exclusivo</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Masculino"}>Masculino</Checkbox>
                                                                <Checkbox form="briefingForm" {...briefingForm.register("personalities")} value={"Feminino"}>Feminino</Checkbox>
                                                            </Stack>
                                                        </Stack>

                                                        { 
                                                            !!briefingForm.formState.errors.personalities && (
                                                                <FormErrorMessage fontSize="11px">
                                                                    {briefingForm.formState.errors.personalities.message}
                                                                </FormErrorMessage>   
                                                            )
                                                        }
                                                    </FormControl>

                                                    <Text color="white">Qual é o prazo esperado para a entrega do projeto?</Text>
                                                    
                                                    <FormControl pos="relative" isInvalid={!!briefingForm.formState.errors.expected_time}>
                                                        <RadioGroup defaultValue=''>
                                                            <Stack spacing={["8", "8", "32", "32"]} direction={["column", "column", "row", "row"]}>
                                                                <Stack spacing="3">
                                                                    <Radio form="briefingForm" value={"15 dias"} {...briefingForm.register("expected_time")}>15 dias</Radio>
                                                                    <Radio form="briefingForm" value={"30 dias"} {...briefingForm.register("expected_time")}>30 dias</Radio>
                                                                    <Radio form="briefingForm" value={"45 dias"} {...briefingForm.register("expected_time")}>45 dias</Radio>
                                                                </Stack>
                                                                <Stack spacing="3">
                                                                    <Radio form="briefingForm" value={"60 dias"} {...briefingForm.register("expected_time")}>60 dias</Radio>
                                                                    <Radio form="briefingForm" value={"Use o tempo necessário"} {...briefingForm.register("expected_time")}>Use o tempo necessário</Radio>
                                                                    <Radio form="briefingForm" value={"Tenho muita pressa"} {...briefingForm.register("expected_time")}>Tenho muita pressa^</Radio>
                                                                </Stack>
                                                            </Stack>

                                                            { 
                                                                !!briefingForm.formState.errors.expected_time && (
                                                                    <FormErrorMessage fontSize="11px">
                                                                        {briefingForm.formState.errors.expected_time.message}
                                                                    </FormErrorMessage>   
                                                                )
                                                            }
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <Text color="white">Quanto você está disposto a investir?</Text>

                                                    <FormControl pos="relative" isInvalid={!!briefingForm.formState.errors.has_brand}>
                                                        <RadioGroup defaultValue=''>
                                                            <Stack spacing={["8", "8", "32", "32"]} direction={["column", "column", "row", "row"]}>
                                                                <Stack spacing="3">
                                                                    <Radio form="briefingForm" value={"5 mil"} {...briefingForm.register("budget")}>5 mil</Radio>
                                                                    <Radio form="briefingForm" value={"5 a 10 mil"} {...briefingForm.register("budget")}>5 a 10 mil</Radio>
                                                                    <Radio form="briefingForm" value={"11 a 30 mil"} {...briefingForm.register("budget")}>11 a 30 mil</Radio>
                                                                </Stack>
                                                                <Stack spacing="3">
                                                                    <Radio form="briefingForm" value={"31 a 50 mil"} {...briefingForm.register("budget")}>31 a 50 mil</Radio>
                                                                    <Radio form="briefingForm" value={"51 a 100 mil"} {...briefingForm.register("budget")}>51 a 100 mil</Radio>
                                                                    <Radio form="briefingForm" value={"Acima de 100 mil"} {...briefingForm.register("budget")}>Acima de 100 mil</Radio>
                                                                </Stack>
                                                            </Stack>

                                                            { 
                                                                !!briefingForm.formState.errors.budget && (
                                                                    <FormErrorMessage fontSize="11px">
                                                                        {briefingForm.formState.errors.budget.message}
                                                                    </FormErrorMessage>   
                                                                )
                                                            }
                                                        </RadioGroup>
                                                    </FormControl>
                                                    

                                                    <FormControl pos="relative" isInvalid={!!briefingForm.formState.errors.has_brand}>
                                                        <RadioGroup defaultValue=''>
                                                            <Stack spacing="4">
                                                                <Text color="white">A empresa possui uma marca e MIV (Manual de Identidade Visual)?</Text>

                                                                <Stack spacing={["8", "8", "32", "32"]} direction={["column", "column", "row", "row"]}>
                                                                    <Stack spacing="3">
                                                                        <Radio form="briefingForm" value={"Sim"} {...briefingForm.register("has_brand")}>Sim</Radio>
                                                                    </Stack>
                                                                    <Stack spacing="3">
                                                                        <Radio form="briefingForm" value={"Ainda não possui."} {...briefingForm.register("has_brand")}>Ainda não possui.</Radio>
                                                                    </Stack>
                                                                </Stack>

                                                                { 
                                                                    !!briefingForm.formState.errors.has_brand && (
                                                                        <FormErrorMessage fontSize="11px">
                                                                            {briefingForm.formState.errors.has_brand.message}
                                                                        </FormErrorMessage>   
                                                                    )
                                                                }
                                                            </Stack>
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <Stack spacing="8">
                                                        <Stack>
                                                            <Text fontSize={"12px"} color={"gray.700"}>Opcional</Text>
                                                            <Text color="white">Anexe os materiais disponíveis ou outros arquivos que considere importante para analisarmos.</Text>
                                                        </Stack>

                                                        <DraggableFileInput fileList={fileList} setFiles={setFileList}/>

                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        )
                                    }

                                    

                                    

                                    <HStack w="100%" justifyContent={"space-between"} pos="relative" pt="10">
                                        <MainButton id="firstButton" display={step === 1 ? "flex" : "none"} form="firstPartForm" type="submit" isLoading={isSubmitting} onClick={() => setFirstEdit(true)}>Continuar</MainButton>
                                        <MainButton id="secondButton" display={step === 2 ? "flex" : "none"} form="briefingForm" type="submit" isLoading={isSubmitting} onClick={() => setFirstBriefingEdit(true)}>Enviar</MainButton>

                                        <HStack spacing="3" pos="relative" right="0">
                                            <Box w="10px" h="10px" border="1px solid" borderColor={step == 2 ? "transparent" : "rgba(255,255,255,0.4)"} bg={step == 2 ? "gradient" : "rgba(255,255,255,0.3)"} borderRadius="full"/>
                                            <Box w="50px" h="1px" bg={step == 1 ? "rgba(255,255,255,0.4)" : "gradient"}/>
                                            <Box w="10px" h="10px" border="1px solid" borderColor="rgba(255,255,255,0.4)" borderRadius="full"/>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </HStack>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>

            <Footer/>
        </Flex>
    )
}