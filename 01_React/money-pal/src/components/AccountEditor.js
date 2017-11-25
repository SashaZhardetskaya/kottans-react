import React, { Component } from 'react';

import './NoteEditor.css';
import Categories from './Categories';

export default class AccountEditor extends Component {
    constructor() {
        super();

        this.state = {
            amount: 0,
            date: '',
            category: ''
        };

        this.increaseAmount = this.increaseAmount.bind(this);
        this.decreaseAmount = this.decreaseAmount.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
        this.resetState = this.resetState.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    increaseAmount(event) {
        this.setState({
          amount: this.state.amount + 1
        });
    }
    decreaseAmount(event) {
        this.setState({
          amount: this.state.amount - 1
        });
    }

    handleOptionChange(newCategory) {
        this.setState({
            category: newCategory.option
        });
    }

    handleAccountAdd() {
        const newAccount = {
            amount: this.state.amount,
            date: Date.now(),
            // category: ''
        };

        this.props.onAccountAdd(newAccount);
        this.resetState();
    }

    resetState() {
        this.setState({
            amount: 0,
            date: '',
            category: ''
        });
    }

    render() {
        return (
            <div className="editor">
                <button onClick={this.increaseAmount}>+</button>
                <div>{this.state.amount}</div>
                <button onClick={this.decreaseAmount}>-</button>

                <Categories onAddCategories = {this.handleOptionChange}/>

                <button className="editor__button" onClick={this.handleAccountAdd}>Add</button>
            </div>
        );
    }
}
