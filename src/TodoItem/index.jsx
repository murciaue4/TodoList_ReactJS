import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../TodoContext";

export function TodoItem({ text, complete, completeTodo, deleteTodo, board}) {
  const {colorsObject} = useContext(TodoContext)
  return (
    <>
      <div className="TodoItem" style={{backgroundColor:`${colorsObject[board]}`}}>
        <div className="TodoItem-div">
          <span className="img"></span>
          <span>{board}</span>
          <p>{text}</p>
        </div>

        <div className="TodoItem-button">
          
          <button
            className={`${!complete ? "unchecked" : "checked"}`}
            onClick={completeTodo}
          ></button>
        <button 
        className="delete"
        onClick={deleteTodo}
        >

        </button>

        </div>


      </div>

    </>
  );
}
