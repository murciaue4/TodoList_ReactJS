import { useState } from "react";
import React from "react";
import { useLocaStorage } from "./useLocalStorage";
import { useDate } from "./useDate";
const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const {date,day, hours} = useDate()
 
  const {
    loading, 
    error,
    item: todos,
    saveItems: saveTodos,
  } = useLocaStorage("TODO_V1", []);
  const [onModal, setOnModal] = useState(false);

  const completed = todos.filter((todo) => !!todo.complete).length;

  const total = todos.length;



  const handleSearchTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(inputValue.toLowerCase()));




    

  const completeTodo = (id) => {
    const newTodos = [...todos]; //guardo el valor actual del estado
    const index = newTodos.findIndex(
      //busco la primer coincidencia
      (todo) => todo.id === id
    );
    newTodos[index].complete = !newTodos[index].complete; // el valor será diferente al actual;
    saveTodos(newTodos); // ahí sí le presto el modificador de estado.
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos]; //guardo el valor actual del estado
    const index = newTodos.findIndex(
      //busco el id que coincida
      (todo) => todo.id == id
    );
    newTodos.splice(index, 1); // el valor será diferente al actual;
    saveTodos(newTodos); // ahí sí le presto el modificador de estado.
  };

  const addTodo = (text) => {
    let newTodos = [...todos];
    let dynamicId;
    newTodos.length
      ? (dynamicId = Math.max(...newTodos.map((todo) => todo.id)) + 1)
      : (dynamicId = 1);

    newTodos.push({
      id: dynamicId,
      text: text,
      complete: false,
    });
    saveTodos(newTodos);
  };

  const filterCompletedTodos = () => {
    todo
  }



  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completed,
        total,
        inputValue,
        setInputValue,
        handleSearchTodo,
        completeTodo,
        deleteTodo,
        addTodo,
        onModal,
        setOnModal,
        date,
        day,
        hours,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
