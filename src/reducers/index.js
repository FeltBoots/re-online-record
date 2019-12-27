import updateData from "./data";
import updateFormValues from "./form-values";

const initialState = {
  data: {
    cities: [],
    time: [],
    loading: true,
    error: null,
  },
  formValues: {
    city: null,
    time: null,
    name: null,
    phone: null,
  },
};

const reducer = (state = initialState, action) => {
  return {
    data: updateData(state, action),
    formValues: updateFormValues(state, action),
  }
};

export default reducer;
