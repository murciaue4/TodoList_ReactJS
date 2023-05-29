import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({
  inputValue,
  setInputValue,
}) => {
  
  return (
    <div className="TodoSearch">
      <input
        className="input"
        type="text"
        placeholder={"Search To Do..."}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button></button>
    </div>
  );
};

export { TodoSearch };
