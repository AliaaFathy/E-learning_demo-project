import {createSlice} from "@reduxjs/toolkit";


const courseListSlice=createSlice({
    name:'courseList',
    initialState:{courseList:[]},
    reducers:{
        setCourseList(state,action){
            state.courseList=action.payload
        }

    }
})
export const{setCourseList}=courseListSlice.actions
export const courseListReducer=courseListSlice.reducer