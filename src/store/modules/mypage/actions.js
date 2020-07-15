import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../libs/createRequestSaga';

// export const GET_ID = 'mypage/GET_ID';
// export const get_id = createAction(GET_ID);

export const GET_NAME = 'mypage/GET_NAME';
export const get_name = createAction(GET_NAME);

export const GET_ACCOUNT = 'mypage/GET_ACCOUNT';
export const get_account = createAction(GET_ACCOUNT);

export const GET_PHONE_NUMBER = 'mypage/GET_PHONE_NUMBER';
export const get_phone_number = createAction(GET_PHONE_NUMBER);

export const GET_BIRTHDAY = 'mypage/GET_BIRTHDAY';
export const get_birthday = createAction(GET_BIRTHDAY);

export const GET_ADDRESS = 'mypage/GET_ADDRESS';
export const get_address = createAction(GET_ADDRESS);

export const [
  GET_MYPAGE,
  GET_MYPAGE_SUCCESS,
  GET_MYPAGE_FAIED,
] = createRequestActionTypes('mypage/GET_MYPAGE');
export const get_mypage = createAction(GET_MYPAGE);
