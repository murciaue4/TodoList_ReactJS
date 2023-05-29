import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({total, completed}) => {
  let counterText = '';
if (completed == total) {
  counterText = `Felicidades haciste todo!!`
}else{
  counterText = `${completed}/${total} tareas completadas.`
}

  return (
    <div className='TodoCounter'>
      <h2>
         {counterText}
      </h2>
    </div>
  );
};

export {TodoCounter};