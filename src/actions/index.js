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

const cityInfoRequested = () => {
  return {
    type: 'FETCH_CITY_INFO_REQUEST',
  }
};

const cityInfoLoaded = (cityInfo) => {
  return {
    type: 'FETCH_CITY_INFO_SUCCESS',
    payload: cityInfo
  }
};

const cityInfoError = (error) => {
  return {
    type: 'FETCH_CITY_INFO_FAILURE',
    payload: error
  }
};

const selectCity = (city) => {
  return {
    type: 'SELECT_CITY',
    payload: city
  }
};

const fetchCityInfo = (recordService) => (cityId) => (dispatch) => {
  dispatch(cityInfoRequested());
  recordService.getCityInfo(cityId)
    .then((data) => dispatch(cityInfoLoaded(data)))
    .catch((err) => dispatch(cityInfoError(err)));
};

const fetchCities = (recordService) => () => (dispatch) => {
  dispatch(citiesRequested());
  recordService.getCities()
    .then((data) => {
      dispatch(citiesLoaded(data));
      dispatch(selectCity(data.cities[0]));
      fetchCityInfo(recordService)(data.cities[0].id)(dispatch);
    })
    .catch((err) => dispatch(citiesError(err)));
};

export {
  fetchCities,
  fetchCityInfo,
};
