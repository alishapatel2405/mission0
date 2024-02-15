import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src='/images/icon.PNG' alt='Company Logo' className='logo' />
        <span className='company-name'>FlexFlow</span>
      </div>
      <div className='navbar-right'>
        <div className='navbar-links'>
          <span>Page 1</span>
          <span>Page 2</span>
          <span>Page 3</span>
        </div>
        <button className='login-button'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
