import React, { Fragment } from "react";
import InputMask from 'react-input-mask';
import { selectPhone, validatePhone } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";
import '../app/app.css';
import { bindActionCreators } from "redux";

const PhoneInput = ({ selectPhone, validatePhone, phone: phoneError }) => {
  const errorClass = phoneError ? 'error' : null;
  return (
    <Fragment>
      <InputMask
        className={`input ${errorClass}`}
        alwaysShowMask={true}
        mask="+7 (999) 999-99-99"
        maskChar={'_'}
        onBlur={(e) => validatePhone(e.target.value)}
        onChange={(e) => {
          const value = e.target.value;
          selectPhone(value);
        }} />
      <ValidationError
        message="Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами"
        show={phoneError} />
    </Fragment>
  );
};

const mapStateToProps = ({ validationErrors: { phone } }) => {
  return { phone };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectPhone: selectPhone(),
    validatePhone: validatePhone(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInput);
