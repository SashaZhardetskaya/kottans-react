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
      sortingName: e.target.name,
      sortingStatus: e.target.value
    };

    this.props.onSortingChange(selectedSorting.sortingName, selectedSorting.sortingStatus);
    // this.props.onSortingChange(selectedSorting);

    console.log(selectedSorting.sortingName, selectedSorting.sortingStatus)
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
                   name="date"
                   value="ascending"
                   onChange={this.handleSortingChange}
            />
            ascending date
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="date"
                   value="descending"
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
                   name="amount"
                   value="ascending"
                   onChange={this.handleSortingChange}
            />
            ascending amount
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="amount"
                   value="descending"
                   onChange={this.handleSortingChange}
            />
            descending amount
          </label>
        </li>
      </ul>
    )
  }

}
