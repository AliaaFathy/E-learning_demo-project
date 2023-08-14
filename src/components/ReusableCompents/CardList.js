import Card from "./CourseCard";
import {Box, Button, Grid, Stack} from "@mui/material";
import CourseCard from "./CourseCard";
import {useFetchFilteredCourseListQuery} from "../../store";
import {useContext} from "react";

function CardList({data}){
    let renderedCourseList
    const inCenter = data.length < 4?{justifyContent:'center'}:{pl:15}


    if(data) {
        renderedCourseList = data.map((course,index) => {
            return (
                <Grid   sx={{px:3,py:1}} key={course.product_id} >
                    <CourseCard course={course}></CourseCard>
                </Grid>
            )
        })
    }
    return(
        <Grid container   sx={inCenter} >
            {renderedCourseList}
        </Grid>
    )
}
export default CardList