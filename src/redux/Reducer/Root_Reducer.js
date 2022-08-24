import { combineReducers } from "redux";
import { authReducer } from "./SignUp_Reducer";

 

export const Root_Reducer = combineReducers({
    auth : authReducer
})