import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const FilteredCourseListApi=createApi({
    reducerPath:'filteredCourseList',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app'
    }),
    endpoints(build) {
        return {
            fetchFilteredCourseList: build.query({
                query(courses) {
                    return {
                        url: '/api/v1/courses_filtering',
                        method: 'GET',
                        params: {
                            'page[number]':courses.pageNumber,
                            'page[size]':courses.pageSize,
                            'filter[subject_id]':courses.subject_id
                        }
                    }
                }

            })
        }
    }
})
export const{useFetchFilteredCourseListQuery}=FilteredCourseListApi
export {FilteredCourseListApi}