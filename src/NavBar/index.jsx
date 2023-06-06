import React, { useContext } from 'react';
import './NavBar.css'
import { TodoContext } from "../TodoContext";
const NavBar = () => {
  const {setOnModal} = useContext(TodoContext)
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className='navBar-contain'>
      <div className='navBar-profile'>   
      </div>
      <div className="navBar-buttons">
      <button onClick={() => {
        refreshPage()
      }} className='navBar-notification'></button>
      <button onClick={() => {
        setOnModal(true)
      }} className='navBar-add'></button>
      </div>
    </div>
  );
};

export  {NavBar};
