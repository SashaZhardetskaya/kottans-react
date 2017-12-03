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
      <div className="categories__container">
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
            <input type="radio" value="clothes"
                   checked={this.props.selectedCategory === 'clothes'}
                   onChange={this.handleOptionChange} />
            Clothes
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="entertainment"
                   checked={this.props.selectedCategory === 'entertainment'}
                   onChange={this.handleOptionChange} />
            Entertainment
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="bills"
                   checked={this.props.selectedCategory === 'bills'}
                   onChange={this.handleOptionChange} />
            Bills
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="other"
                   checked={this.props.selectedCategory === 'other'}
                   onChange={this.handleOptionChange} />
            Other
          </label>
        </div>
      </div>
    );
  }
}
