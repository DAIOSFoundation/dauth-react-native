import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../libs/createRequestSaga';

export const CHANGE_ACCOUNT = 'signup/CHANGE_ACCOUNT';
export const change_account = createAction(CHANGE_ACCOUNT);

export const CHANGE_PASSWORD = 'signup/CHANGE_PASSWORD';
export const change_password = createAction(CHANGE_PASSWORD);

export const CHANGE_NAME = 'signup/CHANGE_NAME';
export const change_name = createAction(CHANGE_NAME);

export const CHANGE_PHONE_NUMBER = 'signup/CHANGE_PHONE_NUMBER';
export const change_phone_number = createAction(CHANGE_PHONE_NUMBER);

export const CHANGE_BIRTHDAY = 'signup/CHANGE_BIRTHDAY';
export const change_birthday = createAction(CHANGE_BIRTHDAY);

export const CHANGE_ADDRESS = 'signup/CHANGE_ADDRESS';
export const change_address = createAction(CHANGE_ADDRESS);

//로그인 버튼 클릭
export const [
  POST_SIGNUP,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
] = createRequestActionTypes('signup/POST_SIGNUP');
export const post_signup = createAction(POST_SIGNUP);
