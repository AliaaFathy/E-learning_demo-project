import {createSlice} from "@reduxjs/toolkit";


const courseDetailSlice=createSlice({
    name:'subjects',
    initialState:{course_id:null,courseDatails:[]},
    reducers:{
        setCourseId(state,action){
          state.course_id=action.payload
        },
        setCourseDetails(state,action){
            state.courseDatails=action.payload
        }

    }
})
export const{setCourseId,setCourseDetails}=courseDetailSlice.actions
export const courseDetailReducer=courseDetailSlice.reducer