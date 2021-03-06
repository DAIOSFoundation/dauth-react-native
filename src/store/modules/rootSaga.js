// import UserSagas from './user/sagas';
// import SignUpSagas from './signup/sagas';
import {all} from 'redux-saga/effects';
import SignupSagas from './signup/sagas';
import MypageSagas from './mypage/sagas';
import LoginSagas from './login/sagas';

// import ProductOrderHistorySaga from "./productOrderHistory/sagas";

export default function* rootSaga() {
  yield all([
    SignupSagas(),
    MypageSagas(),
    LoginSagas(),
  ]);
}
