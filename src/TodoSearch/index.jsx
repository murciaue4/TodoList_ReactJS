import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { inputValue, setInputValue, total, filterSearchValuTodos } = React.useContext(TodoContext);
  return (
    <div className="contain">
      <div className="TodoSearch">
        <input
          name="inputSearch"
          className="input"
          type="text"
          placeholder={"Search To Do..."}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button onClick={() => {
          filterSearchValuTodos();
        }}></button>
      </div>
      <div className="TodoSearch-Group">
        <span className="task">
          <span
            style={{
              border: "solid 1px white",
              borderRadius: "50%",
              height: "28px",
              width: "28px",
              display: "flex",
              aligneItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              margin: "10px",
              fontWeight: "400",
            }}
          >
            {total}
          </span>
          Tasks
        </span>
        <span className="boards">
          <span
            style={{
              border: "solid 1px white",
              borderRadius: "50%",
              height: "28px",
              width: "28px",
              display: "flex",
              aligneItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              margin: "10px",
              fontWeight: "400",
              
            }}
          >
            99
          </span>
          Boards
        </span>
      </div>

      <div className="Search-filter">
        <button className="b-A">Active</button>
        <button className="b-D">Done</button>
      </div>
    </div>
  );
};

export { TodoSearch };
