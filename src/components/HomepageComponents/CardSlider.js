import CourseCard from "../ReusableCompents/CourseCard";
import MultipleItemSlider from "../ReusableCompents/MultipleItemSlider";
import {Box, Grid, Stack} from "@mui/material";
import CardList from "../ReusableCompents/CardList";

function CardSlider({data,itemsPerSlide}) {

         const children = data.map((course) => {
        return (
            <Box   sx={{px:7,py:1,justifyContent:'center',alignItems:'center'}} key={course.product_id} >
                <CourseCard course={course} key={course.product_id}></CourseCard>
            </Box>
        )
    })
    console.log(children)
return(
    <Box sx={{justifyContent:'center',alignItems:'center'}}>
     <MultipleItemSlider itemsNumber={Math.min(data.length, itemsPerSlide)} children={children}></MultipleItemSlider>
    </Box>

)
}
export default CardSlider