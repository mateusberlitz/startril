import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch';
import { checkboxTheme } from './checkbox';
import { radioTheme } from './checkbox copy';

export const theme = extendTheme({
    shadows: {
        outline: `0 0 0 3px #3BA1F0`,
    },
    colors: {
        gray: {
            "900": "#14142B",
            "800": "#4E4B66",
            "700": "#6E7191",
            "600": "#A0A3BD", 
            "500": "#D9DBE9",
            "400": "#EFF0F6",
            "100": "#F7F7FC",
            "50" : "#FCFCFC",  
            "text": "#BABABD",
        },
        purple: {
            "400": "#2A00A2",
            "300": "#5F2EEA",
            "200": "#BCA4FF",
            "100": "#E4DAFF",
        },
        black: "#0E1119",
        blue: {
            "500": "#0096B7",
            "400": "#2097ED",
            "300": "#1CC8EE",
            "200": "#82E9FF",
            "100": "#DEF9FF",
        },
        red: {
            "500": "#DB2C2C",
            "400": "#EA5455",
            "300": "#F06B77",
            "200": "#FF84B7",
            "100": "#FFDFED",
        },
        orange: {
            "600": "#EC7B1C",
            "500": "#FF8E2E",
            "400": "#F99846",
            "300": "#FF9F43"
        },

        green: {
            "500": "#28C76F"
        },

        gradient: "linear-gradient(90deg, #3BA1F0 -1.31%, #7260DF 91.65%)"

    },
    fonts: {
        heading: 'Prompt',
        body: 'Prompt'
    },
    styles: {
        global: {
            body: {
                bg: 'black',
                color: 'gray.text',
            },
        }
    },
    components: {
        Heading: {
            color: "#fff"
        },
        Switch: switchTheme,
        Checkbox: checkboxTheme,
        Radio: radioTheme,
    },
})