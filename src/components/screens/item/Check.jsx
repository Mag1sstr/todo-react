import { FaCheck } from "react-icons/fa6";

export default function Check({ isCompleted }) {
  return (
    <div
      className={`border-2 rounded-lg border-pink-400 ${
        isCompleted ? "bg-pink-400" : ""
      } w-6 h-6 flex items-center justify-center`}
    >
      {isCompleted && <FaCheck size={18} className="text-gray-900" />}
    </div>
  );
}
