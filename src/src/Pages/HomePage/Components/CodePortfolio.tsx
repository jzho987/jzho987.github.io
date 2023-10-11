import {Box, Typography} from "@mui/material";
import InAnimation from "../../../Components/Animation/InAnimation";
import Blocks from "../../../Components/Blocks/Blocks";
import {Projects} from "../../../Data/Project";

export default function CodePortfolio() {
    return(
        <Box marginTop={5}>
            <InAnimation orderIndex={1}>
                <Typography variant={"h1"} align={"left"} >
                    Highlights
                </Typography>
            </InAnimation>
            <Box display={"flex"} marginTop={2} gap={5}>
                {Projects.map((p,index) => {
                    return (
                        <Blocks
                            Height={300}
                            ImageSrc={p.imageSrc}
                            Title={p.title}
                            content={p.shortDescription}
                            AnimationIndex={index + 1}
                            href={`/Portfolio?projectId=${p.projectId}`}
                        />)
                })}
            </Box>
        </Box>
    )
}
