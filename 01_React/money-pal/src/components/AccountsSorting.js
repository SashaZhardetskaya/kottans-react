import React, { Component } from 'react';

export default class AccountsSorting extends Component {
  constructor() {
    super();

    this.state = {
      sortingCriterion: '',
      sortIncrement: false,
    };

    this.toggleSorting = this.toggleSorting.bind(this);
  }

  toggleSorting (e) {
    this.setState({
        sortingCriterion: e.target.value === this.state.sortingCriterion ? '' : e.target.value
      },
    );
  }

  handleSortingChange = (e) => {
    let selectedSorting = {
      sorting: e.target.value
    };

    this.props.onSortingChange(selectedSorting.sorting);

    console.log(selectedSorting.sorting)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input type="checkbox"
                     name="sortAccounts"
                     value="date"
                     onChange={this.toggleSorting}
                     checked={this.state.sortingCriterion === "date" ? true : false}
              />
              Sort by date
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"
                     name="sortAccounts"
                     value="amount"
                     onChange={this.toggleSorting}
                     checked={this.state.sortingCriterion === "amount" ? true : false}
              />
              Sort by summ
            </label>
          </li>
        </ul>
        {this.getDateSortings()}
        {this.getAmountSortings()}
      </div>
    );
  }

  getDateSortings() {
    if (this.state.sortingCriterion !== 'date') return null;
    return (
      <ul>
        <li>
          <label>
            <input type="radio"
                   name="sortAccounts"
                   value="ascendingDate"
                   onChange={this.handleSortingChange}
            />
            ascending date
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="sortAccounts"
                   value="descendingDate"
                   onChange={this.handleSortingChange}
            />
            descending date
          </label>
        </li>
      </ul>
    )
  }

  getAmountSortings() {
    if (this.state.sortingCriterion !== 'amount') return null;
    return (
      <ul>
        <li>
          <label>
            <input type="radio"
                   name="sortAccounts"
                   value="ascendingAmount"
                   onChange={this.handleSortingChange}
            />
            ascending amount
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="sortAccounts"
                   value="descendingAmount"
                   onChange={this.handleSortingChange}
            />
            descending amount
          </label>
        </li>
      </ul>
    )
  }

}
