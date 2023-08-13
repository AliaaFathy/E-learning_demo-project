import {createSlice} from "@reduxjs/toolkit";


const certificateSlice=createSlice({
    name:'certificates',
    initialState:{certificateIndex:null,certificateName:''},
    reducers:{
        selectCertificateIndex(state,action){
            state.certificateIndex=action.payload.id
            state.certificateName=action.payload.name

        }

    }
})
export const{selectCertificateIndex}=certificateSlice.actions
export const certificateReducer=certificateSlice.reducer