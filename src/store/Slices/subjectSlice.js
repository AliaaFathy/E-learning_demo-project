import {createSlice} from "@reduxjs/toolkit";


const subjectSlice=createSlice({
    name:'subjects',
    initialState:{subjectIndex:null,subjectName:'',categorized:false},
    reducers:{
        selectSubjectIndex(state,action){
            state.subjectIndex=action.payload.id
            state.subjectName=action.payload.name
        },
        //As subject_id is null and i want to know if the course is from Top category or is from popular list
        /*if categorized is true  then it will be from category is false
        then it from popular list so subject name will be 'STEAM' as it set as subject for popular list*/
        isCategorized(state,action){
            state.categorized=action.payload
        }

    }
})
export const{selectSubjectIndex}=subjectSlice.actions
export const subjectReducer=subjectSlice.reducer