import { call, takeEvery, all } from 'redux-saga/effects'
import { SignUpApi } from '../Common/Api/Auth_api';
import * as ActionType from '../ActionType';

function* SignUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    console.log(user);
  } catch (e) {

  }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, SignUp);
}

export function* signUpSaga() {
  yield all([
    watchSignUp()
  ])
}