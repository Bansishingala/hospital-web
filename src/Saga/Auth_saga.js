import { call, takeEvery, all , put } from 'redux-saga/effects'
import { SignInApi, SignUpApi } from '../Common/Api/Auth_api';
import { setAlert } from '../redux/Action/Alert_action';
import * as ActionType from '../redux/ActionType';

function* SignUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}


function* SignIn(action) {
  try {
    console.log(action.payload);
    const user = yield call(SignInApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, SignUp);
}

function* WatchSignIn() {
  yield takeEvery(ActionType.SIGN_IN, SignIn);
}

export function* signUpSaga() {
  yield all([
    watchSignUp(),
    WatchSignIn()
  ])
}