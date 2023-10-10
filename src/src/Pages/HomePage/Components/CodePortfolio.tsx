import {Box, Typography} from "@mui/material";
import InAnimation from "../../../Components/Animation/InAnimation";
import Blocks from "../../../Components/Blocks/Blocks";
import virtualPetGameImage from "../../../Images/virtualPetGameImage.png";
import digitalTwinImage from "../../../Images/digitalTwinImage.png";

export default function CodePortfolio() {
    return(
        <Box marginTop={7}>
            <InAnimation orderIndex={1}>
                <Typography variant={"h4"} align={"left"} >
                    Highlights
                </Typography>
            </InAnimation>
            <Box display={"flex"} marginTop={2} gap={5}>
                <Blocks
                    Height={300}
                    ImageSrc={virtualPetGameImage}
                    Title={"Milo!"}
                    content={"A virtual pet game"}
                    AnimationIndex={2}
                />
                <Blocks
                    Height={300}
                    ImageSrc={digitalTwinImage}
                    Title={"Digital Twin"}
                    content={"Digital Twin developed for the University of Auckland"}
                    AnimationIndex={3}
                />
            </Box>
        </Box>
    )
}
