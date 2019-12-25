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

const fetchCities = (recordService) => () => (dispatch) => {
  dispatch(citiesRequested());
  recordService.getCities()
    .then((data) => dispatch(citiesLoaded(data)))
    .catch((err) => dispatch(citiesError(err)));
};

export {
  fetchCities,
};
