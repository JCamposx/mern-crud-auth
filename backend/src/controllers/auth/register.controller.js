import bcrypt from "bcryptjs";

import { createAccessToken } from "../../libs/jwt.js";
import { returnErrorJson, returnSuccessJson } from "../../libs/responseJson.js";
import User from "../../models/user.model.js";

const register = async (req, res) => {
  const registerUser = async () => {
    const { username, email, password } = req.body;

    const user = await createUser({ username, email, password });

    const token = await createAccessToken({ id: user._id });

    res.cookie("token", token);

    returnSuccessJson(res, {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        token,
      },
    });
  };

  const createUser = async (data) => {
    const { username, email, password } = data;

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email,
      password: passwordHashed,
    });

    await user.save();

    return user;
  };

  try {
    await registerUser();
  } catch (error) {
    returnErrorJson(res, error);
  }
};

export default register;
