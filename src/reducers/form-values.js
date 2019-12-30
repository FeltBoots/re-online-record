const updateFormValues = (state, action) => {
  const formValues = state.formValues;
  switch (action.type) {
    case 'SELECT_CITY':
      const city = state.data.cities.find(({id}) => id === action.payload);
      return {
        city,
        day: null,
        time: null,
      };
    case 'SELECT_DAY':
      const day = state.data.timetable.days[action.payload];
      return {
        ...formValues,
        day,
        time: null,
      };
    case 'SELECT_TIME':
      const dayId = formValues.day.id;
      const time = state.data.timetable.time[dayId].find(({id}) => {
        return id === parseInt(action.payload);
      });
      return {
        ...formValues,
        time,
      };
    case 'SELECT_PHONE':
      const phone = action.payload;
      return {
        ...formValues,
        phone,
      };
    case 'SELECT_NAME':
      const name = action.payload;
      return {
        ...formValues,
        name,
      };
    default:
      return state.formValues;
  }
};

export default updateFormValues;
