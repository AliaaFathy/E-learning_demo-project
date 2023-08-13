import {createSlice} from "@reduxjs/toolkit";


const filteredCourseListSlice=createSlice({
    name:'courseList',
    initialState:{filteredCourseList:[]},
    reducers:{
        setFilteredCourseList(state,action){
            state.courseList=action.payload
        }

    }
})
export const{setFilteredCourseList}=filteredCourseListSlice.actions
export const filteredCourseListReducer=filteredCourseListSlice.reducer