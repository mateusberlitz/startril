import { Flex, HStack, Heading, Stack, Text, useColorMode, useToast } from "@chakra-ui/react";
import { Input } from "../Forms/Inputs/Input";
import { MainButton } from "../Buttons/MainButton";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { ControlledInput } from "../Forms/Inputs/ControlledInput";
import { serverApi } from "../../services/api";
import axios from "axios";
import { showErrors } from "../../hooks/useErrors";
import { useEffect, useState } from "react";

interface NewsletterLeadData{
    email: string;
}

const NewsletterLeadFormSchema = yup.object().shape({
    email: yup.string().email("Informe um e-mail válido").required('Preencha o e-mail'),
});

export function Newsletter(){
    const toast = useToast();
    const { toggleColorMode, colorMode } = useColorMode();

    const [leadCreated, setLeadCreated] = useState<NewsletterLeadData>();

    const newsletterForm = useForm<NewsletterLeadData>({
        resolver: yupResolver(NewsletterLeadFormSchema),
        defaultValues:{
          email: "",
        }
    });

    const handleSaveFirstPart = async (lead: NewsletterLeadData) => {
        try{
            const result = await serverApi.post('public/leads', {...lead, send_mail: "true"}).then(response => response.data);

            setLeadCreated(lead);
        }catch(error: unknown){ //AxiosError
            if(!axios.isAxiosError(error)){
                showErrors(error, toast);
            }else{
                showErrors(error, toast);
            }
            
            console.log(error)
        }
    }

    console.log(leadCreated);

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
        <Flex id="" w="100%" bg={colorMode === "dark" ? "#080510" : "white"} overflow="hidden" py="0" className="sectionFade" px="0">
            <Stack w="100%" maxW="1200px" bg={colorMode === "dark" ? "rgba(255,255,255,0.05)" : "gray.100"} border="1px solid" borderColor={colorMode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} m="0 auto" spacing="6" justifyContent={"center"} textAlign={"center"} alignItems={"center"} p="14" px={["6","10","14"]}>
                <Heading fontSize={"3xl"} color={colorMode === "dark" ? "white" : "black"} fontWeight={"semibold"}>Conteúdos para elevar seu nível</Heading>
                <Text>Inscreva-se para receber dicas, novidades e ofertas exclusivas!</Text>
                {
                    !leadCreated ? (
                        <HStack alignItems={"flex-end"} as="form" onSubmit={newsletterForm.handleSubmit(handleSaveFirstPart)}>
                            <ControlledInput control={newsletterForm.control} name="email" type="text" placeholder="joao@email.com" label="Seu e-mail" error={newsletterForm.formState.errors.email}/>
                            <MainButton type="submit" isLoading={newsletterForm.formState.isSubmitting}>Cadastrar</MainButton>
                        </HStack>
                    ) : (
                        <Stack>
                            <Text color="gray.600">Agora você receberá e-mail nesse endereço:</Text>
                            <Text>{leadCreated.email}</Text>
                        </Stack>
                    )
                }
            </Stack>
        </Flex>
    )
}