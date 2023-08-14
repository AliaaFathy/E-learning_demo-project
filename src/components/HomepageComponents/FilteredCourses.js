import {useSelector} from "react-redux";
import {useFetchFilteredCourseListQuery} from "../../store";
import {Skeleton, Stack} from "@mui/material";
import CardList from "../ReusableCompents/CardList";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";

function FilteredCourses(){
    const subjectIndex=useSelector((state)=>{
        return (state.subjects.subjectIndex)
    })
    const courses = {subject_id: subjectIndex, pageNumber: 1, pageSize: 4}
    const {data, error, isFetching} =useFetchFilteredCourseListQuery(courses)

    if(error){
        return <div>Error...</div>
    }
    else if(isFetching){
        return <LoadingSkeleton width={272} height={400} count={4}></LoadingSkeleton>
    }
    const course=data.data.courses
    return (
        <>
        {course.length>0 && <CardList data={course}  ></CardList>}
        </>

    )
}
export default FilteredCourses;