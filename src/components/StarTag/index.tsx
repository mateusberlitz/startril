import { Tag, Text } from "@chakra-ui/react";

interface StarTagProps{
    children: string;
}

export function StarTag({children}: StarTagProps){
    return(
        <Tag bg="#171B26" h="38px" border="1px solid" borderColor="#2D364D" borderRadius={"4px"} textAlign={"center"} alignItems={"center"}>
            <Text w="100%" color="white" fontWeight={"medium"} px="3" bg="linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%);" backgroundClip={"text"} __css={{webkitTextFillColor: "transparent"}}>{children}</Text>
        </Tag>
    )
}