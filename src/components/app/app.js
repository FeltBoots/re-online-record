import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, OrdersPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <main className="container">
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact
        />
        <Route
          path='/orders'
          component={OrdersPage}
        />
      </Switch>
    </main>
  );
};

export default App;
