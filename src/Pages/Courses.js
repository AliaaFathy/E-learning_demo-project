import CardList from "../components/CardList";
import {Box, Pagination, Typography} from "@mui/material";

function Courses(){
    return(
        <Box>
            <Typography sx={{mt:8,ml:80,color:'#343434',fontWeight:700,fontSize:36,LineHeight:45}}>Design Courses</Typography>
            <Typography sx={{ml:70,color:'#FFBA00',fontWeight:700,fontSize:30,LineHeighr:37.5}}>Courses to get you started</Typography>
            <CardList></CardList>
            <CardList></CardList>
            <Pagination count={320} size='large' sx={{mt:10,fontSize:28,ml:70,height:35,color:'#28A19C'}} />


        </Box>
    )
}
export default Courses;