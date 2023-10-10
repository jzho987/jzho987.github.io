import {Box, Typography} from "@mui/material";
import InAnimation from "../../../Components/Animation/InAnimation";

export default function Introduction() {
    return(
        <Box>
            <InAnimation orderIndex={1}>
                <Typography variant={"h4"} align={"left"} >
                    About Me
                </Typography>
            </InAnimation>
            <Box display={"flex"} marginTop={2} gap={3}>
                <InAnimation orderIndex={2}>
                    <Typography variant={"body1"}>
                        Hi, I am Jay Zhou. Currently a penultimate year Software Engineering student at the University of Auckland. I am passionate about Software Development, Digital Design, Cooking, Music, and so much more!
                    </Typography>
                </InAnimation>
            </Box>
        </Box>
    )
}
