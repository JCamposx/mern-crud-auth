import api from "../../utils/api.js";
import { TYPE_FETCHING } from "../../utils/constants.js";
import { routes, url } from "../../utils/routes.js";

const logout = async () => {
  const response = await api(url(routes.api.auth.logout), TYPE_FETCHING.post);

  return response;
};

export default logout;
