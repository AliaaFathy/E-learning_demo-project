import {Box, Typography} from "@mui/material";

function AboutCourse(){
    return(
        <Box sx={{width:795,height:221,background:'white',color:'#343434',mt:5,position:'relative',ml:10,borderRadius:2}}>
            <Typography sx={{fontWeight:700,fontSize:24,ml:3,position:'absolute',mt:3}}>About This Course</Typography>
            <Box sx={{width:700,position:'relative'}}>
            <Typography sx={{fontWeight:500,fontSize:15,ml:3,position:'absolute',mt:9}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing</Typography>
            </Box>
            <Typography sx={{fontWeight:600,fontSize:18,color:'#28A19C',ml:3,position:'absolute',mt:19}}>Show more</Typography>

        </Box>

    )
}
export default AboutCourse;