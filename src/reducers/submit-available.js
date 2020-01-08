import { findErrors } from "../utils";

const isSubmitAvailable = (validationErrors, formValues) => {
  return Object.values(findErrors(validationErrors, formValues)).filter((e) => e === true).length === 0;
};

const updateSubmitAvailable = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SUBMIT_AVAILABLE':
      return isSubmitAvailable(state.validationErrors, state.formValues);
    default:
      return state.submitAvailable;
  }
};

export default updateSubmitAvailable;
