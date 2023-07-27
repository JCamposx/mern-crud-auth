import bcrypt from "bcryptjs";

import { createAccessToken } from "../../libs/jwt.js";
import User from "../../models/user.model.js";

const register = async (req, res) => {
  const registerUser = async () => {
    const { username, email, password } = req.body;

    const user = await createUser({ username, email, password });

    const token = await createAccessToken({ id: user._id });

    res.cookie("token", token);

    res.json({
      success: true,
      items: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          token,
        },
      },
    });
  }

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
    const errorStatus = error.status ?? 500;

    res.status(errorStatus).json({
      success: false,
      items: {
        error: error.message,
      },
    });
  }
};

export default register;
