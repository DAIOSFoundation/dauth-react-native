import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as MYPAGE from './actions';

const initialState = {
  name: '',
  account: '',
  phone_number: '',
  birthday: '',
  address: '',
  loginSuccessMsg: '',
  loginFailedMsg: '',
};

const mypage = handleActions(
  {
    [MYPAGE.GET_NAME]: (state, action) => {
      return produce(state, draft => {
        draft.name = action.payload;
      });
    },
    [MYPAGE.GET_ACCOUNT]: (state, action) => {
      return produce(state, draft => {
        draft.account = action.payload;
      });
    },
    [MYPAGE.GET_PHONE_NUMBER]: (state, action) => {
      return produce(state, draft => {
        draft.phone_number = action.payload;
      });
    },
    [MYPAGE.GET_BIRTHDAY]: (state, action) => {
      return produce(state, draft => {
        draft.birthday = action.payload;
      });
    },
    [MYPAGE.GET_ADDRESS]: (state, action) => {
      return produce(state, draft => {
        draft.address = action.payload;
      });
    },
    [MYPAGE.GET_MYPAGE]: (state, action) => {
      return produce(state, draft => {
        draft.name = action.name;
        draft.account = action.payload;
        draft.phone_number = action.payload;
        draft.birthday = action.payload;
        draft.address = action.payload;
      });
    },
    [MYPAGE.GET_MYPAGE_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        console.log('POST_LOGIN_SUCCESS => ', action.payload);
        draft.loginSuccessMsg = 'postLoginSuccess';
      });
    },
    [MYPAGE.GET_MYPAGE_FAILED]: (state, action) => {
      return produce(state, draft => {
        console.log('POST_LOGIN_FAILED => ', action.payload.data);
        draft.loginFailedMsg = '실패...';
      });
    },
  },
  initialState,
);
export default mypage;
