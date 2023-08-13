import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const loginApi=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app'
    }),
    endpoints(build) {
        return {
            login: build.mutation({
                query(user) {
                    return {
                        url: '/api/v1/user/login',
                        method: 'POST',
                        body: {
                            'user': {'email':user.email,password:user.password},
                            "device": {
                                "uid": "68c7c64",
                                "fcm_token": 'il'
                            }
                        }
                    }
                }

            })
        }
    }
})
export const{useLoginMutation}=loginApi
export {loginApi}