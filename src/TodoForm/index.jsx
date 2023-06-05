import React, { useContext } from "react";
import "./index.css";
import { TodoContext } from "../TodoContext";
import { useState } from "react";

const TodoForm = () => {
  const { setOnModal, addTodo, boards } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const[createBoard, setCreateBoard] = useState("")

  const handleSelectedBoard = (event) => {
    setSelectedBoard(event.target.value);
  };
  const handleCreateteBoard = (event) => {
    setCreateBoard(event.target.value);
  };

  return (
    <div className="form-container">
      <form name="todoAdd">
        <label htmlFor="todoAdd" id="Add">
          New Task:
        </label>

        <select 
          onChange={handleSelectedBoard}
        >
          <option value="">Select one of your boards</option>
          {boards.map((board) => (
            <option key={board} value={board}>
              {board}
            </option>
          ))}
        </select>

        <input  placeholder="Add a new board" type="text" value={createBoard} onChange={handleCreateteBoard}/>

        <textarea
          id="todoAdd"
          value={text}
          placeholder="Description"
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>
        <div className="buttons-form">
          <button
            className="form-button form-button--cancel"
            type="button"
            onClick={() => {
              setOnModal(false);
            }}
          >
            Cancelar
          </button>

          <button
            className="form-button form-button--add"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              if (!selectedBoard == "") {
                !text == "" && addTodo(text, selectedBoard) 
              setOnModal(false);
              }else if(selectedBoard == "" && !createBoard == ""){
                !text == "" && addTodo(text, createBoard) 
              }
                setOnModal(false);
              

              {console.log(selectedBoard);
              console.log(createBoard);
              }
            }}
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export { TodoForm };
