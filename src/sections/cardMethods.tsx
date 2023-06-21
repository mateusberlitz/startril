import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { WaveCard } from "../components/WaveCard";
import { WaveCardMobile } from "../components/WaveCard/WaveCardMobile";
import { useState } from "react";

export function CardMethods(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [activeBox, setActiveBox] = useState(1);

    const handleActiveBox = (number: number) => {
        setActiveBox(number);
    }

    return(
        <Stack w="100%%" spacing="0" alignItems={"baseline"} height="100%" direction={["column", "column", "row", "row"]}>           
            {
                isWideVersion ? (
                    <>
                        <WaveCard active={activeBox == 1} number={1} onMouseEnter={handleActiveBox} title="Briefing" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCard active={activeBox == 2} number={2} onMouseEnter={handleActiveBox} title="Conversa" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCard active={activeBox == 3} number={3} onMouseEnter={handleActiveBox} title="Proposta" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCard active={activeBox == 4} number={4} onMouseEnter={handleActiveBox} title="Produção" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCard active={activeBox == 5} number={5} onMouseEnter={handleActiveBox} title="Aprovação" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                    </>
                ) : (
                    <>
                        <WaveCardMobile active={activeBox == 1} number={1} onMouseEnter={handleActiveBox} title="Briefing" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCardMobile active={activeBox == 2} number={2} onMouseEnter={handleActiveBox} title="Conversa" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCardMobile active={activeBox == 3} number={3} onMouseEnter={handleActiveBox} title="Proposta" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCardMobile active={activeBox == 4} number={4} onMouseEnter={handleActiveBox} title="Produção" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                        <WaveCardMobile active={activeBox == 5} number={5} onMouseEnter={handleActiveBox} title="Aprovação" description="O nosso briefing foi criado para que você possa nos fornecer as informações necessárias para o entendimento da sua necessidade e criação da solução mais adequada. É essencial para mapear todos os detalhes do projeto e não deixar nada de fora."/>
                    </>
                )
            }
        </Stack>
    )
}