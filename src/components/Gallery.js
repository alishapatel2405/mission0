import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <div className='gallery-item'>
        <img src='/images/icon.PNG' alt='Image 1' className='gallery-image' />
        <div className='gallery-caption'>cool pic 1</div>
      </div>
      <div className='gallery-item'>
        <img src='/images/icon.PNG' alt='Image 2' className='gallery-image' />
        <div className='gallery-caption'>cool pic 2</div>
      </div>
      <div className='gallery-item'>
        <img src='/images/icon.PNG' alt='Image 3' className='gallery-image' />
        <div className='gallery-caption'>cool pic 3</div>
      </div>
    </div>
  );
};

export default Gallery;
