import React from 'react';
import './TodoList.css'
const TodoList = ({children}) => {
  return (
    <div className='TodoList'>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export  {TodoList};