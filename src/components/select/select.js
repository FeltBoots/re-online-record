import React from "react";
import './select.css';
import '../app/app.css';

const Select = (props) => {
  const {
    items,
    value,
    name,
    onChange,
    defaultValue
  } = props;

  const options = items.map((item, idx) => {
    return (
      <option
        key={`option_${idx}`}
        value={item[value]}>
        { item[name] }
      </option>
    )
  });

  const defaultOption = defaultValue ?
    (<option
      key={defaultValue}
      disabled
      hidden
      value={defaultValue}>
      {defaultValue}
    </option>) : null;

  return (
    <select
      className="select input"
      defaultValue={defaultValue}
      onChange={(e) => { onChange(e.target.value) }}>
      { options }
      { defaultOption }
    </select>
  );
};

export default Select;
