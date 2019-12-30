import React, { Fragment } from "react";
import { connect } from 'react-redux';
import withRecordService from "../hoc";
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import SubmitButton from "../submit-button";
import PrivacyPolicy from "../privacy-policy";

import CityPicker from "../city-picker";
import TimePicker from "../time-picker";
import NameInput from "../name-input";
import PhoneInput from "../phone-input";
import CityInfo from "../city-info";

import { compose } from "../../utils";

import './record-form.css';

const RecordFormContainer = ({ loading, error }) => {

  if (error) {
    return <ErrorIndicator />
  }

  const loadingEffect = loading ? 'loading-effect' : null;

  return (
    <Fragment>
      <Header />
      <form className={`record-form ${loadingEffect}`}>
        <CityPicker />
        <TimePicker />
        <CityInfo   />
        <PhoneInput />
        <NameInput  />
        <SubmitButton />
        <PrivacyPolicy />
      </form>
    </Fragment>
  );
};

const mapStateToProps = ({ data: { loading, error  } }) => {
  return { loading, error };
};

export default compose(
  withRecordService(),
  connect(mapStateToProps, null)
)(RecordFormContainer);
