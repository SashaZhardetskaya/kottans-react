import React, { Component } from 'react';

import './Account.css';

export default class Note extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id, onDelete } = this.props;

    if (onDelete) {
      onDelete(id);
    }
  }

  render() {
    const {
      amount,
      category,
      date,
    } = this.props;
    const formatedDate = {
      year: new Date(date).getFullYear(),
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate(),
      hour: new Date(date).getHours(),
      minute: new Date(date).getMinutes(),
    };

    return (
      <div className="account">
          <button className="account__delete-icon" onClick={this.handleDelete}> × </button>
          <p>{amount}</p>
          <p>category: {category}</p>
          <p>
            {`${formatedDate.day}.${formatedDate.year}.${formatedDate.month} at ${formatedDate.hour}:${formatedDate.minute}`}
          </p>
      </div>
    );
  }
}
