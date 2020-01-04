const isEqual = (value) => {
  return value.match(/\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/);
};

const findErrors = (validationErrors) => {
  const errors = {};
  Object.keys(validationErrors).forEach((key) => {
    errors[key] = validationErrors[key] === null || validationErrors[key] === true;
  });
  return errors;
};

export {
  isEqual,
  findErrors,
};
