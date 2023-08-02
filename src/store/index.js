import {configureStore} from "@reduxjs/toolkit";
import {userLoginReducer} from "./Slices/loginSlice";
import {changeEmail,changePassword} from "./Slices/loginSlice";
import {loginApi} from "./APIs/LoginApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const store=configureStore({
    reducer:{
        login:userLoginReducer,
        [loginApi.reducerPath]:loginApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(loginApi.middleware)
    }
})
setupListeners(store.dispatch);

export {store,changeEmail,changePassword}
export {useLoginMutation} from './APIs/LoginApi'