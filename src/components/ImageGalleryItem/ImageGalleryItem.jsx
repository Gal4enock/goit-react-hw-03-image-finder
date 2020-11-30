import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = function ({ item }) {
  const { id, webformatURL, largeImageURL, tags } = item;
  return (
    <li key={id} className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" data-src = {largeImageURL} />
    </li>
  )
}
export default ImageGalleryItem;