import React from 'react';
import './form-item.css';

const FormItem = (props) => {
  return (
    <div className="form-item">
      { props.children }
    </div>
  );
};

export default FormItem;
