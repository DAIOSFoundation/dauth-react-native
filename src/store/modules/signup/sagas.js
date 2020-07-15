import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../libs/createRequestSaga';
import * as signupAPI from '../../../libs/api/signup';
import * as SIGNUP from './actions';

const postSignupSaga = createRequestSaga(
  SIGNUP.POST_SIGNUP,
<<<<<<< HEAD
  signupAPI.postSignupSaga,
=======
  signupAPI.postSignup,
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
);

export default function* rootSaga() {
  yield [yield takeLatest(SIGNUP.POST_SIGNUP, postSignupSaga)];
}
