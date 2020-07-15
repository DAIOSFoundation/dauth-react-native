import {jsonHeader, jsonUserTokenHeader, urls} from '../reqConf';
import RNFetchBlob from 'rn-fetch-blob';

// export const postLogin = async (param) => {
//   const resp = await axios.get("http://dauth.daios.net/v1/users", jsonHeader);
//   return resp.data;
// };

// export const postLogin = async param => {
//   console.log('params: ', param);
//   try {
//     const res = await axios.post(
//       'http://192.168.1.45:4000/account/web/login',
//       param,
//       jsonHeader(),
//     );
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const postCustomer = ({ params, setPostsArr, setTotal }) => {
//   console.log("params!!!!! : ", params);
//   axios
//     .post("http://192.168.1.45:4000/customer/web/searchuser", params, {
//       headers: jsonUserTokenHeader(),
//     })
//     .then((res) => {
//       console.log("데이터!!!!!! : ", res.data.users);
//       setPostsArr(res.data.users);
//       setTotal(res.data.users.length);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

export const postSignup = params => {
  console.log('params!!!!: ', params);
  RNFetchBlob.fetch(
    'POST',
    'http://192.168.1.45:4000/account/mobile/m_register',
    jsonUserTokenHeader(),
    params,
  );
};
