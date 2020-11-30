import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = function ({ item, toOpen }) {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <li className={style.ImageGalleryItem}>
    <img src={webformatURL} onClick={toOpen} alt={tags} className={style.ImageGalleryItemImage} data-src = {largeImageURL} />
    </li>
  )
}
export default ImageGalleryItem;