import { idText } from 'typescript';
import {
  LOAD_SERVICES_LIST,
  LOAD_SUCCESS,
  LOAD_DESCRIPTION,
} from './actionTypes';

export const loadServicesList = () => {
  return {
    type: LOAD_SERVICES_LIST,
  }
}

export const loadSuccess = (respons) => {
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: {list}
  }
}

export const loadDescription = (id) => {
  return {
    type: LOAD_DESCRIPTION,
    payload: {id}
  }
}

export const loadDescriptionSuccess = (respons) => {
  console.log(respons);
  return {
    type: LOAD_DESCRIPTION,
    payload: respons
  }
}