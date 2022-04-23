import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import CorgiImage from "../figures/SHABU_profile4.jpg"

const theme = createTheme({
    palette: {
        background: {
            default: "#ffebee"
        },
        primary: {
            main: "#ce93d8",
        },
        secondary: {
            main: '#84c887',
        },
        error: {
            main: "#f6a5c0"
        },
        warning: {
            main: "#ffbba7"
        }
    }
});


function Header(props) {
    const { window } = props;
    const [auth, setAuth] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const linkPages = [
        { pageName: "Home", pageUrl: "/home", pageIcon: HomeIcon },
        { pageName: "Get to know the CEO", pageUrl: "/login", pageIcon: PetsIcon },
        { pageName: "Adopt Animals", pageUrl: "/home/adoptanimals", pageIcon: HomeIcon },
        { pageName: "Post Animals", pageUrl: "/home/postanimals", pageIcon: PetsIcon }
    ]

    const drawer = (
        <ThemeProvider theme={theme}>
            <Toolbar
                variant="dense" />
            <Divider />
            <List>
                {linkPages.map((detail, index) => (
                    <Link to={detail.pageUrl}
                        style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem button key={detail.pageName}>
                            <ListItemIcon>
                                <detail.pageIcon />
                            </ListItemIcon>
                            <ListItemText primary={detail.pageName} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </ThemeProvider>
    );

    const menuCloseHandler = () => {
        setAnchorEl(null);
    };

    const drawerToggleHandler = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ marginBottom: 2 }}>
                <AppBar position="static">
                    {/* <Container maxWidth="xl"> */}
                    <Toolbar sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 1
                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={drawerToggleHandler}
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            varient="h6"
                            component="div"
                            fontSize="1.5rem"
                            sx={{ mr: 2, flexGrow: 1, fontWeight: "bold" }}>
                            Dog Cat Matcher
                        </Typography>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                            color="inherit"
                            sx={{ mr: 2 }}>
                            {/* <AccountCircle/> */}
                            <Avatar alt="Shabu Corgi" src={CorgiImage} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorEl)}
                            onClose={menuCloseHandler}>
                            <MenuItem onClick={menuCloseHandler}>Profile</MenuItem>
                            <MenuItem onClick={menuCloseHandler}>Account</MenuItem>
                            <MenuItem onClick={() => setAuth(false)}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                    {/* </Container> */}
                </AppBar>

                <Box
                    component="nav"
                    sx={{ flexShrink: { sm: 0 } }}
                    aria-label="drawer">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={() => setMobileOpen(!mobileOpen)}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        PaperProps={{
                            sx: {
                                backgroundColor: "background.default"
                            }
                        }}
                        sx={{
                            display: { xs: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>
    )
};

export default Header;

// profile, account, logout