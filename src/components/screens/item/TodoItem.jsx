import Check from "./Check";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div
      onClick={() => {
        changeTodo(todo.id);
      }}
      className="flex items-center justify-between gap-3 mb-4 rounded-2xl bg-gray-800 p-5 w-full"
    >
      <button className="flex items-center gap-3">
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          {todo.title}
        </span>
      </button>
      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <FaTrash size={20} className="text-gray-500 hover:text-red-500" />
      </button>
    </div>
  );
}
