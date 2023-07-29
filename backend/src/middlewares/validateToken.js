import jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../config.js";
import { responseErrorJson } from "../libs/responseJson.js";

const validateToken = (req, res, next) => {
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
        status: 403,
        message: "Invalid token",
      });

      return;
    }

    req.user = user;
  });

  next();
};

export default validateToken;
