
import { TodoProvider } from "../TodoContext";
import "./App.css";
import {AppUI} from './AppUI';

export function App() {
  return (
    
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
};
