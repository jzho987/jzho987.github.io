import {Box, Grid, Grow, Typography} from "@mui/material";
import Blocks from "../../Components/Blocks/Blocks";
import InAnimation from "../../Components/Animation/InAnimation";

export default function HomePage() {
    return(
        <Box display={"block"} justifyItems={"left"} padding={5}>
            <Box marginLeft={4} sx={{
                background: "linear-gradient(90deg, rgba(222,233,250,1) 0%, rgba(255,255,255,1) 63%)",
            }}
            padding={4}>
                <Box marginLeft={3}>
                    <Box marginTop={1}>
                        <InAnimation orderIndex={2}>
                            <Typography align={"left"} variant={"h4"}>
                                Hi. My name is Jay Zhou
                            </Typography>
                        </InAnimation>
                    </Box>
                    <Box marginLeft={8} marginTop={1}>
                        <InAnimation orderIndex={2}>
                            <Typography align={"left"} variant={"h4"}>
                                Currently Studying at the University of Auckland
                            </Typography>
                        </InAnimation>
                    </Box>
                    <Box marginLeft={4} marginTop={2}>
                        <InAnimation orderIndex={3}>
                            <Typography align={"left"} variant={"h2"}>
                                Welcome to my journey...
                            </Typography>
                        </InAnimation>
                    </Box>
                </Box>
            </Box>
            <Box marginTop={7}>
                <Box marginLeft={4}>
                    <InAnimation orderIndex={1}>
                        <Typography variant={"h4"} align={"left"} >
                            Highlights
                        </Typography>
                    </InAnimation>
                </Box>
                <Box display={"flex"} marginTop={2} gap={3}>
                    <Blocks
                        Height={300}
                        Title={"Milo!"}
                        content={"A virtual pet game"}
                        AnimationIndex={2}
                    />
                    <Blocks
                        Height={300}
                        Title={"Digital Twin"}
                        content={"Digital Twin developed for the University of Auckland"}
                        AnimationIndex={3}
                    />
                    <Blocks
                        Height={300}
                        Title={"Milo!"}
                        content={"A virtual pet game"}
                        AnimationIndex={4}
                    />
                </Box>
            </Box>

        </Box>
    )
}
