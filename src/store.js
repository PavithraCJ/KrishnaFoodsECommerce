import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userReducer";
import authReducer from "./Reducers/Auth";
export const store = configureStore({
    reducer:{
        user: userReducer,
        auth: authReducer, 
    }
})
