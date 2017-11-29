import React, { Component } from 'react';

import AccountEditor from './AccountEditor';
import AccountsList from './AccountsList';
import AccountFilter from './AccountFilter';
import AccountsSorting from './AccountsSorting';


import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        };

        this.handleAccountDelete = this.handleAccountDelete.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
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
          accounts: this.state.accounts.filter(accounts => accounts.id !== accountId)
        });
        console.log(this.state.accounts)
    }

    handleAccountAdd(newAccount) {
        this.setState({
          accounts: [newAccount, ...this.state.accounts]
        });
      console.log('newAccount', newAccount);
      console.log('newAccount', this.state.accounts)
    }

    filterAccounts = (selectedFilter) => {
      if (selectedFilter === 'all') {
        this.setState({
          filteredAccounts: this.state.accounts
        });
      }
      if (selectedFilter === 'incomes') {
        this.setState({
          filteredAccounts: this.state.accounts.filter(accounts => accounts.amount > 0)
        });
      }
      if (selectedFilter === 'expenses') {
        this.setState({
          filteredAccounts: this.state.accounts.filter(accounts => accounts.amount < 0)
        });
      }
    };

    sortAccounts = (selectedSort) => {
      if (selectedSort === 'ascendingDate') {
        this.setState({
          sortedAccounts: this.state.accounts.sort((a, b) => (a.date) - (b.date))
        });
      }
      if (selectedSort === 'descendingDate') {
        this.setState({
          sortedAccounts: this.state.accounts.sort(function(a, b) {
            return (b.date) - (a.date);
          })
        });
      }
      if (selectedSort === 'ascendingAmount') {
        this.setState({
          sortedAccounts: this.state.accounts.sort((a, b) => (a.amount) - (b.amount))
        });
      }
      if (selectedSort === 'descendingAmount') {
        this.setState({
          sortedAccounts: this.state.accounts.sort((a, b) => (b.amount) - (a.amount))
        });
      }
    };

    render() {
        return (
            <div className="app">
                <h2 className="app__header">App</h2>

                <AccountEditor onAccountAdd={this.handleAccountAdd} />

                <AccountFilter onFilterChange={this.filterAccounts}/>

                <AccountsSorting onSortingChange={this.sortAccounts}/>


                <AccountsList
                    accounts={this.state.filteredAccounts ? this.state.filteredAccounts : this.state.accounts}
                    onAccountDelete={this.handleAccountDelete}
                />
            </div>
        );
    }
}
