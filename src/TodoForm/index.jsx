import React, { useContext } from "react";
import "./index.css";
import { TodoContext } from "../TodoContext";
import { useState } from "react";

const TodoForm = () => {
  const { setOnModal, addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  return (
    <div className="form-container">
      <form name='todoAdd' >
        <label htmlFor="todoAdd" id='Add'>New Task:</label>
        <input type="text" placeholder="Añade un titulo" />
        <textarea 
        id="todoAdd"
        value={text} 
        placeholder="Description"
        onChange={(event) => {
          setText(event.target.value)
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

              addTodo(text);
              setOnModal(false);
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
