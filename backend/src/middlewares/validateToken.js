import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { returnErrorJson } from "../libs/responseJson.js";

dotenv.config();

const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    returnErrorJson(res, {
      status: 401,
      message: "User is not authenticated",
    });

    return;
  }

  const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

  jwt.verify(token, TOKEN_SECRET, (error, user) => {
    if (error) {
      returnErrorJson(res, {
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
