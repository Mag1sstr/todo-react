import { useState } from "react";
import Check from "./Check";
import { FaTrash } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

export default function TodoItem({
  todo,
  changeTodo,
  removeTodo,
  todos,
  index,
  setTodos,
  click,
  title,
}) {
  const [edit, setEdit] = useState(title);
  return (
    <div className="flex items-center justify-between gap-3 mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      {click ? (
        <div className="flex items-center gap-4">
          <input
            className="text-white bg-slate-600 py-2 px-4 rounded-lg outline-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                let copy = [...todos];
                copy[index].title = edit;
                copy[index].click = !copy[index].click;
                setTodos(copy);
              }
            }}
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
            type="text"
          />
          <TiTickOutline
            onClick={() => {
              let copy = [...todos];
              copy[index].title = edit;
              copy[index].click = !copy[index].click;
              setTodos(copy);
            }}
            className="bg-pink-400 rounded-lg cursor-pointer"
            size={28}
          />
        </div>
      ) : (
        <button
          onClick={() => {
            changeTodo(todo._id);
          }}
          className="flex items-center gap-3"
        >
          <Check isCompleted={todo.isCompleted} />
          <span className={todo.isCompleted ? "line-through text-red-400" : ""}>
            {todo.title}
          </span>
        </button>
      )}
      <div className="flex items-center gap-4">
        <MdEdit
          size={20}
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            let copy = [...todos];
            copy[index].click = !copy[index].click;
            setTodos(copy);
          }}
        />
        <div className="w-[1px] h-6 bg-white"></div>
        <FaTrash
          onClick={() => removeTodo(todo._id)}
          size={20}
          className="text-gray-500 hover:text-red-500"
        />
      </div>
    </div>
  );
}
