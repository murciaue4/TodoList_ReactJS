import { useState } from "react";
import React from "react";
import { useLocaStorage } from "./useLocalStorage";
import { useDate } from "./useDate";
const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const colors = {
    0: "#8ee4f4",
    1: "#f0f06a",
    2: "#5580dd",
    3: "#F0F0F0",
    4: "#03fa8f",
    5: "#01d9ff",
    6: "#e460b6",
  };

  const [inputValue, setInputValue] = useState("");
  const { date, day, hours } = useDate();
  const {
    loading,
    error,
    item: todos,
    saveItems: saveTodos,
    boardsKeys,
  } = useLocaStorage("TODO_V1", []);
  const [onModal, setOnModal] = useState(false);
  const [filterDone, setFilterDone] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const [filterTask, setFilterTask] = useState(true);
  const [filterBoards, setFilterBoards] = useState();
  const [colorsItem, setColorsItem] = useState(colors);
  //States => Actions//
  const boards = boardsKeys;


  //funcionalidad de colores dinamicos------------------------------------*

  const matchColors = () => {
    let matched = [];

    for (let i = 0; i < boards.length; i++) {
      let board = boards[i];
      let color = colorsItem[i];
      matched.push({ [board]: color });
    }
    return matched;
  };
  const backgroundColors = matchColors();
  

  const colorsObject = backgroundColors.reduce((obj, item) => {
    const key = Object.keys(item)[0]; // obtengo el nombre de la propiedad del objeto
    const value = item[key]; // Obtengop el valor asociado a esa propiedad
    obj[key] = value; // asigno la propiedad y el valor al objeto resultante
    return obj;
  }, {});

  
//funcionalidad de colores dinamicos--------------------------------------------*



  const completed = todos.filter((todo) => todo.complete).length;

  const total = todos.length;

  const handleSearchTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleFilterDone = () => {
    setFilterDone(!filterDone);
  };

  const handleFilterActive = () => {
    setFilterActive(!filterActive);
  };

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

  const addTodo = (text, board) => {
    let newTodos = [...todos];
    let dynamicId;
    newTodos.length
      ? (dynamicId = Math.max(...newTodos.map((todo) => todo.id)) + 1)
      : (dynamicId = 1);

    newTodos.push({
      id: dynamicId,
      text: text,
      complete: false,
      board: board,
    });
    saveTodos(newTodos);
  };

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
        handleFilterDone,
        filterDone,
        handleFilterActive,
        filterActive,
        setFilterDone,
        setFilterActive,
        boards,
        filterTask,
        filterBoards,
        setFilterTask,
        setFilterBoards,
        colorsObject,

      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
