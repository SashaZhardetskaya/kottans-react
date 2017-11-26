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
            <input type="radio" value="option1"
                   checked={this.props.selectedCategory === 'option1'}
                   onChange={this.handleOptionChange} />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="option2"
                   checked={this.props.selectedCategory === 'option2'}
                   onChange={this.handleOptionChange} />
            Option 2
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

