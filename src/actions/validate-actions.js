const updateSubmitAvailable = () => ({ type: 'UPDATE_SUBMIT_AVAILABLE' });

const validateName = () => (name) => (dispatch) => {
  dispatch({
    type: 'VALIDATE_NAME',
    payload: name
  });
  dispatch(updateSubmitAvailable());
};

const validatePhone = () => (phone) => (dispatch) => {
  dispatch({
    type: 'VALIDATE_PHONE',
    payload: phone
  });
  dispatch(updateSubmitAvailable());
};

const validateDay = () => (selected) => (dispatch) => {
  dispatch({
    type: 'VALIDATE_DAY',
    payload: selected
  });
  dispatch(updateSubmitAvailable());
};

const validateTime = () => (selected) => (dispatch) => {
  dispatch({
    type: 'VALIDATE_TIME',
    payload: selected
  });
  dispatch(updateSubmitAvailable());
};

export {
  validateDay,
  validateName,
  validatePhone,
  validateTime,
};
