import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({total, completed, error}) => {
  let counterText = '';
if(total == 0){
  counterText = ``
}else if (completed == total) {
  counterText = `Felicidades haciste todo!!`
}else{
  counterText = `${completed}/${total} tareas completadas.`
}


  return (
    <div className='TodoCounter'>
      <h1>TAREAS</h1>
      <h3>
         {counterText}
      </h3>
    </div>
  );
};

export {TodoCounter};