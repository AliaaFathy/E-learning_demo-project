import chooseCourse from '../../images/Group 1094.png'
import startLearning from '../../images/Group 1095.png'
import whatsappIcon from '../../images/Group 1164.png'
import Header from "./header";
import {Box, Typography} from "@mui/material";
function learningProcess(){
    const imageStyle={width:137,height:137}
    const textStyle={fontWeight:700,fontSize:24}
   return(
       <Box>
           <img style={{width:65,height:56,marginLeft:1400,marginTop:50}} src={whatsappIcon} alt='whatsApp'/>
           <Header  header="Learning Process" details='Learn the latest skills to reach your professional goals'></Header>
           <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',mt:2,background:'white',height:278}}>
        <Box sx={{mr:10}} >
            <img style={imageStyle} src={chooseCourse} alt='chooseCourse'/>
            <Typography sx={textStyle}>Choose course</Typography>
        </Box>
        <Box sx={{mr:10}}>
            <img style={imageStyle} src={startLearning} alt='start-learning'/>
            <Typography sx={textStyle} >Start learning</Typography>

        </Box >
        <Box sx={{mr:10}}>
            <img style={imageStyle}  src={startLearning} alt='getCertificate'/>
            <Typography sx={textStyle} >Get Certificate </Typography>

        </Box>

           </Box>
    </Box>

   )
}
export default learningProcess;