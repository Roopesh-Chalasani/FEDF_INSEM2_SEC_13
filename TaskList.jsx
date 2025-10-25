import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        No tasks yet — add one to get started!
      </p>
    );
  }

  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TaskList;
