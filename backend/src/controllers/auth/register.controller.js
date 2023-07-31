import bcrypt from "bcryptjs";

import { createAccessToken } from "../../libs/jwt.js";
import {
  responseErrorJson,
  responseSuccessJson,
} from "../../libs/responseJson.js";
import User from "../../models/user.model.js";

const register = async (req, res) => {
  const registerUser = async () => {
    const { username, email, password } = req.body;

    const usernameValidation = await checkUserWithUsernameExists(username);

    const emailValidation = await checkUserWithEmailExists(email);

    if (!usernameValidation.success || !emailValidation.success) {
      throw {
        status: 400,
        message: [
          usernameValidation.message && usernameValidation.message,
          emailValidation.message && emailValidation.message,
        ].filter((message) => message ?? false),
      };
    }

    const user = await createUser({ username, email, password });

    const token = await createAccessToken({ id: user._id });

    res.cookie("token", token);

    responseSuccessJson(res, {
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

  const checkUserWithUsernameExists = async (username) => {
    const user = await User.findOne({ username });

    if (user) {
      return {
        success: false,
        message: "Username is already taken",
      };
    }

    return { success: true };
  };

  const checkUserWithEmailExists = async (email) => {
    const user = await User.findOne({ email });

    if (user) {
      return {
        success: false,
        message: "Email is already taken",
      };
    }

    return { success: true };
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
    responseErrorJson(res, error);
  }
};

export default register;
