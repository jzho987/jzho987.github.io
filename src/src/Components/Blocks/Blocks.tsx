import {Box, Button, Grow, Typography} from "@mui/material";

interface Props {
    Title?: string,
    content?: string,
    Height?: number,
}

export default function blocks(props: Props) {
    return(
        //display={"block"} justifyItems={"left"} boxShadow={5} padding={2} width={"fit-content"}

        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{timeout: 2500}}
        >
            <Button sx={{
                display: "block",
                justifyItems: "left",
                boxShadow: 5,
                padding: 2,
                width: "fit-content",
                borderRadius: 0
            }} >
                <img src={`https://picsum.photos/400/${props.Height ?? 300}`} alt="random image" width="500" height={props.Height}/>
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
        </Grow>
    )
}
