import React from 'react';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navBar-contain'>
      <div className='navBar-profile'>   
      </div>
      <div className="navBar-buttons">
      <button className='navBar-notification'></button>
      <button className='navBar-add'></button>
      </div>
    </div>
  );
};

export  {NavBar};