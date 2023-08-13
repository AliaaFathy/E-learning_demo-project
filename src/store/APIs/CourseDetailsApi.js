import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const CourseDetailApi=createApi({
    reducerPath:'courseDetails',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app'
    }),
    endpoints(build) {
        return {
            fetchCourseDetails: build.query({
                query(courseId) {
                    return {
                        url: `/api/v1/courses/${courseId}`,
                        method: 'GET',

                    }
                }

            })
        }
    }
})
export const{useFetchCourseDetailsQuery}=CourseDetailApi
export {CourseDetailApi}