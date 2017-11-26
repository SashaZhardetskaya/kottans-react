import React, { Component } from 'react';

import AccountEditor from './AccountEditor';
import AccountsList from './AccountsList';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        };

        this.handleNoteDelete = this.handleNoteDelete.bind(this);
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

    handleNoteDelete(accountId) {
        this.setState({
          accounts: this.state.accounts.filter(account => account.id !== accountId)
        });
    }

    handleAccountAdd(newAccount) {
        this.setState({
          accounts: [newAccount, ...this.state.accounts]
        });
      console.log('newAccount', newAccount);
      console.log('newAccount', this.state.accounts)
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">App</h2>

                <AccountEditor onAccountAdd={this.handleAccountAdd} />

                <AccountsList
                    accounts={this.state.accounts}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}
