import {Box, Grid} from "@mui/material";
import Blocks from "../../Components/Blocks/Blocks";

export default function HomePage() {
    return(
        <Box>
            <Box display={"flex"} gap={5} padding={5}>
                <Blocks
                    Height={300}
                    Title={"Milo!"}
                    content={"A virtual pet game"}
                />
                <Blocks
                    Height={300}
                    Title={"Digital Twin"}
                    content={"Digital Twin developed for the University of Auckland"}
                />
                <Blocks
                    Height={300}
                    Title={"Milo!"}
                    content={"A virtual pet game"}
                />
            </Box>
        </Box>
    )
}
