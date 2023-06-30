import { Divider, Flex, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StarDivider } from "../components/StarDivider";
import { CheckSquare, Edit3, FileText, MessageSquare, PenTool } from "react-feather";
import { TextTag } from "../components/TextTag";

export function ListMethods(){
    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" spacing="0">
                <Stack pt="48" pb="32" spacing="32">
                    <Stack w="100%" maxW="600px" spacing="12">
                        <Stack spacing="6">
                            <HStack>
                                <TextTag>Metodologia</TextTag>
                                {/* <LogoWhite/> */}
                            </HStack>
                            <StarDivider maxW="120px"/>
                        </Stack>
                        <Heading color="white" fontSize="5xl" fontWeight={"semibold"}>Ágil e confiável pra criar seus projetos.</Heading>
                        <Text color="gray.500">Nossa metodologia permite uma conexão assertiva das ideias e a criação de projetos incríveis, para atingir seus objetivos e ser base para alcançar grandes resultados.</Text>

                    </Stack>

                    <Stack spacing="10">
                        <HStack spacing="8" alignItems={"flex-start"} maxW="800px">
                            <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                <Icon as={Edit3} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                            </Flex>

                            <Stack w="calc(100% - 70px)">
                                <Heading fontSize={"2xl"} color="white">Preenchimento do Briefing</Heading>
                                <Text>O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora.</Text>
                            </Stack>
                        </HStack>
                        <Divider borderColor="rgba(255,255,255,0.2)"/>
                        <HStack spacing="8" alignItems={"flex-start"} maxW="800px">
                            <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                <Icon as={MessageSquare} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                            </Flex>

                            <Stack w="calc(100% - 70px)" spacing="4">
                                <Heading fontSize={"2xl"} color="white">Conversa</Heading>
                                <Text>Agendamos uma reunião de acordo com a sua disponibilidade, para que você possa nos explicar a sua ideia com calma. Além disso, este é o momento para que entenda como nós podemos tornar o seu projeto realidade, com todos os detalhes.</Text>
                            </Stack>
                        </HStack>
                        <Divider borderColor="rgba(255,255,255,0.2)"/>
                        <HStack spacing="8" alignItems={"flex-start"} maxW="800px">
                            <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                <Icon as={FileText} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                            </Flex>

                            <Stack w="calc(100% - 70px)" spacing="4">
                                <Heading fontSize={"2xl"} color="white">Proposta</Heading>
                                <Text>Após a conclusão da nossa reunião, dentro de um prazo de 48 horas úteis, entraremos em contato para marcar uma apresentação da proposta, com os valores de cada serviço necessário para o seu projeto.</Text>
                            </Stack>
                        </HStack>
                        <Divider borderColor="rgba(255,255,255,0.2)"/>
                        <HStack spacing="8" alignItems={"flex-start"} maxW="800px">
                            <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                <Icon as={PenTool} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                            </Flex>

                            <Stack w="calc(100% - 70px)" spacing="4">
                                <Heading fontSize={"2xl"} color="white">Produção</Heading>
                                <Text>Com o contrato assinado, iremos nos dedicar na produção do seu projeto para entregá-lo dentro do prazo solicitado. Sinta-se a vontade para nos contatar neste período para tirar dúvidas ou acrescentar ideias e informações.</Text>
                            </Stack>
                        </HStack>
                        <Divider borderColor="rgba(255,255,255,0.2)"/>
                        <HStack spacing="8" alignItems={"flex-start"} maxW="800px">
                            <Flex w="70px" h="70px" bg="gradient" alignItems={"center"} justifyContent={"center"}>
                                <Icon as={CheckSquare} fontSize={"34px"} strokeWidth={"1.4px"} color="white"/>
                            </Flex>

                            <Stack w="calc(100% - 70px)" spacing="4">
                                <Heading fontSize={"3xl"} color="white">Aprovação</Heading>
                                <Text>Com o projeto concluído, agendaremos uma nova reunião para apresentar a você o resultado final. Nesse momento, você terá a oportunidade de analisar minuciosamente o projeto e solicitar os ajustes finais necessários, garantindo que seja entregue totalmente aprovado, atendendo a todas as suas expectativas.</Text>
                            </Stack>
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}