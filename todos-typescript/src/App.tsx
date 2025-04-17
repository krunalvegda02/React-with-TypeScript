import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { todoType } from "./types/TodoType";

function App() {
  const [todos, setTodos] = useState<todoType[]>([]);

  const AddTodoHandler = (task: string) => {
    const id = Math.random();
    setTodos([...todos, { task, id }]);
  };

  const removeTodoHandler = (todoId: number) => {
    const newTodoList = todos.filter((todo: todoType) => {
      return todo.id !== todoId;
    });
  };
  // const prop = [
  //   {
  //     id: 1,
  //     task: "hello",
  //   },
  //   {
  //     id: 2,
  //     task: "hello2",
  //   },
  // ];

  return (
    <main className="max-w-6xl mx-auto">
      <AddTodo onAddTodo={AddTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </main>
  );
}

export default App;
