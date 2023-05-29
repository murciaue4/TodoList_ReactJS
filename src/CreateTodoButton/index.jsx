import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = ({addTodo}) => {
  return (
    <div className='CreateTodoButton'>
      <button onClick={addTodo}></button>
    </div>
  );
};

export  {CreateTodoButton};