import React, { Component } from 'react';
import { InternalErrorIndicator } from "../message-indicator";

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <InternalErrorIndicator />
    }

    return this.props.children;
  }
}
