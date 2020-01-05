import React from "react";
import { connect } from 'react-redux';
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

const RecordFormContainer = ({ loading, submitAvailable, formValues, submitDataRequest }) => {

  const loadingEffect = loading ? 'loading-effect' : null;

  return (
    <div className="form-container">
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
    </div>
  );
};

const mapStateToProps = ({ data: { loading }, submitAvailable, formValues }) => {
  return { loading, submitAvailable, formValues };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitDataRequest: submitDataRequest(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordFormContainer);
