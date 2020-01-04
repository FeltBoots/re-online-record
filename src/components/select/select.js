import React, { Component } from "react";
import './select.css';
import '../app/app.css';

export default class Select extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.items !== this.props.items) {
      this.setState({
        selected: null
      });
    }
  }

  state = {
    selected: null
  };

  render() {
    const {
      items,
      value,
      name,
      onChange,
      defaultValue,
      disabled,
      onBlur,
      clazz,
    } = this.props;

    const { selected } = this.state;

    const options = items ? items.map((item, idx) => {
      return (
        <option
          key={`option_${idx}`}
          value={item[value]}>
          {item[name]}
        </option>
      )
    }) : null;

    const defaultOption = defaultValue ?
      (<option
        key={defaultValue}
        hidden
        disabled
        value={defaultValue}>
        {defaultValue}
      </option>) : null;

    return (
      <select
        className={`select input ${clazz}`}
        value={selected ? selected : defaultValue}
        disabled={disabled}
        onBlur={(e) => {
          if (onBlur) onBlur(e.target.value);
        }}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
          this.setState({
            selected: e.target.value
          });
        }}>
        {options}
        {defaultOption}
      </select>
    );
  };
}
