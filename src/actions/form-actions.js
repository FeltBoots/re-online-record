import {
  validateName,
  validateTime,
  validatePhone,
  setAvailableTime, validateDay,
} from "./index";

import { isEqual } from '../utils';

const selectCity = (cityId) => {
  return {
    type: 'SELECT_CITY',
    payload: cityId
  }
};

const selectTime = () => (idx) => (dispatch) => {
  dispatch({
    type: 'SELECT_TIME',
    payload: idx,
  });
  validateTime()(idx)(dispatch);
};

const selectDay = () => (idx) => (dispatch) => {
  dispatch({
    type: 'SELECT_DAY',
    payload: idx
  });
  dispatch(setAvailableTime(idx));
  validateDay()(idx)(dispatch);
};

const selectPhone = () => (value) => (dispatch) => {
  dispatch({
    type: 'SELECT_PHONE',
    payload: value
  });
  if (isEqual(value)) {
    validatePhone()(value)(dispatch);
  }
};

const selectName = () => (name) => (dispatch) => {
  dispatch({
    type: 'SELECT_NAME',
    payload: name
  });
  if (name !== '') {
    validateName()(name)(dispatch);
  }
};

export {
  selectCity,
  selectTime,
  selectDay,
  selectName,
  selectPhone,
};
