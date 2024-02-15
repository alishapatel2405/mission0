import React from 'react';
import Navbar from './components/Navbar'; 
import ImageContainer from './components/ImageContainer'; 
import Gallery from './components/Gallery'; 
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <Gallery />
    </div>
  );
};

export default App;
