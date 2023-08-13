import {Box, Button} from "@mui/material";

function CustomButton({buttonText,...rest}){
    return(
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Button
                {...rest}
                sx={{mt:7,mb:3,border:'solid 1.6px primary',
                    width:350,height:52,fontSize:22,borderRadius:2}}>{buttonText}</Button>
        </Box>
    )
}
export default CustomButton