import React from "react";
import RecordForm from "../record-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageIndicator from "../message-indicator";

const HomePage = ({ submit }) => {
  if (submit) {
    return (
      <MessageIndicator clazz="message-success">
        Запись успешно создана, записи можно смотреть в <Link to="/orders"><i className="link">/orders</i></Link>
      </MessageIndicator>
    )
  }
  return <RecordForm />
};

const mapStateToProps = ({ data: { submit } }) => {
  return { submit }
};

export default connect(mapStateToProps, null)(HomePage);
