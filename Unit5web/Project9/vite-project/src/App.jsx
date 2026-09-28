import { TodoProvider } from "./TodoContext.jsx";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import "./App.css";

export default function App() {
  return (
    // Everything inside TodoProvider can call useTodos()
    // to read or update state — no prop drilling required.
    <TodoProvider>
      <div className="app">
        <h1>To-Do</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}