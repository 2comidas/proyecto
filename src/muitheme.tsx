import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#32BBEC',
            "200": '#84D6F4',
            "light": '#CBEEFA',
            "dark": '#151B1F',
            "contrastText": '#F7F9FA'
        },
        secondary: {
            main: '#41E818',
        },

    },
    typography: {
        fontFamily: [
            "Asap", "Chivo", "serif",
        ].join(','),
    }
});
