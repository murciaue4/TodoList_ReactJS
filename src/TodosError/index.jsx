import React from 'react';
import './TodosError.css'


const TodosError = ({error}) => {
  return (
    <div className='containError'>
     <p>No tasks found! <br /> Create one using the icon below{error}</p>
     <img src="/src/assets/icon-back.png" alt="" />
    </div>
  );
};

export default TodosError;