import {Avatar, Button, IconButton} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    Diameter?: number,
    display?: ReactNode,
    href?: string,
}

export default function LinkedIcons(props: Props) {
    return(
        <IconButton onClick={() => window.open(props.href)}>
            <Avatar>
                {props.display}
            </Avatar>
        </IconButton>
    )
}
