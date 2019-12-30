const updateValidationErrors = (state, action) => {
  const formValues = state.validationErrors;
  switch (action.type) {
    case 'VALIDATE_NAME':
      const nameError = action.payload === '';
      return {
        ...formValues,
        nameError,
      };
    default:
      return state.validationErrors;
  }
};

export default updateValidationErrors;
