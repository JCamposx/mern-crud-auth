import api from "../../utils/api.js";
import { routes, url } from "../../utils/routes.js";

const verifyToken = async () => {
  const response = await api(url(routes.api.auth.verifyToken));

  return response;
};

export default verifyToken;
