import {Box, Typography} from "@mui/material";
import InAnimation from "../../Components/Animation/InAnimation";
import Image from "../../Components/Image/Image";

interface Props {
    Title?: string,
    Description?: string,
    ImageSrc?: string,
}

export default function PortfolioPage(props: Props) {
    return(
        <Box>
            <InAnimation orderIndex={1}>
                <Typography align={"left"} variant={'h1'}>
                    Project Information
                </Typography>
            </InAnimation>
            <Box display={"Flex"} gap={3} marginTop={3}>
                <InAnimation orderIndex={2}>
                    <Image ImageSrc={props.ImageSrc} Height={400}/>
                </InAnimation>
                <Box display={"block"}>
                    <InAnimation orderIndex={2}>
                        <Typography align={"left"}  variant={'h2'}>
                            {props.Title}
                        </Typography>
                    </InAnimation>

                    <InAnimation orderIndex={3}>
                        <Typography marginTop={1} align={"justify"} variant={'body1'}>
                            {props.Description}
                        </Typography>
                    </InAnimation>
                </Box>
            </Box>
        </Box>
    )
}
