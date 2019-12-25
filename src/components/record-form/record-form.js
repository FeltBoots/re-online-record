import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import withRecordService from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import { compose } from "../../utils";
import { fetchCities } from "../../actions";

class RecordFormContainer extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { cities, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    console.log(cities);

    return (
      <form>
        <input type="text"/>
      </form>
    );
  }
}

const mapStateToProps = ({ cities, loading, error }) => {
  return { cities, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchCities: fetchCities(bookstoreService),
  }, dispatch)
};

export default compose(
  withRecordService(),
  connect(mapStateToProps, mapDispatchToProps)
)(RecordFormContainer);
