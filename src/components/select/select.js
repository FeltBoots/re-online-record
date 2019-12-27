import React from "react";
import './select.css';

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
    <select onChange={onChange}>
      { options }
    </select>
  );
};

export default Select;
