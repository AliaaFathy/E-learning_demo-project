import Header from "./header";
import CardList from "../ReusableCompents/CardList";
import MultipleItemSlider from "../ReusableCompents/MultipleItemSlider";
import {
    selectSubjectIndex,
    setAllCourseList,
    setCoursesList,
    setFlattenCoursesList,
    useFetchCourseListQuery
} from "../../store";
import {Typography,Stack,Skeleton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCourseList} from "../../store/Slices/CourseListSlice";
import CourseCard from "../ReusableCompents/CourseCard";
import CardSlider from "./CardSlider";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import {useEffect} from "react";

function MostPopularList(){
    const {data,error,isFetching}=useFetchCourseListQuery(1);
    const dispatch=useDispatch()
    const courseList=useSelector((state)=>{
        return {
            coursesList:state.coursesList.coursesList,
            flattenCoursesList:state.coursesList.flattenCoursesList
        }
    })
    console.log(courseList)
    useEffect(() => {
        if (data) {
            const allCourses = Object.values(data.data.courses).flatMap((courseArray) => courseArray);
            dispatch(setCoursesList(data.data.courses));
            dispatch(setFlattenCoursesList(allCourses))
            console.log(allCourses);
        }
    }, [data, dispatch]);

    if(error){
        return <Typography>Error...</Typography>
    }
    else if(isFetching||courseList.flattenCoursesList.length===0||courseList.coursesList.length===0){
        return<LoadingSkeleton width={272} height={400} count={3}></LoadingSkeleton>
    }


    return(

        <div>
            <Header header='Most Popular' details='Learn the latest skills to reach your professional goals'></Header>
            <CardSlider data={courseList.flattenCoursesList} itemsPerSlide={3}></CardSlider>
        </div>
    )

}
export default MostPopularList;