import cart from "../../images/cart.jpg";
import Button from "@mui/material/Button";
import LoginModal from "../HomepageComponents/LoginModal";
import * as React from "react";
import {useContext} from "react";
import {Stack} from "@mui/material";
import useIsOpen from "../../hooks/useIsOpen";
import ModalTemplate from "./ModalTemplate";

function GuestMode({userToken}){
        const {isOpen, handleOpen, handleClose} = useIsOpen()
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: 4,
            boxShadow: 54,
            p: 4,
            width: 492,
            height: 511
        };

        return (
            <Stack direction='row' spacing={4} alignItems='center'><
                img src={cart} style={{width: 22.56, height: 27.45}}></img>
                <Button onClick={handleOpen} sx={{fontSize: 16, fontWeight: 600}}>Login</Button>
                <ModalTemplate handleClose={handleClose} open={isOpen} style={style}>
                    <LoginModal handleClose={handleClose}></LoginModal>
                </ModalTemplate>
                <Button variant='contained' sx={{fontSize: 16, fontWeight: 600}}>Sign Up</Button>
            </Stack>
        )


}
export default GuestMode;