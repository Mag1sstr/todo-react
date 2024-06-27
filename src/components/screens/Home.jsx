import { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    _id: 1,
    title: "Make a website",
    isCompleted: false,
  },
  {
    _id: 2,
    title: "Drink coffee",
    isCompleted: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(data);
  function changeTodo(id) {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }
  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo app</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
