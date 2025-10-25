import React from "react";
import { Trash2 } from "lucide-react"; // optional: nice icon set

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li
      className={`flex justify-between items-center bg-white shadow-sm rounded-xl px-4 py-2 border ${
        task.completed ? "opacity-70" : ""
      }`}
    >
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer select-none ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 p-1"
        aria-label="Delete task"
        title="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};

export default TaskItem;
