import React from "react";
import { selectName } from "../../actions";
import { connect } from "react-redux";

const NameInput = ({ selectName }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Ваше имя"
      onChange={(e) => {
        selectName(e.target.value);
      }}/>
  )
};

const mapDispatchToProps = {
  selectName,
};

export default connect(null, mapDispatchToProps)(NameInput);
