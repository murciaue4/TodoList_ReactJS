import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import TodoList from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import TodosLoading from "../todosLoading";
import TodosError from "../TodosError";

function AppUI({
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
}) {
  return (
    <div className="App">
      <TodoCounter completed={completed} total={total} error={error}/>
      <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList inputValue={inputValue}>

        {loading?<TodosLoading/>:null}
        {(!loading && handleSearchTodo.length == 0) && <TodosError error = {error}/>}

        {handleSearchTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            completeTodo={() => {
              completeTodo(todo.id);
            }}
            deleteTodo={() => {
              deleteTodo(todo.id);
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        addTodo={() =>
          addTodo({
            id: 6,
            text: "harcodear el codigo para testear",
            complete: false,
          })
        }
      />
    </div>
  );
}

export { AppUI };
