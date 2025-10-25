import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Create a reusable axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// --- API methods ---
export const getTasks = async () => {
  try {
    return await api.get("/");
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    return await api.post("/", task);
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    return await api.delete(`/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    return await api.put(`/${id}`, updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};
