import api from "../utils/api.js";
import { TYPE_FETCHING } from "../utils/constants.js";
import { routes, url } from "../utils/routes.js";

export const getAllTasks = async () => {
  const response = await api(url(routes.api.tasks.index));

  return response;
};

export const getTask = async (id) => {
  const response = await api(url(routes.api.tasks.show, { id }));

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

export const updateTask = async (id, data) => {
  const response = await api(
    url(routes.api.tasks.update, { id }),
    TYPE_FETCHING.put,
    data
  );

  return response;
};

export const deleteTask = async (id) => {
  const response = await api(
    url(routes.api.tasks.delete, { id }),
    TYPE_FETCHING.delete
  );

  return response;
};
