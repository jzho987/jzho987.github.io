import {Grow} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
    orderIndex?: number
}

export default function InAnimation(props: Props) {

    const baseTime = 1500;

    const time = props.orderIndex ? 1500 + props.orderIndex * 600 : baseTime;

    return(
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{timeout: time}}
        >
            <div>
                {props.children}
            </div>
        </Grow>
    )
}
