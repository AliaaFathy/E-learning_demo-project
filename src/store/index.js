import {configureStore} from "@reduxjs/toolkit";
import {userLoginReducer} from "./Slices/loginSlice";
import {changeEmail,changePassword,handleTokenChange} from "./Slices/loginSlice";
import {loginApi} from "./APIs/LoginApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {SubjectApi} from "./APIs/SubjectAPI";
import {CourseDetailApi} from "./APIs/CourseDetailsApi";
import {FilteredCourseListApi} from "./APIs/FilteredCourseListApi";
import {subjectReducer} from "./Slices/subjectSlice";
import {selectSubjectIndex} from "./Slices/subjectSlice";
import {courseDetailReducer} from "./Slices/CourseDetailSlice";
import {setCourseDetails,setCourseId} from  './Slices/CourseDetailSlice'
import {CourseListApi} from "./APIs/CourseListApi";
import {coursesListReducer,setCoursesList,setFlattenCoursesList} from "./Slices/CourseListSlice";
import {filteredCourseListReducer,setFilteredCourseList} from "./Slices/FilteredCourseList";
import {certificateReducer} from "./Slices/CertificateSlice";
import{selectCertificateIndex} from "./Slices/CertificateSlice";

const store=configureStore({
    reducer:{
        login:userLoginReducer,
        subjects:subjectReducer,
        aboutCourse:courseDetailReducer,
        coursesList:coursesListReducer,
        certificates:certificateReducer,
        filteredCourses:filteredCourseListReducer,
        [loginApi.reducerPath]:loginApi.reducer,
        [SubjectApi.reducerPath]:SubjectApi.reducer,
        [CourseDetailApi.reducerPath]:CourseDetailApi.reducer,
        [FilteredCourseListApi.reducerPath]:FilteredCourseListApi.reducer,
        [CourseListApi.reducerPath]:CourseListApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(loginApi.middleware)
            .concat(SubjectApi.middleware)
            .concat(FilteredCourseListApi.middleware)
            .concat(CourseDetailApi.middleware)
            .concat(CourseListApi.middleware)
    }
})
setupListeners(store.dispatch);

export {
    store,
    changeEmail,
    changePassword,handleTokenChange,
    selectSubjectIndex,
    setCourseDetails,
    setCourseId,
    setFilteredCourseList,
    selectCertificateIndex,setCoursesList,setFlattenCoursesList
}
export {useLoginMutation} from './APIs/LoginApi'
export {useFetchSubjectQuery} from './APIs/SubjectAPI'
export {useFetchFilteredCourseListQuery} from './APIs/FilteredCourseListApi'
export {useFetchCourseDetailsQuery} from './APIs/CourseDetailsApi'
export {useFetchCourseListQuery} from './APIs/CourseListApi'