import { call, takeEvery, all } from 'redux-saga/effects'
import { SignUpApi } from '../Common/Api/Auth_api';
import * as ActionType from '../ActionType';

function* SignUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
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