import { isEqual } from "../utils";

const updateValidationErrors = (state, action) => {
  const validationErrors = state.validationErrors;
  switch (action.type) {
    case 'VALIDATE_NAME':
      const name = action.payload === '';
      return {
        ...validationErrors,
        name,
      };
    case 'VALIDATE_PHONE':
      const phone = !isEqual(action.payload);
      return {
        ...validationErrors,
        phone,
      };
    case 'VALIDATE_DAY':
      const day = !!!action.payload;
      return {
        ...validationErrors,
        day,
      };
    case 'VALIDATE_TIME':
      const time = !!!action.payload;
      return {
        ...validationErrors,
        time,
      };
    default:
      return state.validationErrors;
  }
};

export default updateValidationErrors;
