const isEqual = (value) => {
  return value.match(/\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/);
};

const findErrors = (validationErrors, formValues) => {
  const errors = {};
  Object.keys(validationErrors).forEach((key) => {
    errors[key] =
      validationErrors[key] === null ||
      validationErrors[key] === true ||
      formValues[key] === null;
  });
  return errors;
};

export {
  isEqual,
  findErrors,
};
