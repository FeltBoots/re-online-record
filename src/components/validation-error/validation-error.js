import React from 'react';
import './validation-error.css';

const ValidationError = ({ message, show }) => {
  return show ? (
    <div className="validation-error">{message}</div>
  ) : null;
};

export default ValidationError;
