import React from 'react';
import './TodosError.css'


const TodosError = ({error}) => {
  return (
    <div className='containError'>
      <p>No existen tareas! <br /> Crea una en el incono de abajo{error}</p>
    </div>
  );
};

export default TodosError;