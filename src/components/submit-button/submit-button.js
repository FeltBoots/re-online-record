import React from "react";
import { connect } from "react-redux";
import { validateBeforeSubmit } from "../../actions";
import './submit-button.css';

const SubmitButton = ({ submitAvailable, validateBeforeSubmit }) => {
  const buttonDisabled = !submitAvailable ? 'button-disabled' : null;
  return (
    <div className="submit-button">
      <button type="submit" className={buttonDisabled} onClick={validateBeforeSubmit}>Записаться</button>
    </div>
  )
};

const mapStateToProps = ({ submitAvailable }) => {
  return { submitAvailable };
};

const mapDispatchToProps = {
  validateBeforeSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);
