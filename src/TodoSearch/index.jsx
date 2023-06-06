import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const {
    inputValue,
    setInputValue,
    total,
    filterSearchValuTodos,
    handleFilterDone,
    handleFilterActive,
    filterDone,
    filterActive,
    boards,
    filterTask,
    filterBoards,
    setFilterTask,
    setFilterBoards,
  } = React.useContext(TodoContext);
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
        <button
          onClick={() => {
            filterSearchValuTodos();
          }}
        ></button>
      </div>
      <div className="TodoSearch-Group">
        <span
          className={`task ${filterTask && 'task2'}`}
          onClick={() => {
            setFilterTask(true);
            setFilterBoards(false);
          }}
        >
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

        <span
          className={`boards ${filterBoards && 'boards2'}`}
          onClick={() => {
            setFilterTask(false);
            setFilterBoards(true);
          }}
        >
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
            {boards.length}
          </span>
          Board{`${boards.length == 1 ? "" : "s"}`}
        </span>
      </div>

      {filterTask && (
        <div className="Search-filter">
          <button
            className={filterActive ? "active" : null}
            onClick={() => {
              handleFilterActive();
            }}
          >
            Active
          </button>
          <button
            className={filterDone ? "active" : null}
            onClick={() => {
              handleFilterDone();
            }}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export { TodoSearch };
