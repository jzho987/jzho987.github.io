import {Box, Typography} from "@mui/material";
import InAnimation from "../../Components/Animation/InAnimation";
import Image from "../../Components/Image/Image";
import LinkedIcons from "../../Components/LinkIcons/LinkedIcons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

interface Props {
    Title?: string,
    Description?: string,
    ImageSrc?: string,
    gitUrl?: string,
    website?: string,
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
                <Box position={"relative"} display={"block"}>
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
                    {
                        (props.gitUrl || props.website) &&

                        <Box bottom={0} left={0} position={"absolute"} display={"block"}>
                            <InAnimation orderIndex={2}>
                                <Typography align={"left"} variant={"h2"}>
                                    Links
                                </Typography>
                            </InAnimation>

                            <Box display={"flex"} gap={1} marginTop={1}>
                                {
                                    props.gitUrl &&
                                    <InAnimation orderIndex={3}>
                                        <LinkedIcons display={<GitHubIcon/>} href={props.gitUrl}/>
                                    </InAnimation>
                                }
                                {
                                    props.website &&
                                    <InAnimation orderIndex={3}>
                                        <LinkedIcons display={<LinkIcon/>} href={props.website}/>
                                    </InAnimation>
                                }
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}
