import {Box, Typography} from "@mui/material";

function PercentRangeBar({percentValue,color,width,height,...rest}){
    return(
        <>
        <Box sx={{width:width,height:height,background:'white',display:'flex',mt:1}} {...rest}>
            <Box sx={{background:color ,width:`${percentValue}`}}></Box>
        </Box>
    <Typography sx={{ml:2,fontWeight:500,fontSize:16}}>{percentValue}</Typography>
</>
    )
}
export default PercentRangeBar;