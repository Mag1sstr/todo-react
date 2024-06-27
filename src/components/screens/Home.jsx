import { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    id: 1,
    title: "Finish th eas",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Finish th easwdwwwwwvv",
    isCompleted: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(data);
  function changeTodo(id) {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }
  function removeTodo(id) {
    let newTodos = [...todos];
    setTodos(
      newTodos.filter((t) => {
        return t.id !== id;
      })
    );
  }

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo app</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
