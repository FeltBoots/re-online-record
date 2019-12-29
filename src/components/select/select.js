import React from "react";
import './select.css';
import '../app/app.css';

const Select = ({ items, value, name, onChange }) => {
  const options = items.map((item, idx) => {
    return (
      <option
        key={`option_${idx}`}
        value={item[value]}>
        { item[name] }
      </option>
    )
  });

  return (
    <select
      className="select input"
      onChange={(e) => { onChange(e.target.value) }}>
      { options }
    </select>
  );
};

export default Select;
