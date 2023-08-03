import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getAllTasks as getAllTasksRequest,
  storeTask as storeTaskRequest,
} from "../api/tasks.js";
import { setMessage } from "../features/flashMessage/flashMessageSlice.js";

const useTasks = () => {
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

  return { tasks, errors, getAllTasks, storeTask };
};

export default useTasks;
