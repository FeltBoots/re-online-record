import React from 'react';
import { Link } from "react-router-dom";

import './message-indicator.css';

import {
  networkError,
  internalError,
  successRecord,
} from '../../constants'

const InternalErrorIndicator = () => {
  return (
    <div className='message-indicator message-error'>
      { internalError }
      Телефон для связи: <a className="link">+8 (xxx) xxx-xx-xx</a>
    </div>
  )
};

const NetworkErrorIndicator = () => {
  return (
    <div className='message-indicator message-error'>
      { networkError }
      Телефон для связи: <a className="link">+8 (xxx) xxx-xx-xx</a>
    </div>
  )
};

const SuccessRecordIndicator = () => {
  return (
    <div className='message-indicator message-success'>
      { successRecord }
      <Link to="/orders"><i className="link">/orders</i></Link>
    </div>
  )
};

export {
  InternalErrorIndicator,
  NetworkErrorIndicator,
  SuccessRecordIndicator,
};
