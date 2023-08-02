import api from "../utils/api.js";
import { routes, url } from "../utils/routes.js";

export const getAllTasks = async () => {
  const response = await api(url(routes.api.tasks.index));

  return response.data.tasks;
};
