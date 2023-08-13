import Header from "./header";
import CardList from "../ReusableCompents/CardList";
import MultipleItemSlider from "../ReusableCompents/MultipleItemSlider";
import {selectSubjectIndex, useFetchCourseListQuery} from "../../store";
import {Typography,Stack,Skeleton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCourseList} from "../../store/Slices/CourseListSlice";
import CourseCard from "../ReusableCompents/CourseCard";
import CardSlider from "./CardSlider";
import CardSkeleton from "../loadingSkeleton/CardSkeleton";

function MostPopularList(){
    const {data,error,isFetching}=useFetchCourseListQuery(1);
    const dispatch=useDispatch()
    const courseList=useSelector((state)=>{
        return state.courses.courseList
    })

    if(error){
        return <Typography>Error...</Typography>
    }
    else if(isFetching){
        return<CardSkeleton></CardSkeleton>
    }

        dispatch(setCourseList(data.data.courses))
        console.log(data.data.courses.STEAM)
        console.log(courseList.STEAM)
    const courses=data.data.courses
    ///////////why cardList doesn't work

    return(

        <div>
            <Header header='Most Popular' details='Learn the latest skills to reach your professional goals'></Header>
            <CardSlider data={courses.STEAM} itemsPerSlide={3}></CardSlider>
        </div>
    )

}
export default MostPopularList;