import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from '../Searchbar/Searchbar';
import style from './App.module.css';

class App extends Component {

  state = {
    images =[],
    loading = false,
    searchQuery = '',
    page = 1,
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  };

  fetchImages = () => {
    this.setState({ loading: true });
    const { searchQuery, page } = this.state;
    const URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18952122-26c4c8572f246f891e5c3799b&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(URL)
      .then(resp => {
        this.setState((prevState) => ({images: [...prevState.images, ...resp.hits]
          }))
        })
      .catch(error => this.setState({ error }))
      .finally(()=> ({loading: false}))
  };
  handleSubmit = (e) => {
    e.preventDefault;
  }

  render() {
    const isLoading = this.state.loading && <p>Loading...</p>;
    const isError = this.state.error && <p>{ error.message}</p>
    return (
      <div className="App">
        {isLoading}
        {isError}
        <Searchbar onSubmit={ this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
