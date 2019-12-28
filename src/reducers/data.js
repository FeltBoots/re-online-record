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
    default:
      return state.data;
  }
};

export default updateData;
