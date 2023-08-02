import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {useContext, useState} from "react";
import EdugramContext from "../context/EdugramContext";
import {useDispatch, useSelector} from "react-redux";
import {changeEmail, changePassword, userLoginReducer} from "../store/Slices/loginSlice";
import {useLoginMutation} from "../store";

function LoginModal(){
const{handleClose,open}=useContext(EdugramContext)
    const dispatch=useDispatch()
    const [login,result]=useLoginMutation()
    console.log(result)


    const user=useSelector((state)=>{
        return{
            email:state.login.email,
            password:state.login.password
        }
    })
    const handleEmailChange=(event)=>{
    const email=event.target.value
    dispatch(changeEmail(email))
        console.log(email)
    }
    const handlePasswordChange=(event)=>{
        const password=event.target.value
        dispatch(changePassword(password))
        console.log(password)
    }
    const handleClick=()=>{
        console.log(user)
        login(user);

    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        borderRadius:4,
        boxShadow: 54,
        p: 4,
        width:492,
        height:511
    };
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{backdropFilter:'blur(3px)'}}>
            <Box sx={style}>
                <ClearOutlinedIcon onClick={handleClose} sx={{fontSize:'small',width:20,height:20.2,background:'#e7e7e7' ,borderRadius:5,position:'absolute',ml:52,mt:-1}}></ClearOutlinedIcon>
                <Typography   sx={{ml:13,fontWeight:800,fontSize:32,fontFamily:'Quicksand'}}>
                    Welcome Back!
                </Typography>
                <Typography  sx={{ mt: 7,fontWeight:600,fontFamily:'Quicksand',fontSize:16,color:'#343434' }}>
                    Phone Number or IP Number
                </Typography>
                <TextField onChange={handleEmailChange}   variant="outlined"  placeholder='Enter your phone number or IP number' sx={{width:428,height:49,mt:2}}  />
                <Typography  sx={{ mt: 2,fontWeight:600,fontFamily:'Quicksand',fontSize:16,color:'#343434' }}>
                    Password
                </Typography>
                <VisibilityOutlinedIcon sx={{position:'absolute',ml:48,top:300,Fontweigth:300}}></VisibilityOutlinedIcon>
                <TextField onChange={handlePasswordChange}   variant="outlined"  placeholder='Enter your password' sx={{width:428,height:49,mt:2}}  />
                <Typography sx={{ mt: 2,ml:39, whiteSpace: 'nowrap',fontWeight:600,fontFamily:'Quicksand',fontSize:14,color:'#2A313B' }}>
                    Forgot Password?
                </Typography>
                <Button onClick={handleClick}  sx={{width:428,height:58,background:'#28A19C',color:'white',mt:2,textTransform: 'none'
                }} > Login</Button>
                <Typography component={'span'} sx={{display:'flex',mt:3,ml:19,fontSize:14,color:'#728397',fontWeight:300}}>
                    New User?
                    <Typography sx={{color:'#28A19C',fontSize:14,fontWeight:700}}>
                        Sign Up
                    </Typography>
                </Typography>
            </Box>
        </Modal>
    )
}
export default LoginModal