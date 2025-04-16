import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoList from "./components/TodoList";


function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
