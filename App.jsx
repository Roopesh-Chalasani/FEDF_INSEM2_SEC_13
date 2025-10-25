import React, { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const newTask = { title, completed: false };
      const response = await addTask(newTask);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Could not add task.");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Could not delete task.");
    }
  };

  const toggleTaskCompletion = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id);
      const updatedTask = { ...task, completed: !task.completed };
      await updateTask(id, updatedTask);
      setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Could not update task.");
    }
  };

  return (
    <div className="App max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>

      <TaskForm onAddTask={handleAddTask} />

      {loading ? (
        <p className="text-gray-500 text-center mt-4">Loading tasks...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">
          No tasks yet — add one above!
        </p>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={toggleTaskCompletion}
        />
      )}
    </div>
  );
}

export default App;
