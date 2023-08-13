import { createTheme } from "@mui/material/styles";

export const basicTheme = createTheme({
    palette: {
        primary: {
            main: "#28A19C",
        },
        secondary: {
            main: "#FFBA00",
        },
    },

    typography: {
        h1: {
            fontWeight: 700,
            fontSize: 48,
        },
        h2: {
            fontWeight: 600,
            fontSize: 40,

        },
        h3: {
            fontWeight: 700,
            fontSize: 24,

        },
        h4: {
            fontSize: "16px",
            fontWeight: 700,
        },

        body1: {
            fontSize: 16,
            fontWeight: 600,
        },
        body2: {
            fontSize: 19,
            fontWeight: 600,
        },
        body3:{
            fontSize:20,
            fontWeight:600
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
        allVariants: {
            fontFamily: "Quicksand",
        },
    },
});