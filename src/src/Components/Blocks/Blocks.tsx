import {Box, Button, Typography} from "@mui/material";
import InAnimation from "../Animation/InAnimation";
import {useState} from "react";
import Image from "../Image/Image";

interface Props {
    Title?: string,
    content?: string,
    Height?: number,
    AnimationIndex?: number,
    onClick?: () => {},
    href?: string,
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
            }}
                    onClick={props.onClick}
                    href={props.href}
            >
                <Image ImageSrc={props.ImageSrc} Height={props.Height}/>
                <Typography align={"left"} marginTop={1} variant={"h2"}>
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
