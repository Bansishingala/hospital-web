import { combineReducers } from "redux";
import { AlertReducer } from "./Alert_Reducer";
import { authReducer } from "./SignUp_Reducer";

 

export const Root_Reducer = combineReducers({
    auth : authReducer,
    alert:AlertReducer
})