import { returnSuccessJson } from "../../libs/responseJson.js";

const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  returnSuccessJson(res);
};

export default logout;
