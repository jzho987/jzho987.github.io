
import AppBar from '@mui/material/AppBar';
import {Avatar, Box, Container, IconButton, Menu, Toolbar, Tooltip, Typography} from "@mui/material";

export default function MenuBar() {

    return(
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="About">
                                <IconButton onClick={() => {}} sx={{ p: 0 }}>
                                    <Avatar alt="Jay Zhou" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
