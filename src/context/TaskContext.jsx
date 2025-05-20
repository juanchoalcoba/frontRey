import { createContext, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  updateTasksRequest,
} from "../api/tasks";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTasksRequest(task);
      console.log("Tarea creada:", res.data);
    } catch (error) {
      console.error(
        "Error creando la tarea:",
        error.response?.data || error.message
      );
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const res = await updateTasksRequest(id, updatedTask);
      console.log("Tarea actualizada:", res.data);
      getTasks(); // recargar
    } catch (error) {
      console.error(
        "Error actualizando la tarea:",
        error.response?.data || error.message
      );
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTasksRequest(id);
      console.log("Tarea eliminada");
      getTasks(); // recargar
    } catch (error) {
      console.error(
        "Error eliminando la tarea:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
