import React, { useContext, useState } from "react";
import "./TodoListBoards.css";
import { TodoItemBoard } from "../TodoItemBoard";
import { TodoContext } from "../TodoContext";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";


const TodoListBoards = () => {
  const [filteredBoard, setFilteredBoard] = useState();
  const [filtered, setFiltered] = useState(false);

  const handleSetFilteredBoard = (word) => {
    setFilteredBoard(word);
  };

  const handleSetFiltered = (bol) => {
    setFiltered(bol);
  };

  const { completeTodo, boards, handleSearchTodo, deleteTodo } = useContext(TodoContext);
  const counterBoards = (boardText) => {
    let cant = handleSearchTodo.filter(
      (todo) => todo.board == boardText
    ).length;
    return cant;
  };
 

  return (
    <div className="TodoListBoards" >
      <ul>
        {!filtered ? (
          boards.map((board) => (
            <TodoItemBoard
              key={board}
              id={board}
              text={board}
              counterBoards={counterBoards(board)}
             
              handleSetFiltered={() => {
                handleSetFiltered(true);
              }}
              handleSetFilteredBoard={() => {
                handleSetFilteredBoard(board);
              }}
            />
          ))
        ) : (
          <TodoList>
            <button
              
              onClick={() => {
                handleSetFiltered(false)
              }}
            >

            </button>
            {handleSearchTodo.map(
              (todo) =>
                todo.board == filteredBoard && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    complete={todo.complete}
                    board={todo.board}
                    completeTodo={() => {
                      completeTodo(todo.id);
                    }}
                    deleteTodo={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                )
            )}
          </TodoList>
        )}
      </ul>
    </div>
  );
};

export { TodoListBoards };
