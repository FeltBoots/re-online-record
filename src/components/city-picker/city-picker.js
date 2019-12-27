import React, {Component, Fragment} from "react";
import Select from "../select";
import { bindActionCreators } from "redux";
import { fetchCities, fetchCityInfo } from "../../actions";
import { compose } from "../../utils";
import withRecordService from "../hoc";
import { connect } from "react-redux";

class CityPickerContainer extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  pickCity = (cityId) => {
    fetchCityInfo(cityId);
  };

  render() {
    const { cities, time } = this.props;

    return (
      <Fragment>
        <Select
          items={cities}
          value={'id'}
          name={'name'}
          />
        <div>
          <p>ул. Малая 9</p>
          <p>79990010101</p>
          <p>Стоимость услуги 1000р</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ cities, time }) => {
  return { cities, time };
};

const mapDispatchToProps = (dispatch, { recordService }) => {
  return bindActionCreators({
    fetchCities: fetchCities(recordService),
    fetchCityInfo: fetchCityInfo(recordService),
  }, dispatch)
};

export default compose(
  withRecordService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityPickerContainer);
