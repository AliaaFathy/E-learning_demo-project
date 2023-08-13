import bell from "../../images/bell.jpg";
import cart from "../../images/cart.jpg";
import personalPhoto from "../../images/defualtProfile.png";
import * as React from "react";
import {useContext} from "react";
import EdugramContext from "../../context/EdugramContext";
import LogoutModal from "../HomepageComponents/LogoutModal";
import {Button, Stack} from "@mui/material";

function UserMode(){
    const {handleOpen}=useContext(EdugramContext)


    return(
        <Stack direction='row' spacing={5} alignItems='center'>
            <img src={bell} style={{width:22.56,height:27.45}} alt='bell'></img>
            <img src={cart} style={{width:22.56,height:27.45}} alt='cart'></img>
            <img src={personalPhoto} style={{width:60,height:60,background:'#e7e7e7',borderRadius:35}} alt='personal'/>
            <Button onClick={handleOpen}> Logout</Button>
            <LogoutModal></LogoutModal>
            </Stack>
    )
}
export default UserMode;