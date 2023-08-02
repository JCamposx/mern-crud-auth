import jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../../config.js";
import { responseErrorJson, responseSuccessJson } from "../../libs/responseJson.js";

const verifyToken = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    responseErrorJson(res, {
      status: 401,
      message: "User is not authenticated",
    });

    return;
  }

  jwt.verify(token, TOKEN_SECRET, (error, user) => {
    if (error) {
      responseErrorJson(res, {
        status: 401,
        message: "Invalid token",
      });

      return;
    }
  });

  responseSuccessJson(res);
};

export default verifyToken;
