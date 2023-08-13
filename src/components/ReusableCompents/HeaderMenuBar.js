import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../images/logo2.png"

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import personalPhoto from '../../images/defualtProfile.png'
import bell from '../../images/bell.jpg'
import cart from '../../images/cart.jpg'
import SearchBar from "./searchBar";
import {Stack} from "@mui/material";
import {useContext} from "react";
import EdugramContext from "../../context/EdugramContext";
import LoginModal from "../HomepageComponents/LoginModal";
import UserMode from "./UserMode";
import GuestMode from "./GuestMode";


export default function HeaderMenuBar() {
    const userToken = localStorage.getItem('token');
    const {handleOpen}=useContext(EdugramContext)
    console.log(userToken)
    return (
            <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{background:'white',height:110}} >
                <Toolbar>
                    <Stack direction='row' spacing={30} sx={{mt:5,ml:8}}>
                    <img src={logo}  />
                        <Stack direction='row' spacing={3} sx={{mt:5,ml:8}} alignItems='center'>
                        <SearchBar placeholder='What do you want to learn?'></SearchBar>
                            {userToken===null?<GuestMode></GuestMode> :<UserMode></UserMode>}
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
                </Box>
                )}
