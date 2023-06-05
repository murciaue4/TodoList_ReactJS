import React from "react";
import { useContext } from "react";
import "./TodoItemBoard.css";
import { TodoContext } from "../TodoContext";

export function TodoItemBoard({ text ,counterBoards, handleSetFiltered, handleSetFilteredBoard}) {

    const {colorsObject} = useContext(TodoContext)
    



  return (
    <>
      <div 
      onClick={handleSetFilteredBoard}
      className="TodoItemBoard" 
      style={{backgroundColor:`${colorsObject[text]}`}}
      >
        <div className="TodoItemBoard-div">
          <span className="img"></span>
          <span>{`${counterBoards} Tasks`}</span>
          <p>{text}</p>
        </div>

        <div className="TodoItemBoard-button">
          
          <button
         onClick={handleSetFiltered}
          ></button>
        </div>


      </div>

    </>
  );
}