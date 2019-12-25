import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import reducer from "./reducers";

const logMidlleware = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
};

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, logMidlleware));

export default store;
