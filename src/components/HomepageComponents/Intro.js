import image from '../../images/girl.jpg'
import {Box, Stack, Typography} from "@mui/material";

function Intro(){
 return(
     <Box sx={{mt:14,background:'white'}} >
         <Stack direction='row' justifyContent='space-between'>
         <Stack spacing={3} sx={{ml:10}}>
         <Typography  variant='h2' color='primary' sx={{mt:20,width:561,whiteSpace:'wrap'}} >Take The Next Step
             <span style= {{color:'#FFBA00'}}> Toward Your Success</span>
         </Typography>
         <Typography sx={{fontWeight:600,fontSize:13,opacity:'75%',width: 500,
                 height: 60,whiteSpace:'wrap'}}>Join hundreds of
                 learners from the middle-east alreadylearning
                 on E-learning Platform ! We qualify you to be a highly competent
                 programmer through a myriad of software development
                 courses covering a variety of programming  languages.
         </Typography>
         </Stack>
         <img  src={image} style={{width:555.7,height:539.32}}/>
         </Stack>


     </Box>
 )
}
export default Intro;