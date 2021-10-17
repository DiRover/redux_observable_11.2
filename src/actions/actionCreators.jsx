import {
  LOAD_SERVICES_LIST,
  LOAD_SUCCESS,
  LOAD_DESCRIPTION,
  LOAD_DESCRIPTION_SUCCESS,
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
    payload: { list }
  }
}

export const loadDescription = (id) => {
  return {
    type: LOAD_DESCRIPTION,
    payload: { id }
  }
}

export const loadDescriptionSuccess = (respons) => {
  console.log(respons);
  return {
    type: LOAD_DESCRIPTION_SUCCESS,
    payload: respons
  }
}