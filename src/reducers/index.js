const initialState = {
  cities: [],
  time: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
