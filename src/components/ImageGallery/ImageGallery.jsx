import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = function ({list}) {
  return (
  <ul className="ImageGallery">
      {list.map(el => <ImageGalleryItem item={el}/>)}
  </ul>
  )}

export default ImageGallery;