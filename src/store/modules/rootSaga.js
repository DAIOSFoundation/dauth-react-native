// import UserSagas from './user/sagas';
// import SignUpSagas from './signup/sagas';
import {all} from 'redux-saga/effects';
import SignupSagas from './signup/sagas';
<<<<<<< HEAD
import MypageSagas from './mypage/sagas';
=======
import LoginSagas from './login/sagas';
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
// import ProductOrderHistorySaga from "./productOrderHistory/sagas";

export default function* rootSaga() {
  yield all([
    SignupSagas(),
<<<<<<< HEAD
    MypageSagas(),
=======
    LoginSagas(),
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
    // MemberSagas(),
  ]);
}
