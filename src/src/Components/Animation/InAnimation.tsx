import {Grow} from "@mui/material";
import {ReactNode, useEffect, useState} from "react";

interface Props {
    children: ReactNode
    orderIndex?: number
}

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

export default function InAnimation(props: Props) {

    const [render, setRender] = useState(false)
    const delayTime = (props.orderIndex ?? 0) * 200;
    const time = 1500;

    useEffect(() => {
        timeout(delayTime).then(() => {
            setRender(true)
        })
    },[])

    return(
        <Grow
            in={render}
            style={{ transformOrigin: '0 0 0' }}
            {...{timeout: time}}
        >
            <div>
                {props.children}
            </div>
        </Grow>
    )
}
