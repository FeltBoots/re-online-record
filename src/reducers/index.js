const initialState = {
  cities: [],
  time: [],
  loading: true,
  error: null,
  selectedCity: null,
  selectedTime: null,
  writtenName: null,
  writtenPhone: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CITIES_REQUEST':
      return {
        cities: [],
        time: [],
        loading: true,
        error: null,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'FETCH_CITIES_SUCCESS':
      return {
        cities: action.payload,
        time: [],
        loading: false,
        error: null,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'FETCH_CITIES_FAILURE':
      return {
        cities: [],
        time: [],
        loading: false,
        error: action.payload,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'FETCH_CITY_INFO_REQUEST':
      return {
        ...state,
        time: [],
        loading: true,
        error: null,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'FETCH_CITY_INFO_FAILURE':
      return {
        ...state,
        time: [],
        loading: false,
        error: action.payload,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'FETCH_CITY_INFO_SUCCESS':
      return {
        ...state,
        time: action.payload,
        loading: false,
        error: null,
        selectedCity: null,
        selectedTime: null,
        writtenName: null,
        writtenPhone: null,
      };
    case 'SELECT_CITY':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
