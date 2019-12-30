import React, { Fragment } from "react";
import InputMask from 'react-input-mask';
import { selectPhone, validatePhone } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";

const isEqual = (value) => {
  return value.match(/\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/);
};

const PhoneInput = ({ selectPhone, validatePhone, phoneError }) => {
  return (
    <Fragment>
      <InputMask
        className="input"
        alwaysShowMask={true}
        mask="+7 (999) 999-99-99"
        maskChar={'_'}
        onBlur={(e) => validatePhone(e.target.value)}
        onChange={(e) => {
          const value = e.target.value;
          selectPhone(value);
          if (isEqual(value))
            validatePhone(value);
        }} />
      <ValidationError
        message="Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами"
        show={phoneError} />
    </Fragment>
  );
};

const mapStateToProps = ({ validationErrors: { phoneError } }) => {
  return { phoneError };
};

const mapDispatchToProps = {
  selectPhone,
  validatePhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInput);
