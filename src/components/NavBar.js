import Logo from "../images/logo.jpg"
import Logo2 from "../images/logo2.png"
import SearchBar from "./searchBar";
import './styles/NavBar.css'
import { BsCart3 } from "react-icons/bs";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {useContext, useState} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { FiEye } from "react-icons/fi";
import LoginModal from "./LoginModal";
import EdugramContext from "../context/EdugramContext";




function NavBar(){

const {handleOpen}=useContext(EdugramContext)
 const notLogged=<Box component={'div'}>
     <Button onClick={handleOpen} className='login' disableRipple sx={{color:'#28A19C', boxShadow: 'none',
         textTransform: 'none',position:'absolute',fontFamily:'Quicksand',fontSize:16,fontWeight:600}}>Login</Button>
       <LoginModal></LoginModal>
     <Button sx={{width:115,background:'#28A19C',color:'white',ml:150,position:'absolute',fontSize:16,fontWeight:600}} >Sign Up</Button>

 </Box>
return(<div className='navBar'>
    <img src={Logo2} alt='logo image' className='logo'/>
    <SearchBar placeholder='What do you want to learn?'></SearchBar>
    <ShoppingCartOutlinedIcon sx={{position:'absolute',ml:130,color:'#28A19C'}}></ShoppingCartOutlinedIcon>
    {notLogged}
</div>)
}
export default NavBar;