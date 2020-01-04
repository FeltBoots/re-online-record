import React from "react";
import { connect } from "react-redux";
import './submit-button.css';

const SubmitButton = ({ submitAvailable }) => {
  const buttonDisabled = !submitAvailable ? 'button-disabled' : null;
  return (
    <div className="submit-button">
      <button type="submit" className={buttonDisabled}>Записаться</button>
    </div>
  )
};

const mapStateToProps = ({ submitAvailable }) => {
  return { submitAvailable };
};

export default connect(mapStateToProps, null)(SubmitButton);
