import {Box, Typography} from "@mui/material";
import CardList from "../ReusableCompents/CardList";
import MostPopularList from "../HomepageComponents/MostPopularList";
import CardSlider from "../HomepageComponents/CardSlider";
import RelatedCourses from "../ReusableCompents/RelatedCourses";

function RelatedCoursesList(){

    return(
        <Box sx={{background:'white',mt:5,pb:3}}>
            <Typography sx={{ml:10,position:'absolute',mt:2,fontWeight:700,fontSize:24}}>More User Experience Design Courses</Typography>
            <RelatedCourses></RelatedCourses>
        </Box>
    )
    
}
export default RelatedCoursesList