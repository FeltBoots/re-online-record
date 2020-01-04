import React, { Fragment } from "react";
import { selectName, validateName } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";
import { bindActionCreators } from "redux";
import '../app/app.css';

const NameInput = ({ selectName, name: nameError, validateName }) => {
  const errorClass = nameError ? 'error' : null;
  return (
    <Fragment>
      <input
        className={`input ${errorClass}`}
        type="text"
        placeholder="Ваше имя"
        onBlur={(e) => {
          validateName(e.target.value);
        }}
        onChange={(e) => {
          selectName(e.target.value);
        }}/>
      <ValidationError message="Пожалуйста, укажите имя" show={nameError}/>
    </Fragment>
  )
};

const mapStateToProps = ({ validationErrors: { name } }) => {
  return { name };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    validateName: validateName(),
    selectName: selectName(),
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
