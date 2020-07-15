import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../libs/createRequestSaga';
import * as signupAPI from '../../../libs/api/signup';
import * as SIGNUP from './actions';

const postSignupSaga = createRequestSaga(
  SIGNUP.POST_SIGNUP,
  signupAPI.postSignupSaga,
);

export default function* rootSaga() {
  yield [yield takeLatest(SIGNUP.POST_SIGNUP, postSignupSaga)];
}
