import React from "react";
import InputMask from 'react-input-mask';
import { selectPhone, validatePhone } from "../../actions";
import { connect } from "react-redux";
import '../app/app.css';
import { bindActionCreators } from "redux";
import { compose } from "../../utils";
import { withValidateAndUpdate, withValidationError } from '../hoc';

const PhoneInput = ({ phone: phoneError, ...restProps }) => {
  const errorClass = phoneError ? 'error' : null;
  return (
    <InputMask
      className={`input ${errorClass}`}
      alwaysShowMask={true}
      mask="+7 (999) 999-99-99"
      maskChar={'_'}
      {...restProps} />
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
  withValidationError(
    ['Пожалуйста, введите корректный телефон, иначе наши специалисты не смогут связаться с вами'],
    ['phone']
  ),
)(PhoneInput);
