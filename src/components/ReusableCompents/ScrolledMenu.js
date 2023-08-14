import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Stack, useScrollTrigger} from "@mui/material";
import logo from "../../images/logo2.png";
import SearchBar from "./searchBar";
import GuestMode from "./GuestMode";
import UserMode from "./UserMode";
import Box from "@mui/material/Box";
import * as React from "react";


function ScrolledMenu({children,style}){
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
  return(  <Box sx={{ display: 'flex',position:'relative'}}>
      <AppBar position='fixed' sx={{...style,background:'white'}} >
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>

    </Box>
  )
}
export default ScrolledMenu;