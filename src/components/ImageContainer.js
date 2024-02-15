import React from 'react';
import './ImageContainer.css';

const ImageContainer = () => {
  return (
    <div className='image-container'>
      <img src='/images/background.jpg' alt='Background' className='image' />
      <div className='search-bar'>
        <input type='text' placeholder='Search' className='search-input' />
      </div>
    </div>
  );
};

export default ImageContainer;
