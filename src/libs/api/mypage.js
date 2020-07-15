// import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import {jsonHeader, jsonUserTokenHeader, urls} from '../reqConf';

export const getMypage = () => {
  console.log('ddddd');
  RNFetchBlob.fetch(
    'GET',
    'http://192.168.1.45:4000/account/mobile/m_profile',
    jsonUserTokenHeader(),
  )
    .then(res => res.json())
    .then(res => console.log('res: ', res));
};
