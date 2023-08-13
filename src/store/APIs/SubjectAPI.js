import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const SubjectApi=createApi({
    reducerPath:'subject',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app'
    }),
    endpoints(build) {
        return {
            fetchSubject: build.query({
                query(id) {
                    return {
                        url: `/api/v1/classes/${id}/subjects`,
                        method: 'GET',

                    }
                }

            })
        }
    }
})
export const{useFetchSubjectQuery}=SubjectApi
export {SubjectApi}