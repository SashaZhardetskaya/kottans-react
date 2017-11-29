import React, { Component } from 'react';

export default class AccountFilter extends Component {
  constructor() {
    super();

    this.state = {
      selectedFilter: ''
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    let selectedFilter = {
      filterName: e.target.value
    };

    this.props.onFilterChange(selectedFilter.filterName);
  }

  render() {
    return (

      <ul>
        <li>
          <label>
            <input type="radio"
                   name="filterAccounts"
                   value="all"
                   onChange={this.handleFilterChange}
            />
            Show all
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="filterAccounts"
                   value="incomes"
                   onChange={this.handleFilterChange}
            />
            incomes only
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="filterAccounts"
                   value="expenses"
                   onChange={this.handleFilterChange}
            />
            expenses only
          </label>
        </li>
      </ul>
    );
  }

}
