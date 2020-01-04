const findErrors = (validationErrors) => {
  const errors = {};
  Object.keys(validationErrors).forEach((key) => {
    errors[key] = validationErrors[key] === null || validationErrors[key] === true;
  });
  return errors;
};

const isSubmitAvailable = (formValues) => {
  return Object.values(findErrors(formValues)).filter((e) => e === true).length === 0;
};

const updateSubmitAvailable = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SUBMIT_AVAILABLE':
      return isSubmitAvailable(state.validationErrors);
    default:
      return state.submitAvailable;
  }
};

export default updateSubmitAvailable;
