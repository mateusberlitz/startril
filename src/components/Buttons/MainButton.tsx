import { ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"
import { SolidButton } from "./SolidButton"

interface MainButtonProps extends ButtonProps{
    children: string;
}

export function MainButton({children, ...rest} : MainButtonProps){
    return(
        <SolidButton size="lg" bg="linear-gradient(225deg, #3BA1F0 0%, #7260DF 100%);" color="white" {...rest}>
            {children}
        </SolidButton>
    )
}