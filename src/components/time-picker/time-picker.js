import React, { Fragment } from 'react';
import Select from "../select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectDay, selectTime, validateSelect } from "../../actions";
import Row from "../row";
import ValidationError from "../validation-error";

const TimePickerContainer = (props) => {
  const {
    days,
    availableTime,
    selectDay,
    selectTime,
    validateSelect,
    dayError,
    timeError,
  } = props;

  const disabled = availableTime ? 0 : 1;

  return (
    <Fragment>
      <Row>
        <Select
          items={days}
          value={'id'}
          name={'day'}
          defaultValue={'День'}
          onBlur={validateSelect}
          onChange={selectDay} />
        <Select
          items={availableTime}
          value={'id'}
          name={'time'}
          defaultValue={'Время'}
          onBlur={validateSelect}
          onChange={selectTime}
          disabled={disabled} />
      </Row>
      <ValidationError message={'Пожалуйста, выберите дату'} show={dayError}/>
      <ValidationError message={'Пожалуйста, выберите время'} show={timeError}/>
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  const { data: { timetable: { days, availableTime } } } = state;
  const { validationErrors: { dayError, timeError } } = state;
  return { days, availableTime, dayError, timeError };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectDay: selectDay(),
    selectTime: selectTime(),
    validateSelect,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TimePickerContainer);
