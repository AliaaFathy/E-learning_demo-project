import {Box, Stack, Typography} from "@mui/material";
import MenuSlider from "../ReusableCompents/MenuSlider";
import RightSideCourseSummary from "./RightSideCourseSummary";
import useExpantion from "../../hooks/useExpansion";
import {useRef} from "react";
import {useIsOverflow} from "../../hooks/useIsOverflow";


function AboutCourse(){
    const{isExpanded,handleExpansion}=useExpantion()
    const ref=useRef();
    const isOverflow=useIsOverflow(ref)
    const basicStyle={width:700}
    const style=isExpanded?basicStyle:{...basicStyle,maxHeight:75,overflow:'hidden'}

    return(
        <Stack id='0'  sx={{width:795,background:'white',color:'#343434',mt:5,ml:10,borderRadius:2,pb:3}}>
                <Stack spacing={2} sx={{ml:3,mt:3}}>
            <Typography sx={{fontWeight:700,fontSize:24}}>About This Course</Typography>

            <Typography varaint='b1'
                        sx={style}
                        ref={ref}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing
            </Typography>
                </Stack>
            {isOverflow&&<Typography onClick={handleExpansion}  sx={{fontWeight:600,fontSize:18,color:'#28A19C',ml:3}}>{isExpanded?'Show Less':' Show more'}</Typography>}
             <RightSideCourseSummary></RightSideCourseSummary>
        </Stack>

    )
}
export default AboutCourse;