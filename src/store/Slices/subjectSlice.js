import {createSlice} from "@reduxjs/toolkit";


const subjectSlice=createSlice({
    name:'subjects',
    initialState:{subjectIndex:null,subjectName:''},
    reducers:{
        selectSubjectIndex(state,action){
            state.subjectIndex=action.payload.id
            state.subjectName=action.payload.name
        },


    }
})
export const{selectSubjectIndex}=subjectSlice.actions
export const subjectReducer=subjectSlice.reducer