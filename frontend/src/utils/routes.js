import { API_URL } from "./config.js";

export const routes = {
  api: {
    auth: {
      register: API_URL + "/auth/register",
      login: API_URL + "/auth/login",
      logout: API_URL + "/auth/logout",
    },
  },
};
