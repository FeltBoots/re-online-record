const updateData = (state, action) => {
  switch (action.type) {
    case 'FETCH_CITIES_REQUEST':
      return {
        cities: [],
        time: [],
        loading: true,
        error: null,
      };
    case 'FETCH_CITIES_SUCCESS':
      return {
        cities: action.payload,
        time: [],
        loading: false,
        error: null,
      };
    case 'FETCH_CITIES_FAILURE':
      return {
        cities: [],
        time: [],
        loading: false,
        error: action.payload,
      };
    case 'FETCH_CITY_INFO_REQUEST':
      return {
        cities: state.data.cities,
        time: [],
        loading: true,
        error: null,
      };
    case 'FETCH_CITY_INFO_FAILURE':
      return {
        cities: state.data.cities,
        time: [],
        loading: false,
        error: action.payload,
      };
    case 'FETCH_CITY_INFO_SUCCESS':
      return {
        cities: state.data.cities,
        time: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state.data;
  }
};

export default updateData;
