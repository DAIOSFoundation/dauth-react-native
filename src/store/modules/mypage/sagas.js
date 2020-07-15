import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../libs/createRequestSaga';
import * as mypageAPI from '../../../libs/api/mypage';
import * as MYPAGE from './actions';

const getMypageSaga = createRequestSaga(MYPAGE.GET_MYPAGE, mypageAPI.getMypage);

export default function* rootSaga() {
  yield [yield takeLatest(MYPAGE.GET_MYPAGE, getMypageSaga)];
}
