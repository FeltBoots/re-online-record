import React from 'react';
import Select from "../select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectDay, selectTime } from "../../actions";
import Row from "../row";

const TimePickerContainer = ({ days, availableTime, selectDay, selectTime }) => {
  if (!days || !availableTime) {
    return null;
  }

  return (
    <Row>
      <Select
        items={days}
        value={'id'}
        name={'day'}
        defaultValue={'День'}
        onChange={selectDay} />
      <Select
        items={availableTime}
        value={'id'}
        name={'time'}
        defaultValue={'Время'}
        onChange={selectTime} />
    </Row>
  )
};

const mapStateToProps = ({ data: { timetable: { days, availableTime } } }) => {
  return { days, availableTime };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectDay: selectDay(),
    selectTime: selectTime(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TimePickerContainer);
