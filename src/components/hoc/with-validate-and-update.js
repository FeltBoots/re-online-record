import React from "react";

const withValidateAndUpdate = () => (Wrapped) => {
  return ({validate, select, ...restProps}) => {
    const v = (e) => validate(e.target.value);
    const s = (e) => select(e.target.value);
    const listeners = { onBlur: v, onChange: s };
    return <Wrapped {...listeners} {...restProps}/>;
  }
};

export default withValidateAndUpdate;
