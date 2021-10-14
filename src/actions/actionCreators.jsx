import {
  LOAD_SERVICES_LIST,
  LOAD_SUCCESS,
} from './actionTypes';

export const loadServicesList = () => {
  return {
    type: LOAD_SERVICES_LIST,
  }
}

export const loadSuccess = (respons) => {
  // console.log('list');
  // console.log(respons);
  // console.log('list');
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: {list}
  }
}
