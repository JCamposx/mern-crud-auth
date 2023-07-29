import { responseSuccessJson } from "../../libs/responseJson.js";

const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  responseSuccessJson(res);
};

export default logout;
