import axios from "./axios.js";
import { TYPE_FETCHING } from "./constants.js";

const api = (path, type = TYPE_FETCHING.get, data = null) => {
  const handleRequest = async (axiosFunction) => {
    try {
      const response = await axiosFunction(path, data);

      return {
        success: true,
        data: response.data.items,
      };
    } catch (error) {
      const errors = error.response.data.items.error;

      return {
        success: false,
        errors: typeof errors == "string" ? [errors] : errors,
      };
    }
  };

  const requestOptions = {
    [TYPE_FETCHING.get]: () => handleRequest(axios.get),
    [TYPE_FETCHING.post]: () => handleRequest(axios.post),
    [TYPE_FETCHING.put]: () => handleRequest(axios.put),
    [TYPE_FETCHING.delete]: () => handleRequest(axios.delete),
  };

  return requestOptions[type]();
};

export default api;
