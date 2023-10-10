import {Box, Button, Typography} from "@mui/material";
import InAnimation from "../Animation/InAnimation";
import {useState} from "react";

interface Props {
    Title?: string,
    content?: string,
    Height?: number,
    AnimationIndex?: number,
    onClick?: () => {},
    ImageSrc?: string,
}

export default function blocks(props: Props) {

    return(
        <InAnimation orderIndex={props.AnimationIndex ?? 0}>
            <Button sx={{
                display: "block",
                justifyItems: "left",
                boxShadow: 5,
                padding: 2,
                width: "fit-content",
                borderRadius: 0,
                color: "black",
                background: "white",
            }} onClick={props.onClick}>
                <img src={props.ImageSrc ?? `https://picsum.photos/400/${props.Height ?? 300}`} alt="random image" height={props.Height}/>
                <Typography align={"left"} marginTop={1} variant={"h5"}>
                    {props.Title ?? "New Item"}
                </Typography>
                {
                    props.content &&
                    <Typography align={"left"}  variant={"body1"}>
                        {props.content}
                    </Typography>
                }
            </Button>
        </InAnimation>
    )
}
