import {createTheme} from "@mui/material";
import "@fontsource/montserrat";

export const GlobalTheme = createTheme({
    typography: {
        fontFamily: "montserrat",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: {
            fontSize: 35,
            fontWeight: 25
        },
        h2: {
            fontSize: 30,
            fontWeight: 15
        },
        body1: {
            fontSize: 18
        },
        body2: {
            fontSize: 14
        }
    }
});
