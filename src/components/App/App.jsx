import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import MyLoader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button'
import style from './App.module.css';

class App extends Component {

  state = {
    images =[],
    loading = false,
    page = 1,
    error: null,
    searchQuery: '',
  };

  componentDidMount() {
    this.fetchImages();
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages(nextQuery);
    }
  }

  
  fetchImages = (query) => {
    this.setState({ loading: true });
    const { page } = this.state;
    const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=18952122-26c4c8572f246f891e5c3799b&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(URL)
      .then(resp => {
        this.setState((prevState) => ({images: [...prevState.images, ...resp.hits], pages: prevState.pages + 1}))
        })
      .catch(error => this.setState({ error }))
      .finally(()=> ({loading: false}))
  };

  searchImages = (query) => {
    this.setState({
      searchQuery: query,
    })
  }

  render() {
    const { loading, images, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchImages} />
        {loading && <MyLoader/> }
        {error && <p>{error.message}</p>}
        {images.length > 0 && <ImageGallery list={images} />}
        {images.length > 0 && <Button />}
      </div>
    );
  }
}

export default App;
