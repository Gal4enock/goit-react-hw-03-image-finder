import React, { Component } from 'react';
import style from './Searchbar.module.css';


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
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
export default Searchbar;