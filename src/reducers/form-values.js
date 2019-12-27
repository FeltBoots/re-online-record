const updateFormValues = (state, action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      return {
        city: action.payload,
      };
    default:
      return state.formValues;
  }
};

export default updateFormValues;
