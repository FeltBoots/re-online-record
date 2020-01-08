import React, { Fragment } from "react";
import InputMask from 'react-input-mask';
import { selectPhone, validatePhone } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";
import '../app/app.css';
import { bindActionCreators } from "redux";
import { compose } from "../../utils";
import { withValidateAndUpdate } from '../hoc';

const PhoneInput = ({ phone: phoneError, ...restProps }) => {
  const errorClass = phoneError ? 'error' : null;
  return (
    <Fragment>
      <InputMask
        className={`input ${errorClass}`}
        alwaysShowMask={true}
        mask="+7 (999) 999-99-99"
        maskChar={'_'}
        {...restProps} />
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
    select: selectPhone(),
    validate: validatePhone(),
  }, dispatch)
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withValidateAndUpdate(),
)(PhoneInput);
