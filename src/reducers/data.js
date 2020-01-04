const updateData = (state, action) => {
  switch (action.type) {
    case 'FETCH_CITIES_REQUEST':
      return {
        cities: [],
        timetable: {},
        loading: true,
        error: null,
      };
    case 'FETCH_CITIES_SUCCESS':
      return {
        cities: action.payload,
        timetable: {},
        loading: false,
        error: null,
      };
    case 'FETCH_CITIES_FAILURE':
      return {
        cities: [],
        timetable: {},
        loading: false,
        error: action.payload,
      };
    case 'FETCH_TIMETABLE_REQUEST':
      return {
        cities: state.data.cities,
        timetable: {},
        loading: true,
        error: null,
      };
    case 'FETCH_TIMETABLE_FAILURE':
      return {
        cities: state.data.cities,
        timetable: {},
        loading: false,
        error: action.payload,
      };
    case 'FETCH_TIMETABLE_SUCCESS':
      const { days, time } = action.payload;
      return {
        cities: state.data.cities,
        timetable: { days, time },
        loading: false,
        error: null,
      };
    case 'SET_AVAILABLE_TIME':
      const availableTime = state.data.timetable.time[action.payload];
      return {
        cities: state.data.cities,
        timetable: { ...state.data.timetable, availableTime },
        loading: false,
        error: null,
      };
    case 'SUBMIT_REQUEST':
      return {
        ...state.data,
        loading: true,
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state.data,
        loading: false,
      };
    case 'SUBMIT_FAILURE':
      return {
        ...state.data,
        loading: false,
      };
    default:
      return state.data;
  }
};

export default updateData;
