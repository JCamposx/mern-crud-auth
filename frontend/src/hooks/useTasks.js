import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  deleteTask as deleteTaskRequest,
  getAllTasks as getAllTasksRequest,
  getTask as getTaskRequest,
  storeTask as storeTaskRequest,
  updateTask as updateTaskRequest,
} from "../api/tasks.js";
import { setMessage } from "../features/flashMessage/flashMessageSlice.js";

const useTasks = () => {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const setErrorsWithTimeout = (newErrors, seconds) => {
    setErrors(newErrors);

    const timer = setTimeout(() => {
      setErrors([]);
      clearTimeout(timer);
    }, seconds * 1000);
  };

  const dispatchFlashMessageWithTimeout = (message, seconds) => {
    dispatch(setMessage(message));

    const timer = setTimeout(() => {
      dispatch(setMessage(null));
      clearTimeout(timer);
    }, seconds * 1000);
  };

  const getAllTasks = async () => {
    const response = await getAllTasksRequest();

    if (response.success) {
      setTasks(response.data.tasks);
    } else {
      setTasks([]);
      setErrorsWithTimeout(response.errors, 5);
    }
  };

  const getTask = async (id) => {
    const response = await getTaskRequest(id);

    if (response.success) {
      setTask({
        ...response.data.task,
        deadline: response.data.task.deadline.substring(0, 10),
      });
    } else {
      setErrorsWithTimeout(response.errors, 5);
    }
  };

  const storeTask = async (data) => {
    if (data.title === "") {
      delete data.title;
    }

    if (data.description === "") {
      delete data.description;
    }

    if (data.deadline === "") {
      delete data.deadline;
    } else {
      data.deadline += "T05:00:00Z";
    }

    const response = await storeTaskRequest(data);

    if (response.success) {
      dispatchFlashMessageWithTimeout("Task created successfully", 5);
    } else {
      setErrorsWithTimeout(response.errors, 5);
    }

    return response.success;
  };

  const updateTask = async (id, data) => {
    if (data.deadline === "") {
      delete data.deadline;
    } else {
      data.deadline += "T05:00:00Z";
    }

    const response = await updateTaskRequest(id, data);

    if (response.success) {
      dispatchFlashMessageWithTimeout("Task updated successfully", 5);
    } else {
      setErrorsWithTimeout(response.errors, 5);
    }

    return response.success;
  };

  const deleteTask = async (id) => {
    const response = await deleteTaskRequest(id);

    if (response.success) {
      dispatchFlashMessageWithTimeout("Task deleted successfully", 5);
      setTasks(tasks.filter((task) => task._id !== id));
    } else {
      setErrorsWithTimeout(response.errors, 5);
    }
  };

  return {
    task,
    tasks,
    errors,
    getAllTasks,
    getTask,
    storeTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
