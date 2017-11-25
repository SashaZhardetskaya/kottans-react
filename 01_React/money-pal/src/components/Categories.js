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
      selectedCategory: e.target.value
    });
    let selected = {
      option: e.target.value
    };

    this.props.onAddCategories(selected);
    console.log('You have selected:', e.target.value);
  }


  render() {
    return (
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1"
                   checked={this.state.selectedCategory === 'option1'}
                   onChange={this.handleOptionChange} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2"
                   checked={this.state.selectedCategory === 'option2'}
                   onChange={this.handleOptionChange} />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3"
                   checked={this.state.selectedCategory === 'option3'}
                   onChange={this.handleOptionChange} />
            Option 3
          </label>
        </div>
        <button className="btn btn-default" type="submit">Save</button>
      </form>
    );
  }
}

