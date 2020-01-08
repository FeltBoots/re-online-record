import React, { Fragment } from "react";
import ValidationError from "../validation-error";

const withValidationError = (messages, propNames) => (Wrapped) => {
  return (props) => {
    const errors = messages.map((m, idx) =>
      <ValidationError key={idx} message={m} show={props[propNames[idx]]} />);
    return (
      <Fragment>
        <Wrapped {...props} />
        { errors }
      </Fragment>
    )
  }
};

export default withValidationError;
