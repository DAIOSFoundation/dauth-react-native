import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as SIGNUP from './actions';

const initialState = {
  account: '',
  password: '',
  name: '',
  phone_number: '',
  birthday: '',
  address: '',
  SuccessMsg: '',
  FailedMsg: '',
  jwt: '',
};

<<<<<<< HEAD
const customer = handleActions(
=======
const signup = handleActions(
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
  {
    [SIGNUP.CHANGE_ACCOUNT]: (state, action) => {
      return produce(state, draft => {
        draft.account = action.payload;
      });
    },
    [SIGNUP.CHANGE_PASSWORD]: (state, action) => {
      return produce(state, draft => {
        draft.password = action.payload;
      });
    },
    [SIGNUP.CHANGE_NAME]: (state, action) => {
      return produce(state, draft => {
        draft.name = action.payload;
      });
    },
    [SIGNUP.CHANGE_PHONE_NUMBER]: (state, action) => {
      return produce(state, draft => {
        draft.phone_number = action.payload;
      });
    },
    [SIGNUP.CHANGE_BIRTHDAY]: (state, action) => {
      return produce(state, draft => {
        draft.birthday = action.payload;
      });
    },
    [SIGNUP.CHANGE_ADDRESS]: (state, action) => {
      return produce(state, draft => {
        draft.address = action.payload;
      });
    },
    [SIGNUP.POST_SIGNUP_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        console.log('POST_SIGNUP_SUCCESS => ', action.payload);
        draft.jwt = action.payload.Authentication;
      });
    },
    [SIGNUP.POST_SIGNUP_FAILED]: (state, action) => {
      return produce(state, draft => {
        console.log('POST_SIGNUP_FAILED => ', action.payload.data);
        draft.FailedMsg = '검색 실패...';
      });
    },
  },
  initialState,
);
<<<<<<< HEAD
export default customer;
=======
export default signup;
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
