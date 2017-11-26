import React, { Component } from 'react';

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: ''
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange (e) {
    this.setState({
      selectedCategory: e.target.value === this.state.selectedCategory ? '' : e.target.value
    },
      () => {
        let selected = {
          option: this.state.selectedCategory
        };

        this.props.onAddCategories(selected.option);
        console.log('You have selected:', this.state.selectedCategory);
      }
    );

  }

  render() {
    return (
      <div>
        <div>
          <label>
            <input type="radio" value="transport"
                   checked={this.props.selectedCategory === 'transport'}
                   onChange={this.handleOptionChange} />
            Transport
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="food"
                   checked={this.props.selectedCategory === 'food'}
                   onChange={this.handleOptionChange} />
            Food
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="option3"
                   checked={this.props.selectedCategory === 'option3'}
                   onChange={this.handleOptionChange} />
            Option 3
          </label>
        </div>
      </div>
    );
  }
}

