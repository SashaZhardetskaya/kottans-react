import React, { Component } from 'react';

import './AccountEditor.css';
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
        console.log(this.state.category)
    }

    handleAccountAdd() {
        const newAccount = {
            amount: this.state.amount,
            date: Date.now(),
            category: this.state.category,
        };

      console.log(this.state.category);

        this.props.onAccountAdd(newAccount);
        this.resetState();
    }

    resetState() {
        this.setState({
            amount: 0,
            date: '',
            category: ''
        });
        // const resetedCategory = this.state.category;
        // this.props.onResetCategory(resetedCategory);
    }

    render() {
        return (
            <div className="editor">
                <button onClick={this.increaseAmount}>+</button>
                <div>{this.state.amount}</div>
                <button onClick={this.decreaseAmount}>-</button>

                <Categories onAddCategories = {this.handleCategoryChange}/>

                <button className="editor__button" onClick={this.handleAccountAdd}>Add</button>
            </div>
        );
    }
}
