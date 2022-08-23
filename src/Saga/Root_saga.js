import { signUpSaga } from "./Auth_saga";
import { all } from 'redux-saga/effects'

export function* rootSaga(){
    yield all([
        signUpSaga()
    ])
}