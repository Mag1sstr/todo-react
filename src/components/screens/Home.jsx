import { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    _id: 1,
    title: "Make a website",
    isCompleted: false,
    click: false,
  },
  {
    _id: 2,
    title: "Drink coffee",
    isCompleted: false,
    click: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(data);
  let [inputValue, setInputValue] = useState("");
  function changeTodo(id) {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }
  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));
  console.log(todos);

  return (
    <div className=" text-white  w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo app</h1>
      <input
        style={{ color: "white" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            let newData = [...todos];
            let newObj = {
              _id: Math.random(),
              title: inputValue,
              isCompleted: false,
              click: false,
            };
            newData.unshift(newObj);
            setTodos(newData);
            setInputValue("");
          }
        }}
        className=" caret-white mb-4 rounded-2xl bg-gray-800 p-5 w-full outline-none focus:pl-7 transition-all duration-150"
        type="text"
        placeholder="Введите название задачи"
      />
      {todos.map((todo, index) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          click={todo.click}
          todos={todos}
          setTodos={setTodos}
          index={index}
          title={todo.title}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
