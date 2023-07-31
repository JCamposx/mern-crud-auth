import api from "../../utils/api.js";
import { TYPE_FETCHING } from "../../utils/constants.js";
import { routes, url } from "../../utils/routes.js";

const register = async (data) => {
  const response = await api(
    url(routes.api.auth.register),
    TYPE_FETCHING.post,
    data
  );

  return response;
};

export default register;
