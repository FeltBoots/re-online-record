import React, { Fragment } from 'react';
import Select from "../select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectDay, selectTime, validateDay, validateTime } from "../../actions";
import Row from "../row";
import ValidationError from "../validation-error";

const TimePickerContainer = (props) => {
  const {
    days,
    availableTime,
    selectDay,
    selectTime,
    validateDay,
    validateTime,
    day: dayError,
    time: timeError,
  } = props;

  const disabled = availableTime ? 0 : 1;
  const dayClass = dayError ? 'error' : null;
  const timeClass = timeError ? 'error' : null;

  return (
    <Fragment>
      <Row>
        <Select
          items={days}
          value={'id'}
          name={'day'}
          defaultValue={'День'}
          onBlur={validateDay}
          onChange={selectDay}
          clazz={dayClass} />
        <Select
          items={availableTime}
          value={'id'}
          name={'time'}
          defaultValue={'Время'}
          onBlur={validateTime}
          onChange={selectTime}
          disabled={disabled}
          clazz={timeClass} />
      </Row>
      <ValidationError message={'Пожалуйста, выберите дату'} show={dayError}/>
      <ValidationError message={'Пожалуйста, выберите время'} show={timeError}/>
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  const {
    data: {
      timetable: {
        days,
        availableTime
      }
    },
    validationErrors: {
      day,
      time
    }
  } = state;
  return { days, availableTime, day, time };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectDay: selectDay(),
    selectTime: selectTime(),
    validateDay: validateDay(),
    validateTime: validateTime(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TimePickerContainer);
