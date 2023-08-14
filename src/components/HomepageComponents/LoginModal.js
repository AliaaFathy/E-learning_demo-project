import {useContext, useState} from "react";
import EdugramContext from "../../context/EdugramContext";
import {useDispatch, useSelector} from "react-redux";
import {changeEmail, changePassword} from "../../store/Slices/loginSlice";
import {useLoginMutation} from "../../store";
import ModalTemplate from '../ReusableCompents/ModalTemplate'
import {Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function LoginModal({handleClose}){
    const dispatch=useDispatch()
    const [login,result]= useLoginMutation()
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {event.preventDefault()};
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleEmailChange=(event)=>{dispatch(changeEmail(event.target.value))}
    const handlePasswordChange=(event)=>{dispatch(changePassword(event.target.value))}
    const user=useSelector((state)=>{
        return{
            email:state.login.email,
            password:state.login.password
        }
    })
    const {userToken,handleTokenChange}=useContext(EdugramContext)
    const handleClick=async () => {
        const response = await login(user);
        if(response.data.message==='You logged in successfully'){
            localStorage.setItem('token',response.data.data.token)
            handleTokenChange(response.data.data.token)
            handleClose();

        }

    }
    const loginModalContent=<>
        <ClearOutlinedIcon
            onClick={handleClose}
            sx={{fontSize:'small',
                width:20,
                height:20.2,
                background:'#e7e7e7'
                ,borderRadius:5,
                position:'absolute',
                ml:52,
                mt:-1}}>
        </ClearOutlinedIcon>
        <Typography
            fontWeight={800}
            fontSize={32}
            sx={{ml:13}}>
            Welcome Back!
        </Typography>
        <Typography
            fontWeight={600}
            fontSize={16}
            color='#343434'
            sx={{ mt: 7}}>
            Phone Number or IP Number
        </Typography>
        <TextField
            onChange={handleEmailChange}
            variant="outlined"
            placeholder='Enter your phone number or IP number'
            sx={{width:428,height:49,mt:2}}  />
        <Typography
            sx={{ mt: 2,fontWeight:600,fontSize:16,color:'#343434' }}>
            Password
        </Typography>

        <FormControl
            sx={{  width: 428,mt:2 }}
            variant="outlined">
            <OutlinedInput onChange={handlePasswordChange}
                           id="outlined-adornment-password"
                           type={showPassword ? 'text' : 'password'}
                           placeholder='Enter your password'
                           endAdornment={
                               <InputAdornment position="end">
                                   <IconButton
                                       aria-label="toggle password visibility"
                                       onClick={handleClickShowPassword}
                                       onMouseDown={handleMouseDownPassword}
                                       edge="end"
                                   >
                                       {showPassword ? <VisibilityOff /> : <Visibility />}
                                   </IconButton>
                               </InputAdornment>
                           }

            />
        </FormControl>
        <Typography
            fontWeight={600}
            fontSize={14}
            color='#2A313B'
            sx={{ mt: 2,ml:39, whiteSpace: 'nowrap' }}>
            Forgot Password?
        </Typography>
        <Button
            onClick={handleClick}
            sx={{width:428,height:58,background:'#28A19C',color:'white',mt:2,textTransform: 'none'
        }} > Login</Button>
        <Typography component={'span'} sx={{display:'flex',mt:3,ml:19,fontSize:14,color:'#728397',fontWeight:300}}>
            New User?
            <Typography sx={{color:'#28A19C',fontSize:14,fontWeight:700}}>
                Sign Up
            </Typography>
        </Typography>
    </>
    return(
        <>
        {loginModalContent}
        </>
    )
}
export default LoginModal