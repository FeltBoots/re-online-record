import React from 'react';

import './message-indicator.css';

const MessageIndicator = ({ clazz, children }) => {
  return (
    <div className={`app ${clazz}`}>
      { children }
    </div>
  )
};

export default MessageIndicator;
