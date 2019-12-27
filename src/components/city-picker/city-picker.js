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

  render() {
    const {
      cities,
      city,
      fetchCityInfo,
    } = this.props;

    return (
      <Fragment>
        <Select
          items={cities}
          value={'id'}
          name={'name'}
          onChange={fetchCityInfo} />
        {
          city ?
            <div>
              <p>{city.address}</p>
              <p>{city.phones}</p>
              <p>{city.price}</p>
            </div> : null
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ data: { cities }, formValues: { city } }) => {
  return { cities, city };
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
