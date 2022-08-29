import { call, takeEvery, all } from 'redux-saga/effects'
import { SignInApi, SignUpApi } from '../Common/Api/Auth_api';
import * as ActionType from '../redux/ActionType';

function* SignUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    console.log(user);
  } catch (e) {

  }
}
function* SignIn(action) {
  try {
    const user = yield call(SignInApi, action.payload);
    // console.log(user);
    console.log(user);
  } catch (e) {
    // console.log(e);
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