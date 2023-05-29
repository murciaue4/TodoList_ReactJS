import React from "react";
import './TodoItem.css'

export function TodoItem({text, complete, completeTodo, deleteTodo }) {

  return (
    <>
      <li className="TodoItem">
        <button
        className={`${!complete?'unchecked':'checked'}`}
        onClick={completeTodo}
        >
      
        </button>
        <p>{text}</p>
        <button 
        className="deleted"
        onClick={deleteTodo}
        ></button>
      </li>
    </>
  );
}
