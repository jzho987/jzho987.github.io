import {Box, Grid, Grow, Typography} from "@mui/material";
import CodePortfolio from "./Components/CodePortfolio";
import Introduction from "./Components/Introduction";
import CareerHistory from "./Components/CareerHistory";

export default function HomePage() {
    return(
        <Box
            position={"relative"}
            display={"block"}
            justifyItems={"left"}
            padding={9}
        >
            <Introduction/>
            <CareerHistory/>
            <CodePortfolio/>
        </Box>


    )
}
