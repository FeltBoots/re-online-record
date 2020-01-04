import React from 'react';

import './message-indicator.css';

const MessageIndicator = ({ clazz, children }) => {
  return (
    <div className={`message-indicator ${clazz}`}>
      { children }
    </div>
  )
};

export default MessageIndicator;
