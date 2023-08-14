import {Box} from "@mui/material";
import MenuBar from "../components/AboutCourseComponents.js/menuBar";
import AboutCourse from "../components/AboutCourseComponents.js/AboutCourse";
import Requirement from "../components/AboutCourseComponents.js/Requirement";
import WhatyouWillLearn from "../components/AboutCourseComponents.js/WhatyouWillLearn";
import CourseContent from "../components/AboutCourseComponents.js/CourseContent";
import RelatedCoursesList from "../components/AboutCourseComponents.js/RelatedCoursesList";
import Quizzes from "../components/AboutCourseComponents.js/Quizzes";
import Assignment from "../components/AboutCourseComponents.js/Assignment";
import Reviews from '../components/AboutCourseComponents.js/Reviews';
import Instructors from "../components/AboutCourseComponents.js/Instructors";
import CourseDetailsHeader from '../components/AboutCourseComponents.js/CourseDetailsHeader'
import {setCourseDetails, useFetchCourseDetailsQuery} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {whatyouWillLearnData,whatyouWillLearnHeader,rating,usersReviews} from "../staticData";
import HeaderSkeleton from "../components/loadingSkeleton/HeaderSkeleton";
import {menuBarContent} from "../staticData";
import {useEffect} from "react";
import LoadingSkeleton from "../components/loadingSkeleton/LoadingSkeleton";

function About(){
    const aboutCourse=useSelector((state)=>{
        return {
           course_id: state.aboutCourse.course_id,
            courseDatails: state.aboutCourse.courseDatails
        }
    })
    const dispatch=useDispatch()
    const {data,error,isFetching}=useFetchCourseDetailsQuery(aboutCourse.course_id)
    useEffect(() => {
        if (data) {
            dispatch(setCourseDetails(data.data));

    }}, [data, dispatch])
    if(error) {
        return <div>Error...</div>
    }
    else if(isFetching|| aboutCourse.courseDatails.length === 0) {
        return <HeaderSkeleton></HeaderSkeleton>
    }

    console.log(aboutCourse.courseDatails)

    return (
        <Box>
            <CourseDetailsHeader></CourseDetailsHeader>
            <MenuBar menuBarContent={menuBarContent}></MenuBar>
            <AboutCourse></AboutCourse>
            <Requirement></Requirement>
            <WhatyouWillLearn data={whatyouWillLearnData} header={whatyouWillLearnHeader}></WhatyouWillLearn>
            <CourseContent></CourseContent>
            <Instructors></Instructors>
            <Reviews rating={rating} usersReview={usersReviews}></Reviews>
            <Quizzes></Quizzes>
            <Assignment></Assignment>
            <RelatedCoursesList></RelatedCoursesList>

        </Box>
    )

}
export default About;