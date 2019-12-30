import { formatTimetable } from "../utils";

const citiesLoaded = (newCities) => {
  return {
    type: 'FETCH_CITIES_SUCCESS',
    payload: newCities
  }
};

const citiesRequested = () => {
  return {
    type: 'FETCH_CITIES_REQUEST'
  }
};

const citiesError = (error) => {
  return {
    type: 'FETCH_CITIES_FAILURE',
    payload: error
  }
};

const timetableRequested = () => {
  return {
    type: 'FETCH_TIMETABLE_REQUEST',
  }
};

const timetableLoaded = (cityInfo) => {
  return {
    type: 'FETCH_TIMETABLE_SUCCESS',
    payload: cityInfo
  }
};

const timetableError = (error) => {
  return {
    type: 'FETCH_TIMETABLE_FAILURE',
    payload: error
  }
};

const setAvailableTime = (timeIdx) => {
  return {
    type: 'SET_AVAILABLE_TIME',
    payload: timeIdx
  }
};

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
};

const selectDay = () => (idx) => (dispatch) => {
  dispatch({
    type: 'SELECT_DAY',
    payload: idx
  });
  dispatch(setAvailableTime(idx));
};

const selectPhone = (value) => {
  return {
    type: 'SELECT_PHONE',
    payload: value
  }
};

const selectName = () => (name) => (dispatch) => {
  dispatch({
    type: 'SELECT_NAME',
    payload: name
  });
  if (name !== '') {
    dispatch(validateName(name));
  }
};

const fetchTimetable = (recordService) => (cityId) => (dispatch) => {
  dispatch(selectCity(cityId));
  dispatch(timetableRequested());
  recordService.getCityInfo(cityId)
    .then((data) => {
      dispatch(timetableLoaded(formatTimetable(data)));
      // selectDay()(0)(dispatch);
    })
    .catch((err) => dispatch(timetableError(err)));
};

const fetchCities = (recordService) => () => (dispatch) => {
  dispatch(citiesRequested());
  recordService.getCities()
    .then((data) => {
      dispatch(citiesLoaded(data.cities));
      // dispatch(selectCity(data.cities[0]));
      fetchTimetable(recordService)(data.cities[0].id)(dispatch);
    })
    .catch((err) => dispatch(citiesError(err)));
};

const validateName = (name) => {
  return {
    type: 'VALIDATE_NAME',
    payload: name
  }
};

const validatePhone = (phone) => {
  return {
    type: 'VALIDATE_PHONE',
    payload: phone
  }
};

const validateDay = (selected) => {
  return {
    type: 'VALIDATE_DAY',
    payload: selected
  }
};

const validateTime = (selected) => {
  return {
    type: 'VALIDATE_TIME',
    payload: selected
  }
};

export {
  fetchCities,
  fetchTimetable,
  setAvailableTime,
  selectDay,
  selectTime,
  selectPhone,
  selectName,
  validateName,
  validatePhone,
  validateDay,
  validateTime,
};
