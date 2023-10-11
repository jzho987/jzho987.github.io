import {Box, Typography} from "@mui/material";
import InAnimation from "../Animation/InAnimation";

interface Props {
    StartingYear: number,
    EndingYear?: number,
    JobTitle: string,
    Company?: string,
    AnimationOrder?: number,
}

export default function CareerBlocks(props: Props) {
    return(
        <InAnimation orderIndex={props.AnimationOrder ?? 1}>
            <Box display={"block"}>
                <Typography align={"left"} variant={"h2"}>
                    {props.JobTitle}
                </Typography>
                <Typography align={"left"} variant={"body1"}>
                    {props.Company}
                </Typography>
                <Typography align={"left"} variant={"body1"}>
                    {`${props.StartingYear} - ${props.EndingYear}`}
                </Typography>
            </Box>
        </InAnimation>
    )
}
