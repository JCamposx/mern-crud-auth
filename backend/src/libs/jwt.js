import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createAccessToken = (payload) => {
  const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          reject({
            status: 500,
            message: error.message,
          });
        }

        resolve(token);
      }
    );
  });
};
