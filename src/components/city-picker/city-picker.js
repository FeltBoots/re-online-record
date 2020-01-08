import React, { Component } from "react";
import Select from "../select";
import { bindActionCreators } from "redux";
import { fetchCities, fetchTimetable } from "../../actions";
import { compose } from "../../utils";
import { withRecordService } from "../hoc";
import { connect } from "react-redux";

class CityPickerContainer extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const {
      cities,
      fetchTimetable,
    } = this.props;

    return (
      <Select
        items={cities}
        value={'id'}
        name={'name'}
        onChange={fetchTimetable} />
    );
  }
}

const mapStateToProps = ({ data: { cities } }) => {
  return { cities };
};

const mapDispatchToProps = (dispatch, { recordService }) => {
  return bindActionCreators({
    fetchCities: fetchCities(recordService),
    fetchTimetable: fetchTimetable(recordService),
  }, dispatch)
};

export default compose(
  withRecordService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityPickerContainer);
