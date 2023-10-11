
import AppBar from '@mui/material/AppBar';
import {Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography} from "@mui/material";

export default function MenuBar() {

    return(
        <AppBar position="static">
            <Toolbar disableGutters>
                <Box paddingLeft={16} display={"flex"} gap={4}>
                    <Button href={"/Home"}>
                        <Typography color={"white"} variant={"h2"}>
                            Home
                        </Typography>
                    </Button>
                    <Button href={"/Home"}>
                        <Typography color={"white"} variant={"h2"}>
                            About
                        </Typography>
                    </Button><Button href={"/Home"}>
                    <Button href={"/Home"}>
                        <Typography color={"white"} variant={"h2"}>
                            Portfolio
                        </Typography>
                    </Button>
                </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
