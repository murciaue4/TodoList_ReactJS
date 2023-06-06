import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import TodosLoading from "../TodosLoading";
import TodosError from "../TodosError";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { NavBar } from "../NavBar";
import { BannerWeek } from "../BannerWeek";
import { TodoListBoards } from "../TodoListBoards";

function AppUI() {
  return (
    <div className="App">
      <NavBar />
      <TodoCounter />
      <TodoSearch />
      <BannerWeek />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          handleSearchTodo,
          completeTodo,
          deleteTodo,
          onModal,
          filterDone,
          filterActive,
          filterTask,
        filterBoards,
       
          
          
        }) => {


          let productofinal;

          if (filterDone) {
            productofinal = handleSearchTodo.filter((todo) => todo.complete);
          } else if (filterActive) {
            productofinal = handleSearchTodo.filter((todo) => !todo.complete);
          } else {
            productofinal = handleSearchTodo;
          }

          
          
          return (
            <>
              {!filterTask? <TodoListBoards/> : <TodoList>
                {loading ? <TodosLoading /> : null}
                {!loading && handleSearchTodo.length == 0 && (
                  <TodosError error={error} />
                )}
                {productofinal.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    text={todo.text}
                    complete={todo.complete}
                    board = {todo.board}
                    completeTodo={() => {
                      completeTodo(todo.id);
                    }}
                    deleteTodo={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                ))}
              </TodoList>}

              <CreateTodoButton />

              {onModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
            </>
          );
        }}
      </TodoContext.Consumer>
    </div>
  );
}

export { AppUI };
