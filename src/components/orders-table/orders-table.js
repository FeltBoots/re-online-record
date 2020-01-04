import React, { Component } from "react";

import './orders-table.css';

const getAllLocalStorage = () => {
  return Object.keys(localStorage)
    .reduce((obj, k) => {
      return {...obj, [k]: JSON.parse(localStorage.getItem(k))}
    }, {});
};

export default class OrdersTable extends Component {
  state = {
    storage: null
  };

  getRows = (storage) => {
    const rows = [];
    Object.keys(storage).forEach((key, idx) => {
      const record = storage[key];
      rows.push((
        <tr key={key}>
          <th>#{idx + 1}</th>
          <td>{record.name}</td>
          <td>{record.city}</td>
          <td>{record.day}</td>
          <td>{record.time}</td>
          <td>
            <i className="far fa-trash-alt"
               onClick={() => {
                 localStorage.removeItem(key);
                 this.updateState();
               }}>
            </i>
          </td>
        </tr>
      ));
    });
    return rows;
  };

  updateState() {
    this.setState({
      storage: getAllLocalStorage()
    });
  };

  componentDidMount() {
    this.updateState();
  }

  render() {
    const { storage } = this.state;
    const rows = storage ? this.getRows(storage) : null;
    return (
      <table className="table table-hover thead-default">
        <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Город</th>
          <th>День</th>
          <th>Время</th>
          <th>Действия</th>
        </tr>
        </thead>
        <tbody>
        { rows }
        </tbody>
      </table>
    );
  }
};
