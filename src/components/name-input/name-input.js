import React, { Fragment } from "react";
import { selectName, validateName } from "../../actions";
import { connect } from "react-redux";
import ValidationError from "../validation-error";
import { bindActionCreators } from "redux";

const NameInput = ({ selectName, nameError, validateName}) => {
  return (
    <Fragment>
      <input
        className="input"
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

const mapStateToProps = ({ validationErrors: { nameError } }) => {
  return { nameError };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectName: selectName(),
    validateName,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
