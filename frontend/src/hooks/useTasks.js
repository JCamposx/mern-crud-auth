import { useState } from "react";

import { getAllTasks as getAllTasksRequest } from "../api/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    const tasks = await getAllTasksRequest();

    setTasks(tasks);
  };

  return { tasks, getAllTasks };
};

export default useTasks;
