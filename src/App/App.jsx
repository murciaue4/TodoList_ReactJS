
import "./App.css";
import { useState } from "react";
import {AppUI} from './AppUI'
import { useLocaStorage } from "./useLocalStorage";

//CUSTOM HOOK


// let defaultTodo = [
//   { id: 1, text: "hacer popó", complete: true },
//   { id: 2, text: "nadar", complete: false },
//   { id: 3, text: "estudiar", complete: false },
//   { id: 4, text: "tomar agua", complete: false },
//   { id: 5, text: "hervir agua", complete: true },
// ];

export function App() {
  //espacio para estados
  const [inputValue, setInputValue] = useState("");

  const {loading, error, item: todos, saveItems: saveTodos} = useLocaStorage("TODO_V1", []);

  //espacio para funciones

  console.log(`el estado cambio!!! ${inputValue}`);

  const completed = todos.filter((todo) => !!todo.complete).length;

  const total = todos.length;

  const handleSearchTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(inputValue.toLowerCase())
  );

  const completeTodo = (id) => {
    const newTodos = [...todos]; //guardo el valor actual del estado
    const index = newTodos.findIndex(
      //busco la primer coincidencia
      (todo) => todo.id == id
    );
    newTodos[index].complete = !newTodos[index].complete; // el valor será diferente al actual;
    saveTodos(newTodos); // ahí sí le presto el modificador de estado.
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos]; //guardo el valor actual del estado
    const index = newTodos.findIndex(
      //busco la primer coincidencia
      (todo) => todo.id == id
    );
    newTodos.splice(index, 1); // el valor será diferente al actual;
    saveTodos(newTodos); // ahí sí le presto el modificador de estado.
  };

  const addTodo = (newTodo) => {
    saveTodos([...todos].concat(newTodo));
  };

  return (
    
    <AppUI
    loading={loading}
    error={error}
    completed = {completed}
    total = {total}
    inputValue = {inputValue}
    setInputValue = {setInputValue}
    handleSearchTodo = {handleSearchTodo}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    addTodo = {addTodo}
    />
  );
}
