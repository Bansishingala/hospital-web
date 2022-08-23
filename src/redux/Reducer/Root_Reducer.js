import { combineReducers } from "redux";
import { authReducer } from "./Login_Reducer";

 

export const Root_Reducer = combineReducers({
    auth : authReducer
})