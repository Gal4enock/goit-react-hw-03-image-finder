import React, { Component } from 'react';
import style from './SearchBar.module.css';


class Searchbar extends Component  {
  state = {
    inputValue: '',
  }

  handleChange = ({target}) => {
    this.setState({
      inputValue: target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
export default Searchbar;