import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const CourseListApi=createApi({
    reducerPath:'courseList',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app'
    }),
    endpoints(build) {
        return {
            fetchCourseList: build.query({
                query(id) {
                    return {
                        url: '/api/v1/courses',
                        method: 'GET',
                        params: {
                            'page[number]':1,
                            'page[size]':10,
                            school_class_id:id
                        }
                    }
                }

            })
        }
    }
})
export const{useFetchCourseListQuery}=CourseListApi
export {CourseListApi}