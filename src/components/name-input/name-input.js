import React, { Fragment } from "react";
import { selectName, validateName } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";
import { bindActionCreators } from "redux";
import '../app/app.css';
import { compose } from "../../utils";
import { withValidateAndUpdate } from '../hoc';

const NameInput = ({name: nameError, ...restProps}) => {
  const errorClass = nameError ? 'error' : null;
  return (
    <Fragment>
      <input
        className={`input ${errorClass}`}
        type="text"
        placeholder="Ваше имя"
        {...restProps} />
      <ValidationError message="Пожалуйста, укажите имя" show={nameError}/>
    </Fragment>
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
)(NameInput);
