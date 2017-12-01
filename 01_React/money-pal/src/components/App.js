import React, { Component } from 'react';

import AccountEditor from './AccountEditor';
import AccountsList from './AccountsList';
import AccountFilter from './AccountFilter';
import AccountsSorting from './AccountsSorting';
import Piechart from './Piechart';
// import PieChart from './PieChart';


import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
             accounts: [],
        };

        this.handleAccountDelete = this.handleAccountDelete.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
    }


    componentDidMount() {
        const savedAccounts = JSON.parse(localStorage.getItem('accounts'));

        if (savedAccounts) {
            this.setState({ accounts: savedAccounts });
        }
    }

    componentDidUpdate() {
        const accounts = JSON.stringify(this.state.accounts);
        localStorage.setItem('accounts', accounts);
    }

    handleAccountDelete(accountId) {
        this.setState({
          accounts: this.state.accounts.filter(accounts => accounts.id !== accountId),
        });
        if (this.state.accountsToShow) {
          this.setState({
            accountsToShow: this.state.accountsToShow.filter(accounts => accounts.id !== accountId),
          });
        }
        console.log(this.state.accounts)
    }

    handleAccountAdd(newAccount) {
        this.setState({
          accounts: [newAccount, ...this.state.accounts],
        });
        if (this.state.accountsToShow) {
          this.setState({
            accountsToShow: [newAccount, ...this.state.accountsToShow],
          });
        }
      console.log('newAccount', this.state.accounts)
    }


    applyFilters(accounts, sorting, filterByAmount) {
      let accountsToShow = Array.from(accounts);

      if (filterByAmount === 'incomes') {
        accountsToShow = accountsToShow.filter(x => x.amount > 0);
      }
      if (filterByAmount === 'expenses') {
        accountsToShow = accountsToShow.filter(x => x.amount < 0);
      }
      if (sorting) {
        accountsToShow.sort((a,b) => (a[sorting.name] - b[sorting.name]) * (sorting.status === 'ascending' ? 1 : -1));
      }
      // this.setState({
      //   accountsToShow: accountsToShow,
      // });
      return accountsToShow;
    };

    filterAccountsHandler = (selectedFilter) => {
      this.setState({
        accountsToShow: this.applyFilters(this.state.accounts, null, selectedFilter)
      });
    };

    sortAccountsHandler = (selectedSortName, selectedSortStatus) => {
      if (this.state.accountsToShow) {
        this.setState({
          accountsToShow: this.applyFilters(this.state.accountsToShow, {name: selectedSortName, status: selectedSortStatus}, null)
        });
      } else {
        this.setState({
          accountsToShow: this.applyFilters(this.state.accounts, {name: selectedSortName, status: selectedSortStatus}, null)
        });
      }
    };



    render() {
      // const = {
      //
      // }
      return (
        <div className="app">
          <h2 className="app__header">App</h2>

          <AccountEditor onAccountAdd={this.handleAccountAdd} />

          <AccountFilter onFilterChange={this.filterAccountsHandler}/>

          <AccountsSorting onSortingChange={this.sortAccountsHandler}/>


          <Piechart data={this.state.accounts.filter(x => x.amount > 0)} />

          {/*<PieChart accounts={this.state.accounts.filter(x => x.amount > 0)} />*/}


          <AccountsList
              accounts={this.state.accountsToShow ? this.state.accountsToShow : this.state.accounts}
              onAccountDelete={this.handleAccountDelete}
          />
      </div>
        );
    }
}
