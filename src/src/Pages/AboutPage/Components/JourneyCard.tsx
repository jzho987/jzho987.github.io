import {Box, Typography} from "@mui/material";
import InAnimation from "../../../Components/Animation/InAnimation";

interface Props {
    Title: string,
    bodyText: string,
    AnimationIndex?: number,
}

export default function JourneyCard(props: Props) {
    return(
        <Box>
            <InAnimation orderIndex={props.AnimationIndex ?? 0}>
                <Typography align={"left"} variant={"h2"}>
                    {props.Title}
                </Typography>
            </InAnimation>
            <InAnimation orderIndex={(props.AnimationIndex ?? 0) + 1}>
                <Typography align={"left"} variant={"body2"}>
                    {props.bodyText}
                </Typography>
            </InAnimation>
        </Box>
    )
}
