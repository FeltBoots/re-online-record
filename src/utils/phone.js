const isEqual = (value) => {
  return value.match(/\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/);
};

export default isEqual;
