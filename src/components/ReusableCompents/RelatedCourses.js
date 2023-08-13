import {useSelector} from "react-redux";
import {useFetchFilteredCourseListQuery} from "../../store";
import {Skeleton, Stack} from "@mui/material";
import CardList from "./CardList";
import CardSlider from "../HomepageComponents/CardSlider";
import CardSkeleton from "../loadingSkeleton/CardSkeleton";

function RelatedCourses(){
    const subjectIndex=useSelector((state)=>{
        return (state.subjects.subjectIndex)
    })
    console.log(subjectIndex)
    const courses = {subject_id: subjectIndex, pageNumber: 1, pageSize: 8}
    const {data, error, isFetching} =useFetchFilteredCourseListQuery(courses)

    if(error){
        return <div>Error...</div>
    }
    else if(isFetching){
        return <CardSkeleton></CardSkeleton>
    }
    const course=data.data.courses
    console.log(course)
    return (
        <>
            {course.length>0 && <CardSlider data={course} itemsPerSlide={3}></CardSlider>}
        </>

    )
}
export default RelatedCourses;