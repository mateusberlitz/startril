import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue } from "@chakra-ui/react";
import { ColoredTag } from "../components/ColoredTag";
import { TextTag } from "../components/TextTag";
import { StarDivider } from "../components/StarDivider";

export function FaqCenter(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex w="100%" bg="#080510" overflow="hidden">
            <Stack px="6" w="100%" maxW="1200px" m="0 auto" py="20" pb="56" spacing="0">
                <Stack pt="22" spacing="20" direction={["column", "column", "column", "column"]} alignItems={"center"} zIndex={2}>
                    <Stack w={["100%", "100%", "50%", "50%"]} spacing="12" className="sectionFade">
                        <Stack spacing="6" className="sectionFade">
                            <ColoredTag textAlign="center">FAQ</ColoredTag>
                            <Heading color="white" fontSize={isWideVersion ? "6xl" : "4xl"} fontWeight={"semibold"} textAlign="center">Ficou com alguma dúvida?</Heading>
                        </Stack>
                    </Stack>

                    <Tabs variant="startril" maxW="700px" className="sectionFade">
                        <Box id="moon" zIndex={-1} w="400px" h="400px" left={"0"} right="0" m="0 auto" pos="absolute" bg="gradient" borderRadius={"full"} filter="blur(200px)"/>
                        
                        <TabList>
                            <Tab>Desenvolvimento</Tab>
                            <Tab>Anúncios</Tab>
                            <Tab>Design</Tab>
                        </TabList>

                        <TabPanels>

                            <TabPanel>

                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês desenvolvem sites e sistemas personalizados ou utilizam templates predefinidos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Idealizamos cada projeto para cumprir um objetivo específico, isso vai variar muito de cada cliente e negócio. Com isso em mente, sabemos que cada projeto deve ser único, por isso não utilizamos de templates padrões ou predefinidos, com base em análise montamos algo exclusivo para você atingir o seu objetivo.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quanto tempo leva para completar um projeto?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Só poderemos afirmar um prazo quando entendermos o que você precisa, assim junto ao orçamento, enviaremos também uma estimativa de cada etapa do projeto com um prazo de entrega.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem suporte contínuo após a entrega do projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, exceto em casos específicos onde o cliente passou demandas específicas e optou por seguir o projeto com outras formas de desenvolvimento ou hospedagem.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês oferecem serviços de programação frontend e backend?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, trabalhamos com ambos! Nosso objetivo é entregar um serviço completo na parte de desenvolvimento web, assegurando suprir as suas necessidades para criação de aplicações de diversos tamanhos e propósitos.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quais linguagens de programação vocês utilizam
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Atualmente nossa stack princip
                                        </AccordionPanel>
                                    </AccordionItem> */}

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                O cliente tem direitos autorais e a propriedade intelectual dos projetos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Tudo aquilo que for solicitado, finalizado e entregue ao cliente pertence a este, exceto arquivos não finalizados, os programas e meios utilizados para o desenvolvimento.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Posso escolher uma tecnologia específica para o desenvolvimento do meu sistema?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                                Poderemos conversar sobre o que o seu sistema precisa, então com as nossas recomendações encontraremos a tecnologia mais adequada para a programação.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                É possível integrar o sistema desenvolvido com outras ferramentas ou APIs?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, é possível através de programação integrar o sistema com qualquer outra ferramenta ou API que possua disponibilidade de dados e conexão.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                O que vocês priorizam para desenvolver uma aplicação?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Priorizamos uma boa arquitetura de software, para que qualquer código desenvolvido seja escalável, fácil de prestar manutenção, e para o usuário final seja a aplicação mais fácil de utilizar que ele já viu.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    {/* <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Posso colocar meu funcionário de design ou programação para ajudar no projeto
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Não, 
                                        </AccordionPanel>
                                    </AccordionItem> */}
                                </Accordion>
                            </TabPanel>

                            <TabPanel>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quantas alterações estão incluídas nos serviços de design?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Você pode solicitar quantas alterações achar necessário, até ficar satisfeito com o projeto final, contudo, você tem um período de 30 dias úteis após a entrega final para solicitar alterações gratuitamente.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Posso solicitar alterações ou ajustes após a conclusão do projeto?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, alterações e ajustes poderão ser sempre solicitados, mas deve-se atentar ao prazo de 30 dias úteis após a entrega final do projeto para solicitar alterações gratuitamente.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Vocês criam identidades visuais?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Sim, criamos marcas e todos os componentes necessários para passar a imagem de sua empresa de forma correta e direta. Cada aspecto é levando em consideração, logomarca, cores, letras, frases e tudo o que compõem a identidade visual de sua empresa.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Já tenho uma identidade visual estabelecida, posso mantê-la?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Sim, mas para manter a sua marca você deve levar em consideração alguns fatores, se a sua marca está condizendo com mensagem que a sua empresa precisa passar, no meio físico como também no virtual.
Em alguns casos não é necessária nenhuma alteração, em outros certos ajustes já bastam e há casos que é recomendado criar uma nova identidade visual.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Qual o foco e especialidade do design de vocês?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Somos designers com experiência em diversos segmentos, entretanto o nosso foco e especialidade é criação de layout e telas intuitivas para a sua aplicação ou website, direcionadas para uma melhor usabilidade ou para a melhor conversão de venda. Também prestamos serviços de criação de materiais gráficos e outras artes digitais para complementar a sua campanha ou projeto.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            O que é UI e UX Design?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Em resumo, o UI Design trata do aspecto visual e da interação dos elementos da interface, enquanto o UX Design se concentra na experiência geral do usuário e na garantia de que o produto seja útil, fácil de usar e proporcione satisfação ao usuário. Ambos os aspectos são essenciais para criar produtos digitais bem projetados e que atendam às necessidades e expectativas dos usuários.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            O que vocês priorizam na criação de um design de telas?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Na criação de um design de tela, priorizamos uma experiência visual atraente, visando a utilidade e facilidade de uso, uma interação coesa dos elementos e uma usabilidade clara. Cada tela é pensada para cumprir um objetivo no todo de acordo com o público-alvo e mensagem que a marcar quer passar.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            O que é levado em conta para criar um design de marca ou layout?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Levamos em consideração para a criação de qualquer design os seguintes pontos: o propósito e imagem que a marca quer passar, qual é o público-alvo que precisa ser atingido e como transformá-los em leads, usabilidade e facilidade em encontrar as informações, identidade visual e qual emoção e conexão que quer passar para os usuários.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>

                            <TabPanel>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Como funciona o investimento do tráfego pago?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        O investimento em tráfego pago envolve a alocação de recursos financeiros para anúncios pagos em plataformas específicas, como mecanismos de busca, redes sociais ou sites de terceiros. Os anunciantes estabelecem um orçamento, definem seus objetivos e segmentam seu público-alvo, pagando com base em métricas, como custo por clique (CPC) ou custo por mil impressões (CPM), para impulsionar o tráfego direcionado ao seu site ou página e converter em venda.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Vocês fornecem relatórios e análises de desempenho para acompanhar os resultados das campanhas de tráfego pago?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, fornecemos relatórios para manter você atualizado sobre as campanhas, métricas e resultados. Mensalmente é realizado uma reunião para apresentar os números alcançados e projeções futuras.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Como funciona para iniciar uma campanha de tráfego pago?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Inicialmente será feito uma análise para determinar o seu funil de venda, analisar páginas existentes ou cria-las para receber os seus clientes, será criado material publicitário para compor as campanhas junto com seleção de palavras chaves e textos para atrair usuários ao seu site ou página de venda. Após definir as métricas de conversão e o orçamento mensal, será delimitado a localização e o público alvo das campanhas...
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                            Qual a diferença de tráfego pago para o orgânico
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            O tráfego pago envolve a aquisição de visitantes selecionados por meio de anúncios pagos, enquanto o tráfego orgânico refere-se aos visitantes que chegam sem custos diretos associados à publicidade, apenas com o custo da criação do conteúdo. Ambos os tipos de tráfego desempenham papéis importantes nas estratégias de marketing digital, e é comum que as empresas utilizem uma combinação de ambas as abordagens para impulsionar o crescimento e a visibilidade online.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                É possível escolher o local e as pessoas que verão meu anuncio?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Sim, ao criar uma campanha, é feito toda a segmentação de público e localização, ou seja, você pode selecionar o perfil das pessoas que verão os seus anúncios e também a localização onde elas se encontram, podendo alinhar esses parâmetros com a sua estratégia e objetivo.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Quais a métricas que vocês acompanham?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Cada negócio ou estratégia possuem métricas chaves diferentes, isso varia de acordo com o objetivo de cada campanha. Se o objetivo é visibilidade e alcance, métricas como Número de Impressões e Posição Média do Anúncio serão levadas mais em conta. Em campanhas de venda, métricas essenciais são Taxa de Conversão e Retorno sobre Investimento (ROI), mas diversas outras métricas também serão levadas em conta como: Custo por Clique (CPC), Taxa de Cliques (CTR) e dentre outros.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Vocês produzem conteúdos e materiais para as campanhas?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                        Sim, criamos textos e imagens para compor as campanhas, esse material pode ser apresentado de diversas formas e em diversas plataformas para o seu público alvo.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                                
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                    {/* <Stack spacing="10">
                        <Stack border="1px solid" borderColor="rgba(255,255,255,0.1)" p="5" borderRadius="3" spacing="">
                            <Heading fontSize={"xl"} color="white">Lorem ipsum dolor sit amet consectetur.</Heading>
                            <Text>Confira nossas perguntas frequentes abaixo.</Text>
                        </Stack>
                    </Stack> */}
                </Stack>    
            </Stack>
        </Flex>
    )
}