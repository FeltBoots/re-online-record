import React, { Fragment } from "react";
import { connect } from 'react-redux';
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import SubmitButton from "../submit-button";
import PrivacyPolicy from "../privacy-policy";
import FormItem from "../form-item";
import { submitDataRequest } from "../../actions";
import { bindActionCreators } from "redux";

import CityPicker from "../city-picker";
import TimePicker from "../time-picker";
import NameInput from "../name-input";
import PhoneInput from "../phone-input";
import CityInfo from "../city-info";

import './record-form.css';

const RecordFormContainer = ({ loading, error, submitAvailable, formValues, submitDataRequest }) => {

  if (error) {
    return <ErrorIndicator />
  }

  const loadingEffect = loading ? 'loading-effect' : null;

  return (
    <Fragment>
      <Header />
      <form
        className={`record-form ${loadingEffect}`}
        onSubmit={(e) => {
          e.preventDefault();
          if (submitAvailable) {
            submitDataRequest(formValues);
          }
        }}>
        <FormItem>
          <CityPicker />
        </FormItem>
        <FormItem>
          <TimePicker />
        </FormItem>
        <FormItem>
          <CityInfo />
        </FormItem>
        <FormItem>
          <PhoneInput />
        </FormItem>
        <FormItem>
          <NameInput />
        </FormItem>
        <FormItem>
          <SubmitButton />
        </FormItem>
        <FormItem>
          <PrivacyPolicy />
        </FormItem>
      </form>
    </Fragment>
  );
};

const mapStateToProps = ({ data: { loading, error }, submitAvailable, formValues }) => {
  return { loading, error, submitAvailable, formValues };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitDataRequest: submitDataRequest(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordFormContainer);
