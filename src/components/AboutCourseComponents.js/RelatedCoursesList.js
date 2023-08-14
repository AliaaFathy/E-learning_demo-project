import {Box, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import CardSlider from "../HomepageComponents/CardSlider";
import {setAllCourseList, useFetchCourseListQuery} from "../../store";
import {useEffect} from "react";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";

function RelatedCoursesList(){

   const flattenCourses=useSelector((state)=>{
       return state.coursesList.flattenCoursesList
   })

    return(
        <Box sx={{background:'white',mt:5,pb:3}}>
            <Typography sx={{ml:10,position:'absolute',mt:2,fontWeight:700,fontSize:24}}>
                More User Experience Design Courses</Typography>
             <CardSlider data={flattenCourses} itemsPerSlide={3}></CardSlider>

        </Box>
    )
    
}
export default RelatedCoursesList