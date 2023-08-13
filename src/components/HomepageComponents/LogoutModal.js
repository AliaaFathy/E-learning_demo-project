import {Button, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import EdugramContext from "../../context/EdugramContext";
import ModalTemplate from "../ReusableCompents/ModalTemplate";

function LogoutModal(){
    const{handleClose,open}=useContext(EdugramContext)

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
    const handleClick=()=>{
        localStorage.removeItem('token')
        handleClose()
    }
    const children= <Stack alignItems='center' justifyContent={'center'} spacing={5}>
        <Typography>Are You Sure You Need to Logout</Typography>
        <Stack direction={'row'} spacing={5}>
        <Button onClick={handleClose} variant='contained'>No</Button>
        <Button onClick={handleClick} variant='outlined'>Yes</Button>
        </Stack>
    </Stack>

    return(
        <>
            <ModalTemplate children={children} style={style}></ModalTemplate>
        </>
    )
}
export default LogoutModal;