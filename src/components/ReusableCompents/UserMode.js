import bell from "../../images/bell.jpg";
import cart from "../../images/cart.jpg";
import personalPhoto from "../../images/defualtProfile.png";
import * as React from "react";
import LogoutModal from "../HomepageComponents/LogoutModal";
import {Button, Stack} from "@mui/material";
import useIsOpen from "../../hooks/useIsOpen";
import ModalTemplate from "./ModalTemplate";

function UserMode(){
    const{isOpen,handleOpen,handleClose}=useIsOpen()
    const userToken=localStorage.getItem('token')

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        borderRadius:4,
        boxShadow: 54,
        p: 4,
        width:392,
        height:200
    }

        return (
            <Stack direction='row' spacing={5} alignItems='center'>
                <img src={bell} style={{width: 22.56, height: 27.45}} alt='bell'></img>
                <img src={cart} style={{width: 22.56, height: 27.45}} alt='cart'></img>
                <img src={personalPhoto} style={{width: 60, height: 60, background: '#e7e7e7', borderRadius: 35}}
                     alt='personal'/>
                <Button onClick={handleOpen}> Logout</Button>
                <ModalTemplate open={isOpen} style={style} handleClose={handleClose}>
                    <LogoutModal handleClose={handleClose}></LogoutModal>
                </ModalTemplate>
            </Stack>
        )


}
export default UserMode;