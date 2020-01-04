import updateData from "./data";
import updateFormValues from "./form-values";
import updateValidationErrors from "./form-validation";
import updateSubmitAvailable from "./submit-available";

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
    day: null,
    time: null,
    name: null,
    phone: null,
  },
  submitAvailable: null,
};

const reducer = (state = initialState, action) => {
  return {
    data: updateData(state, action),
    formValues: updateFormValues(state, action),
    validationErrors: updateValidationErrors(state, action),
    submitAvailable: updateSubmitAvailable(state, action),
  }
};

export default reducer;
