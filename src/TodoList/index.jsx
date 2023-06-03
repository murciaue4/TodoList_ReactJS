import React from 'react';
import './TodoList.css'
const TodoList = (props) => {
  return (
    <div className='TodoList'>
      <ul>
        {props.children}
      </ul>
    </div>
  );
};

export  {TodoList};