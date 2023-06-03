import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';


const CreateTodoButton = () => {
  const {setOnModal} = React.useContext(TodoContext)
  return (
    <div className='CreateTodoButton'>
      <button onClick={() => {
        setOnModal(onModal => !onModal)
      }}></button>
    </div>
  );
};

export  {CreateTodoButton};