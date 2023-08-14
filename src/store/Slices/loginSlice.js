import {createSlice} from "@reduxjs/toolkit";


const loginSlice=createSlice({
    name:'login',
    initialState:{email:'',password:'',userToken:localStorage.getItem('token')},
    reducers:{
        changeEmail(state,action){
            state.email=action.payload
        },
        changePassword(state,action){
            state.password=action.payload
        },
        handleTokenChange(state,action){
            state.userToken=action.payload
        }
    }
})
export const{changeEmail,changePassword,handleTokenChange}=loginSlice.actions
export const userLoginReducer=loginSlice.reducer