import React, { Component } from "react";
import InputMask from 'react-input-mask';
import { selectPhone } from "../../actions";
import { connect } from "react-redux";

class PhoneInput extends Component {
  _mask = '+7 (999) 999-99-99';
  _maskRegexp = /\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/;

  _isEqual = (value) => {
    return value.match(this._maskRegexp);
  };

  onChange = (e) => {
    const value = e.target.value;
    const equal = this._isEqual(value);
    if (equal) {
      this.props.selectPhone(value);
    }
  };

  render() {
    return (
      <InputMask
        className="input"
        alwaysShowMask={true}
        mask={this._mask}
        maskChar={'_'}
        // value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

const mapDispatchToProps = {
  selectPhone,
};

export default connect(null, mapDispatchToProps)(PhoneInput);
