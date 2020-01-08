import React from "react";
import { selectName, validateName } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import '../app/app.css';
import { compose } from "../../utils";
import { withValidateAndUpdate, withValidationError } from '../hoc';

const NameInput = ({name: nameError, ...restProps}) => {
  const errorClass = nameError ? 'error' : null;
  return (
    <input
      className={`input ${errorClass}`}
      type="text"
      placeholder="Ваше имя"
      {...restProps} />
  )
};

const mapStateToProps = ({ validationErrors: { name } }) => {
  return { name };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    validate: validateName(),
    select: selectName(),
  }, dispatch)
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withValidateAndUpdate(),
  withValidationError(
    ['Пожалуйста, укажите имя'],
    ['name']
  ),
)(NameInput);
