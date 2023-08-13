import { Stack} from "@mui/material";
import {useSelector} from "react-redux";
import {useFetchFilteredCourseListQuery} from "../store";
import {useState} from "react";

import MoreCourses from "../components/CoursesPageComponents/MoreCourses";
import CoursesPageHeader from "../components/CoursesPageComponents/CoursesPageHeader";

function Courses(){

    return(
        <Stack   >
            <CoursesPageHeader></CoursesPageHeader>
            <MoreCourses></MoreCourses>
        </Stack>
    )
}
export default Courses;