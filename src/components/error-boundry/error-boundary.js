import React, { Component } from 'react';
import MessageIndicator from "../message-indicator";

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <MessageIndicator clazz="message-error">
          Произошла внутренняя ошибка, свяжитесь с технической поддержкой
          <a className="link">+8 (xxx) xxx-xx-xx</a>
        </MessageIndicator>
      )
    }

    return this.props.children;
  }
}
