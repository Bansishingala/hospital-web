
import { all } from 'redux-saga/effects'
import { signUpSaga } from './Auth_saga'

export function* rootSaga(){
    yield all([
        signUpSaga()
    ])
}