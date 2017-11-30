import React, { Component } from 'react';

import './AccountEditor.css';
import Categories from './Categories';

export default class AccountEditor extends Component {
    constructor() {
        super();

        this.state = {
            amount: 0,
            date: '',
            category: '',
            id: '',
        };

        this.increaseAmount = this.increaseAmount.bind(this);
        this.decreaseAmount = this.decreaseAmount.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
        this.resetState = this.resetState.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

    handleCategoryChange(newCategory) {
        this.setState({
            category: newCategory
        });
    }

    handleAccountAdd() {
        const selectColor = (category) => {
            if (category === 'transport') {
                return '#56c387'
            }
            if (category === 'food') {
                return '#c32150'
            }
            if (category === 'option3') {
                return '#416ec3'
            }
        };
        const newAccount = {
            amount: this.state.amount,
            date: Date.now(),
            category: this.state.category,
            id: Date.now(),
            color: selectColor(this.state.category),
        };

        if (newAccount.amount !== 0 && newAccount.category !== '') {
          this.props.onAccountAdd(newAccount);
          this.resetState();
        }
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

                <Categories onAddCategories = {this.handleCategoryChange} selectedCategory={this.state.category} />

                <button className={this.state.amount !== 0 && this.state.category !== '' ? "editor__button" : "editor__button error"} onClick={this.handleAccountAdd}>Add</button>
            </div>
        );
    }
}
