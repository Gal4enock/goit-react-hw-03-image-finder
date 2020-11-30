import React from 'react';
import style from './SearchBar.module.css'

const Searchbar = function ({onSubmit}) {
  return (
   <header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
 )
}
export default Searchbar;