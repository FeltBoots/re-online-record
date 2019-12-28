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

const selectCity = (city) => {
  return {
    type: 'SELECT_CITY',
    payload: city
  }
};

const fetchTimetable = (recordService) => (cityId) => (dispatch) => {
  dispatch(timetableRequested());
  recordService.getCityInfo(cityId)
    .then((data) => dispatch(timetableLoaded(formatTimetable(data))))
    .catch((err) => dispatch(timetableError(err)));
};

const fetchCities = (recordService) => () => (dispatch) => {
  dispatch(citiesRequested());
  recordService.getCities()
    .then((data) => {
      dispatch(citiesLoaded(data));
      dispatch(selectCity(data.cities[0]));
      fetchTimetable(recordService)(data.cities[0].id)(dispatch);
    })
    .catch((err) => dispatch(citiesError(err)));
};

export {
  fetchCities,
  fetchTimetable,
};
