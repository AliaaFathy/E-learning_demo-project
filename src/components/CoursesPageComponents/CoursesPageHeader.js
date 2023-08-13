import {Stack, Tooltip, Typography} from "@mui/material";
import {useSelector} from "react-redux";

function CoursesPageHeader(){
    const subject=useSelector((state)=>{
        return{
            subjectIndex:state.subjects.subjectIndex,
            subjectName:state.subjects.subjectName
        }
    })
    return(
        <Stack  alignItems='center' marginTop={15} >
            <Tooltip title={subject.subjectName}>
                <Typography sx={{whiteSpace:'wrap',maxWidth:300,color:'#343434',fontWeight:700,fontSize:36,LineHeight:45,maxHeight:220,overflow:'hidden'}}>{subject.subjectName} Courses</Typography>
            </Tooltip>
            <Typography sx={{color:'#FFBA00',fontWeight:700,fontSize:30,LineHeight:37.5}}>Courses to get you started</Typography>
        </Stack>
    )
}
export default CoursesPageHeader;