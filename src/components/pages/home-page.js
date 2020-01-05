import React from "react";
import RecordForm from "../record-form";
import { connect } from 'react-redux';
import { NetworkErrorIndicator, SuccessRecordIndicator } from "../message-indicator";

const HomePage = ({ submit, error }) => {
  if (submit) {
    return <SuccessRecordIndicator />
  }

  if (error) {
    return <NetworkErrorIndicator />;
  }

  return <RecordForm />
};

const mapStateToProps = ({ data: { submit, error } }) => {
  return { submit, error }
};

export default connect(mapStateToProps, null)(HomePage);
