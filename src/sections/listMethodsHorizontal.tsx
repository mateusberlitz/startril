import { Divider, Flex, HStack, Heading, Icon, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { StarDivider } from "../components/StarDivider";
import { CheckSquare, Edit3, FileText, MessageSquare, PenTool } from "react-feather";
import { TextTag } from "../components/TextTag";
import { IconItemList } from "../components/Itens/IconItemList";
import { useState } from "react";

export function ListMethodsHorizontal(){
    const [activeItem, setActiveItem] = useState(1);

    const handleChangeActiveItem = (number: number) => {
        setActiveItem(number);
    }

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="24" pb="32" spacing="32" direction={["column", "column", "row", "row"]}>
                    <Stack w={["100%","100%","50%","50%"]} maxW="600px" className="sectionFade">
                        <Stack spacing="12" pos="sticky" top="0px">
                            <Stack spacing="6">
                                <HStack>
                                    <TextTag>Metodologia</TextTag>
                                    {/* <LogoWhite/> */}
                                </HStack>
                                <StarDivider maxW="120px"/>
                            </Stack>
                            <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"}  fontWeight={"semibold"}>Ágil e confiável para criar seus projetos.</Heading>
                            <Text color="gray.500">Nossa metodologia permite uma conexão assertiva das ideias e a criação de projetos incríveis, para atingir seus objetivos e ser base para alcançar grandes resultados.</Text>
                        </Stack>

                    </Stack>

                    <Stack spacing="10" w={["100%","100%","50%","50%"]} className="sectionFade">
                        <IconItemList index={1} active={activeItem === 1} onHover={handleChangeActiveItem} icon={Edit3} title={"Preenchimento do Briefing"} description={"O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."}/>

                        <Divider borderColor="rgba(255,255,255,0.2)"/>
                        
                        <IconItemList index={2} active={activeItem === 2} onHover={handleChangeActiveItem} icon={MessageSquare} title={"Conversa"} description={"Agendamos uma reunião de acordo com a sua disponibilidade, para que você possa nos explicar a sua ideia com calma. Além disso, este é o momento para que entenda como nós podemos tornar o seu projeto realidade, com todos os detalhes."}/>
                        
                        <Divider borderColor="rgba(255,255,255,0.2)"/>

                        <IconItemList index={3} active={activeItem === 3} onHover={handleChangeActiveItem} icon={FileText} title={"Proposta"} description={"Após a conclusão da nossa reunião, dentro de um prazo de 48 horas úteis, entraremos em contato para marcar uma apresentação da proposta, com os valores de cada serviço necessário para o seu projeto."}/>

                        <Divider borderColor="rgba(255,255,255,0.2)"/>

                        <IconItemList index={4} active={activeItem === 4} onHover={handleChangeActiveItem} icon={PenTool} title={"Produção"} description={"Com o contrato assinado, iremos nos dedicar na produção do seu projeto para entregá-lo dentro do prazo solicitado. Sinta-se a vontade para nos contatar neste período para tirar dúvidas ou acrescentar ideias e informações."}/>

                        <Divider borderColor="rgba(255,255,255,0.2)"/>

                        <IconItemList index={5} active={activeItem === 5} onHover={handleChangeActiveItem} icon={CheckSquare} title={"Aprovação"} description={"Com o projeto concluído, agendaremos uma nova reunião para apresentar a você o resultado final. Nesse momento, você terá a oportunidade de analisar minuciosamente o projeto e solicitar os ajustes finais necessários, garantindo que seja entregue totalmente aprovado, atendendo a todas as suas expectativas."}/>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}