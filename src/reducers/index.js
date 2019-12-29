import updateData from "./data";
import updateFormValues from "./form-values";

const initialState = {
  data: {
    cities: [],
    timetable: {
      days: [],
      time: [],
      availableTime: [],
    },
    loading: true,
    error: null,
  },
  formValues: {
    city: null,
    day: null,
    time: null,
    // name: null,
    // phone: null,
  },
};

const reducer = (state = initialState, action) => {
  return {
    data: updateData(state, action),
    formValues: updateFormValues(state, action),
  }
};

export default reducer;
