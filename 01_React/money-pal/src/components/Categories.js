import React, { Component } from 'react';

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected:', this.state.selectedOption);

  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="radio">
          <label>
            <input type="radio" value="option1"
                   checked={this.state.selectedOption === 'option1'}
                   onChange={this.handleOptionChange} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2"
                   checked={this.state.selectedOption === 'option2'}
                   onChange={this.handleOptionChange} />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3"
                   checked={this.state.selectedOption === 'option3'}
                   onChange={this.handleOptionChange} />
            Option 3
          </label>
        </div>
        <button className="btn btn-default" type="submit">Save</button>
      </form>
    );
  }
}

