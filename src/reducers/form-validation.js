const isEqual = (value) => {
  return value.match(/\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/);
};

const updateValidationErrors = (state, action) => {
  const formValues = state.validationErrors;
  switch (action.type) {
    case 'VALIDATE_NAME':
      const nameError = action.payload === '';
      return {
        ...formValues,
        nameError,
      };
    case 'VALIDATE_PHONE':
      const phoneError = !isEqual(action.payload);
      return {
        ...formValues,
        phoneError,
      };
    default:
      return state.validationErrors;
  }
};

export default updateValidationErrors;
