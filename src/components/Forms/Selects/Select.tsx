import { FormControl, SelectProps, Select as ChakraSelect, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { ReactNode, Ref, useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormSelectProps extends SelectProps{
    name: string;
    children: ReactNode;
    variant?: string;
    leftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    value?: string;
    label?: string;
    error?: FieldError;
    register?: UseFormRegister<any>;
    onChange?: (value: any) => void;
    selectRef?: Ref<any>

    selected?: number;
}

export function Select({ name, children, variant, selectRef, label, isRequired, value = "", selected, error, register, onChange, ...rest } : FormSelectProps){
    const [controlledValue, setControlledValue] = useState("");

    function getRegister(){
        if(register){
            return {
                ...register(name)
            }
        }

        return {
            ref: (selectRef ? selectRef : undefined),
            value: controlledValue,
            onChange: (event: any) => { //React.ChangeEvent<HTMLInputElement>
                    setControlledValue(event.target.value);
                    if(onChange){
                        onChange(event.target.value)
                    }
                }
                
        }
    }

    useEffect(() => {
        setControlledValue(value);
        if(onChange){
            onChange(value);
        }
    }, [value]);

    return(
        <FormControl pos="relative" isInvalid={!!error}>
            {
                label && (
                    <FormLabel zIndex="1" cursor="text" color={variant === "white" ? "white" : "blue.primary"} transition="ease 0.2s" fontWeight="normal" fontSize={"md"} top={controlledValue === "" ? "14px" : "6px"}>{label} {isRequired && '*'}</FormLabel>
                )
            }

            <ChakraSelect {...getRegister()} colorScheme="white" borderRadius="1px" h="50px" fontWeight={controlledValue ? 'semibold' : 'regular'} cursor="pointer" name={name} fontSize="sm" borderColor={"gray.800"} bgColor={"transparent"} _hover={ {bgColor: "rgba(255,255,255,0.04)", borderColor: "gray.600"} } size="lg" color={controlledValue ? "white" : "gray.text"} {...rest}>
                {children}
            </ChakraSelect>

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}