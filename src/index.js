import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from "./components/error-boundry";

import RecordService from "./services/record-service";
import { RecordServiceProvider } from "./components/record-context";

import store from "./store";

const recordService = new RecordService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RecordServiceProvider value={recordService}>
        <Router>
          <App />
        </Router>
      </RecordServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
