import * as ActionType from '../ActionType';


export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP , payload : data});
}   

export const SignInAction = (data) => (dispatch) => {
    dispatch({type:ActionType.SIGN_IN , payload:data});
}