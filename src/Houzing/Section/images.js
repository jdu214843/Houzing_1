import React from 'react';
import { images } from './mock';
import './style.css';

function ImageGallery() {
  return (
    <div className="image-gallery">
      <div className="image1">
        <img src={images[0]} alt="First" />
      </div>
      <div className="image2">
        <img src={images[1]} alt="Second" />
        <img src={images[2]} alt="Third" />
        <img src={images[3]} alt="Second" />
        <img src={images[4]} alt="Third" />
      </div>
    </div>
  );
}

export default ImageGallery;
