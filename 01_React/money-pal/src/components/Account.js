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

    return (
      <div className="account">
          <button className="account__delete-icon" onClick={this.handleDelete}> × </button>
          <p>{amount}</p>
          <p>category: {category}</p>
          <p>{date}</p>
      </div>
    );
  }
}
