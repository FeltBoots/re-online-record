import {
  fetchCities,
  fetchTimetable,
  setAvailableTime,
  submitDataRequest,
} from './data-actions';

import {
  selectCity,
  selectTime,
  selectDay,
  selectName,
  selectPhone,
} from './form-actions';

import {
  validateDay,
  validateName,
  validatePhone,
  validateTime,
  validateBeforeSubmit,
} from './validate-actions';

export {
  fetchCities,
  fetchTimetable,
  setAvailableTime,
  selectCity,
  selectTime,
  selectDay,
  selectName,
  selectPhone,
  submitDataRequest,
  validateDay,
  validateName,
  validatePhone,
  validateTime,
  validateBeforeSubmit,
};
