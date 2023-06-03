import React from "react";
import "./TodoItem.css";

export function TodoItem({ text, complete, completeTodo, deleteTodo }) {
  return (
    <>
      <div className="TodoItem">

        <div className="TodoItem-div">
          <span className="img"></span>
          <span>Board.id</span>
          <p>{text}</p>
        </div>

        <div className="TodoItem-button">
          <span>1h 30m</span>
          <button
            className={`${!complete ? "unchecked" : "checked"}`}
            onClick={completeTodo}
          ></button>
        </div>
        {/* <button
        onClick={deleteTodo}
        >
        </button> */}
      </div>
    </>
  );
}
