import cart from "../../images/cart.jpg";
import Button from "@mui/material/Button";
import LoginModal from "../HomepageComponents/LoginModal";
import * as React from "react";
import {useContext} from "react";
import EdugramContext from "../../context/EdugramContext";
import {Stack} from "@mui/material";

function GuestMode(){
    const {handleOpen}=useContext(EdugramContext)
    return(
        <Stack direction='row' spacing={4} alignItems='center'><
            img src={cart} style={{width:22.56,height:27.45}}></img>
            <Button onClick={handleOpen}   sx={{fontSize:16,fontWeight:600}}>Login</Button>
            <LoginModal></LoginModal>
            <Button variant='contained'    sx={{fontSize:16,fontWeight:600}}>Sign Up</Button>
        </Stack>
    )
}
export default GuestMode;