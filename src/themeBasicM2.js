import { createTheme } from "@mui/material/styles";

const themeBasicM2 = createTheme({
    palette: {
        primary: {
            main: '#8F4097',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            primary: '#f2f4f8',
            secondary: '#fdedfe'
        },
        text: {
            primary: '#333333',
            secondary: '#3E4B5B',
            white: '#FFFFFF',
            blue: '#448eef',
            black: '#000000',
            grey: '#4a4a4a',
            silver: '#6c757d',
        },
        blue: {
            primary: '#266ae2',
            secondary: '#1b55e2',
            third: ''
        },
        purple: {
            primary: '#820E88',
            main: '#8f3f97'
        },
        icon: {
            primary: '#95acff'
        }
    },
    typography: {
        fontFamily: [
            '"Avenir Next W01"',
            '"Proxima Nova W01"',
            '"Rubik"',
            '-apple-system',
            'system-ui',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

export default themeBasicM2;