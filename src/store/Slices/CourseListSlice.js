import {createSlice} from "@reduxjs/toolkit";


const coursesListSlice=createSlice({
    name:'courseList',
    initialState:{coursesList:[],flattenCoursesList:[]},
    reducers:{
        setCoursesList(state,action){
            state.coursesList=action.payload
        },
        setFlattenCoursesList(state,action){
            state.flattenCoursesList=action.payload
        }

    }
})
export const{setCoursesList,setFlattenCoursesList}=coursesListSlice.actions
export const coursesListReducer=coursesListSlice.reducer