"use client"
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import React from 'react'
import Image from 'next/image'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 240;

const Navbar = ({ ...props }) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <Box>
            <List sx={{ paddingLeft: 1 }} >
                <ListItem>
                    <ListItemButton component={Link} href="/">
                        <Image
                            src="/img/interface/nav/logo+text.png"
                            alt="Логотип"
                            width={180}
                            height={40}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin">
                        <ListItemText primary={'Main'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/batches">
                        <ListItemText primary={'Batches'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/games">
                        <ListItemText primary={'Games'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/items">
                        <ListItemText primary={'Items'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/loot-cases">
                        <ListItemText primary={'Loot cases'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/staff">
                        <ListItemText primary={'Staff'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} href="/admin/users">
                        <ListItemText primary={'Users'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ display: { sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image
                            src="/img/interface/nav/logo+text.png"
                            alt="Логотип"
                            width={180}
                            height={40}
                        />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth }, flexShrink: { sm: 0 },
                    '& .MuiDrawer-paper': {background: '#0A0D1D'},
                    '& .MuiDrawer-paperAnchorDockedLeft': { background: '#0A0D1D', color: '#FFFF' },
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: '#0A0D1D', color: '#FFFF' },
                        '& .MuiDrawer-paperAnchorDockedLeft': { background: '#000' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        '& .MuiDrawer-paperAnchorDockedLeft': { background: '#000' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>


        // <div className="fixed flex flex-col justify-start top-0 left-0 bottom-0 items-start pt-28 pl-6 pr-6 bg-[#0A0D1D] space-y-6">
        //     <div className="mb-6">
        //         <Link href='/'>
        //             <Image
        //                 src="/img/interface/nav/logo+text.png"
        //                 alt="Логотип"
        //                 width={180}
        //                 height={40}
        //             />
        //         </Link>
        //     </div>
        //     <div className="flex flex-col justify-between space-y-3 m-3">
        //         <Link href='/admin' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin' ? "bg-blue-500" : ""}`}>
        //             <svg className="mr-3" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.756 20 14.0829 20H16.0438C16.9596 20.0024 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z" fill="white" />
        //             </svg>
        //             Main
        //         </Link>
        //         <Link href='/admin/batches' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/batches' ? "bg-blue-500" : ""}`}>
        //             Batches
        //         </Link>
        //         <Link href='/admin/games' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/games' ? "bg-blue-500" : ""}`}>
        //             Games
        //         </Link>
        //         <Link href='/admin/items' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/items' ? "bg-blue-500" : ""}`}>
        //             Items
        //         </Link>
        //         <Link href='/admin/loot-cases' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/loot-cases' ? "bg-blue-500" : ""}`}>
        //             Loot cases
        //         </Link>
        //         <Link href='/admin/staff' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/staff' ? "bg-blue-500" : ""}`}>
        //             Staff
        //         </Link>
        //         <Link href='/admin/users' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/users' ? "bg-blue-500" : ""}`}>
        //             Users
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Navbar
