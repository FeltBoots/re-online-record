import updateData from "./data";
import updateFormValues from "./form-values";
import updateValidationErrors from "./form-validation";

const initialState = {
  data: {
    cities: [],
    timetable: {
      days: [],
      time: [],
      availableTime: [],
    },
    loading: null,
    error: null,
  },
  formValues: {
    city: null,
    day: null,
    time: null,
    name: null,
    phone: null,
  },
  validationErrors: {
    dayError: null,
    timeError: null,
    nameError: null,
    phoneError: null,
  },
};

const reducer = (state = initialState, action) => {
  return {
    data: updateData(state, action),
    formValues: updateFormValues(state, action),
    validationErrors: updateValidationErrors(state, action),
  }
};

export default reducer;
