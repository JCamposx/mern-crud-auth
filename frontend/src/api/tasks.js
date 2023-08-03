import api from "../utils/api.js";
import { TYPE_FETCHING } from "../utils/constants.js";
import { routes, url } from "../utils/routes.js";

export const getAllTasks = async () => {
  const response = await api(url(routes.api.tasks.index));

  return response;
};

export const storeTask = async (data) => {
  const response = await api(
    url(routes.api.tasks.store),
    TYPE_FETCHING.post,
    data
  );

  return response;
};
