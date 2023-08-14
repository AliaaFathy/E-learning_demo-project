import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../../images/logo2.png"
import SearchBar from "./searchBar";
import {Stack} from "@mui/material";
import UserMode from "./UserMode";
import GuestMode from "./GuestMode";

import ScrolledMenu from "./ScrolledMenu";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export default function HeaderMenuBar() {
    const userToken=useSelector((state)=>{
        return state.login.userToken
    })
    const navigate=useNavigate();

    const content=<Stack direction='row' spacing={30} sx={{mt:5,ml:8}}>
        <img src={logo}  alt='logo'  onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
        <Stack direction='row' spacing={3} sx={{mt:5,ml:8}} alignItems='center'>
            <SearchBar placeholder='What do you want to learn?'></SearchBar>
            {userToken===null?<GuestMode ></GuestMode> :<UserMode ></UserMode>}
        </Stack>
    </Stack>
    return (
        <ScrolledMenu children={content} style={{height:114}}></ScrolledMenu>
                )
}
